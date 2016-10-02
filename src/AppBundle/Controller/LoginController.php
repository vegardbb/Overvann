<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class LoginController extends Controller
{
    public function loginAction()
    {
        $authenticationUtils = $this->get('security.authentication_utils');

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        // TODO: Define login directory under app/Resources/views, and login.html.twig within this directory
		return $this->render(
                        'login/login.html.twig', array(
                    // last username entered by the user
                    'last_username' => $lastUsername,
                    'error' => $error,
                        )
        );
    }

    // TODO: define home pages for admin as well as plain users. Currently unused
	public function loginRedirectAction()
    {
        if ($this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return $this->redirectToRoute('control_panel');
        } else {
            return $this->redirectToRoute('profile');
        }
    }

    public function loginCheckAction()
    {
    }
}
