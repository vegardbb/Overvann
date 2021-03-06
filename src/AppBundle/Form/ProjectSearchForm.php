<?php

namespace AppBundle\Form;


use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SearchType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;

class ProjectSearchForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('search', SearchType::class, array('label' => ' ','attr' => array('placeholder' => 'Søk på navn, lokasjon, ...','class'=>'form-control'), 'required' => false))

            ->add('save', SubmitType::class, array ('label' => ' ','attr'=>array('class'=>'btn btn-default glyphicon glyphicon-search')));
    }
} 