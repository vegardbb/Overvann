<?php

namespace AppBundle\Tests\Controller;

use Doctrine\ORM\NoResultException;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ProjectControllerTest extends WebTestCase
{
	/**
	 * @var \Doctrine\ORM\EntityManager
	 */
	private $em;

	public function setUp()
	{
		self::bootKernel();
		$this->em = static::$kernel->getContainer()
			->get('doctrine')
			->getManager();
	}

    /*
     * As a non-authenticated user, attempting to create a project must fail and redirect you to login page.
     * This test asserts that that there is al ink on the overview page /anlegg
     * */
	public function testCreateProjectFail()
	{
		$client = static::createClient();
		$crawler = $client->request('GET', '/prosjekter');

		//Check if link to create Project exists
		$links = $crawler
			->filter('a:contains("Lag nytt prosjekt")');
		$this->assertEquals(1, $links->count());

		$link = $links
			->eq(0)
			->link();

		//Click on create project and get redirected to login
		$client->click($link);
		$this->assertEquals(302, $client->getResponse()->getStatusCode());
        $client->followRedirect();
        $this->assertTrue($client->getResponse()->isSuccessful());

		/* //
        $projectName = 'testProsjekt';
		//Get the form
		$form = $crawler->selectButton('project[save]')->form(array(
			'project[name]' => $projectName,
			'project[field]' => 'alt',
			'project[description]' => 'regnbed'
		));
		$client->submit($form);
		$client->followRedirect();

		//Check if the project exists in the list
		$this->assertContains($projectName, $client->getResponse()->getContent()); */
	}

	public function tearDown()
	{
		parent::tearDown();
		$projects = null;
		try {
			$projects = $this->em->getRepository('AppBundle:Project')->findProjectsByName('testProsjekt');
		} catch (NoResultException $t) {
			//$this->em->close();
			return;
		}
		if ($projects) {
			foreach ($projects as $project) {
			 	$this->em->remove($project);
			 }
			$this->em->flush();
		}
		$this->em->close();
        unset($this->em);
	}
}