<?php

namespace AppBundle\Repository;
use Doctrine\ORM\EntityRepository;

/**
 * PersonRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class PersonRepository extends EntityRepository
{
	public function create($person)
	{
		$em = $this->getEntityManager();
		$em->persist($person);
		$em->flush();
		return $person;
	}

		public function findBySearch($searchTerm)
	{
		return $this->createQueryBuilder('Company')
			->select('Company')
			->where('Company.firstName LIKE :searchTerm')
			->orWhere('Company.lastName LIKE :searchTerm')
			->setParameter('searchTerm', '%'.$searchTerm.'%')
			->getQuery()
			->getResult();
	}
}
