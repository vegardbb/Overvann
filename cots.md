##Choice of COTS / Shelfware

Here follows the team’s choice of COTS software, also referred to as shelfware in engineering literature. The software were discovered, considered and accepted into development during the exploration phase. The shelfware/Commercial Off The Shelf Software we employ in the system helps with implementing design patterns and architectural patterns, but more importantly, they are crucial time savers that buy us more time for the paperwork. The purpose of the shelfware is to implement standard features of an application faster in order to save more time for working on the business logic, the application's unique features.

#Symfony 2.8

Our main reason for using Symfony for building the two modules upon is that we want to implement them in an MVC architecture, which enables the system to be more modifiable for future development. The Symfony library contains many useful, open source, third party components that already implement or help us implementing quite a few standard requirements for web apps in general. Symfony implements useful design patterns such as the Factory Method, Front Controller, Strategy, Template and the Composite pattern. Symfony is released under the permissive MIT license.

Another strong argument for employing Symfony in the project is that it supports our ability to make the system modifiable. A default Symfony build comes packaged with Doctrine ORM, an intermediary between the database, in which data is stored, and the data model (referred to as 'entities' in the Symfony framework). The seperation of concerns are built in to the degree that the view logic, written in a set of Twig templates, is blissfully unaware of the entities, which in turn have no built-in-knowledge of what it is they are serving application data for. This entails that OVASE may deploy whichever DBMS they want, the application itself only ever perform queries through the ORM.

Security also comprises a component of its own dedicated to authenticating users, called Security. A seperate config file called security.yml may be used to define authorizational roles, which may be assigned to or revoked from users in the controller logic. The controllers applying authorization to users, the mentioned config file, and the Security Component in Symfony are the central talking points in the Security View of the architectural documentation.

##Design Patterns applied to Symfony

 - Creational Patterns
   - Factory Method: Define an interface for creating an object, but let subclasses decide which class to instantiate; ResolvedFormTypeFactory, whose task is to resolve a form type (defined by we, the developers) given an instance of FormTypeInterface - type, an array of extensions to the mentioned type, and an instance of ResolvedFormType. Resolving the type of a form is done by calling this method.
   - Lazy Initialization: Defers instantiation of object until it is actually needed: Service Container
 - Structural Patterns
   - Composite: All objects are treated equal; 

#React.js 15

Loaded from an external server, React.js serves the need to make the website look modern and professional. React.js is a UI library that provides a set of components. It is widely renowned for being used in developing Facebook as well as Instagram. Unlike other full MVC - frameworks such as Angular and Ember, React only supports building View logic, which makes the library a perfect sidekick to Symfony, because Symfony mainly provides a framework, not a predefined UI package, for designing the View logic upon, and encapsulating it. What React is good for, is to have application data provided, graphically displaying it (the sole responsibility of the GUI), and making it interactable with for the end user and the content editor. Integrating view elements from Symfony into the scripts is a whole another question, but a resolvable challenge. Following up on usability is another important challenge.
