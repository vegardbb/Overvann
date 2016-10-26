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

	public function findPersonsBySearch($search)
	{
        $firstNamesearch = $this->createQueryBuilder('Person')
			->select('Person')
			->where('Person.firstName IN (:searchTerm)')
			->setParameter('searchTerm', $search)
			->getQuery()
			->getResult(); // returns an array, ja?
        $lastNamesearch = $this->createQueryBuilder('Person')
            ->select('Person')
            ->where('Person.lastName IN (:searchTerm)')
            ->setParameter('searchTerm', $search)
            ->getQuery()
            ->getResult(); // returns an array, ja?
        $result = array_merge($firstNamesearch,$lastNamesearch); // Merge is binary, still extendable with expertise field
        return $result;
	}

	public function findEditedPersons()
	{
		return $this->createQueryBuilder('Person')
			->select('Person')
			->where('Person.version > 0')
			->getQuery()
			->getResult();
	}
	
}
