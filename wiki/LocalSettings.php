<?php
# This file was automatically generated by the MediaWiki 1.27.0-alpha
# installer. If you make manual changes, please keep track in case you
# need to recreate them later.
#
# See includes/DefaultSettings.php for all configurable settings
# and their default values, but don't forget to make changes in _this_
# file, not there.
#
# Further documentation for configuration settings may be found at:
# https://www.mediawiki.org/wiki/Manual:Configuration_settings

# Requires
require_once "$IP/extensions/VisualEditor/VisualEditor.php";
require_once "$IP/extensions/Scribunto/Scribunto.php";

# Protect against web entry
if ( !defined( 'MEDIAWIKI' ) ) {
    exit;
}

## Uncomment this to disable output compression
# $wgDisableOutputCompression = true;

$wgSitename = "Overvannswikien";

## The URL base path to the directory containing the wiki;
## defaults for all runtime URL paths are based off of this.
## For more information on customizing the URLs
## (like /w/index.php/Page_title to /wiki/Page_title) please see:
## https://www.mediawiki.org/wiki/Manual:Short_URL
$wgScriptPath = "/wiki";

## The protocol and server name to use in fully-qualified URLs
$wgServer = "http://ovase.no";

## The URL path to static resources (images, scripts, etc.)
$wgResourceBasePath = $wgScriptPath;

## The URL path to the logo.  Make sure you change this from the default,
## or else you'll overwrite your logo when you upgrade!
$wgLogo = "$wgResourceBasePath/images/wiki.png";

## UPO means: this is also a user preference option

$wgEnableEmail = true;
$wgEnableUserEmail = true; # UPO

$wgEmergencyContact = "apache@ovase.no";
$wgPasswordSender = "apache@ovase.no";

$wgEnotifUserTalk = false; # UPO
$wgEnotifWatchlist = false; # UPO
$wgEmailAuthentication = true;

## Database settings
$wgDBtype = "mysql";
$wgDBserver = "localhost";
$wgDBname = "ovase";

$sqlCredentials = file_get_contents("$wgResourceBasePath/sql_user.secret");
$sqlCredentialsParsed = json_decode($sqlCredentials, true);
$wgDBuser = $sqlCredentialsParsed['username'];
$wgDBpassword = $sqlCredentialsParsed['password'];

# MySQL specific settings
$wgDBprefix = "wiki_";

# MySQL table options to use during installation or update
$wgDBTableOptions = "ENGINE=InnoDB, DEFAULT CHARSET=binary";

# Experimental charset support for MySQL 5.0.
$wgDBmysql5 = false;

## Shared memory settings
$wgMainCacheType = CACHE_ACCEL;
$wgMemCachedServers = [];

## To enable image uploads, make sure the 'images' directory
## is writable, then set this to true:
$wgEnableUploads = true;
#$wgUseImageMagick = true;
#$wgImageMagickConvertCommand = "/usr/bin/convert";

# InstantCommons allows wiki to use images from https://commons.wikimedia.org
$wgUseInstantCommons = false;

## If you use ImageMagick (or any other shell command) on a
## Linux server, this will need to be set to the name of an
## available UTF-8 locale
$wgShellLocale = "en_US.utf8";

## Set $wgCacheDirectory to a writable directory on the web server
## to make your wiki go slightly faster. The directory should not
## be publically accessible from the web.
#$wgCacheDirectory = "$IP/cache";

# Site language code, should be one of the list in ./languages/data/Names.php
$wgLanguageCode = "nb";

# The secret key and upgrade key are put into a separate file
$mwKeys = file_get_contents("$wgResourceBasePath/mw_keys.secret");
$mwKeysParsed = json_decode($mwKeys, true);

$wgSecretKey = $mwKeysParsed['wgSecretKey'];

# Changing this will log out all existing sessions.
$wgAuthenticationTokenVersion = "1";

# Site upgrade key. Must be set to a string (default provided) to turn on the
# web installer while LocalSettings.php is in place
$wgUpgradeKey = $mwKeysParsed['wgUpgradeKey'];

## For attaching licensing metadata to pages, and displaying an
## appropriate copyright notice / icon. GNU Free Documentation
## License and Creative Commons licenses are supported so far.
$wgRightsPage = ""; # Set to the title of a wiki page that describes your license/copyright
$wgRightsUrl = "https://creativecommons.org/licenses/by-sa/4.0/";
$wgRightsText = "Creative Commons Navngivelse-DelPåSammeVilkår";
$wgRightsIcon = "$wgResourceBasePath/resources/assets/licenses/cc-by-sa.png";

# Path to the GNU diff3 utility. Used for conflict resolution.
$wgDiff3 = "/usr/bin/diff3";

# The following permissions were set based on your choice in the installer
$wgGroupPermissions['*']['edit'] = false;

## Default skin: you can change the default skin. Use the internal symbolic
## names, ie 'vector', 'monobook':
$wgDefaultSkin = "ovasevector";
wfLoadSkin ( 'Vector' );

## Alternative skin: OvaseVector (modified vector skin). NOTE: Shares some public variables with vector.
wfLoadSkin ( 'OvaseVector' );

## Alternative skin: Timeless
wfLoadSkin( 'Timeless' );

# EditFormPreloadText, pointing users to the VisualEditor instead of the base editor.
$wgHooks['EditFormPreloadText'] = array('prefill');

function prefill(&$textbox, &$title) {
    $title_str = $title->getText();
    $textbox = "Klikk på 'opprett' knappen ovenfor for å redigere med et grafisk grensesnitt.";
}

# Extensions
##### Cite: Enables citations using <ref>-tags
# NOTE: USING <ref> right now will make VisualEditor not be able to edit the page
wfLoadExtension( 'Cite' );
##### CiteThisPage
wfLoadExtension( 'CiteThisPage' );
##### TemplateData: Enables one to specify a "template specification"
wfLoadExtension( 'TemplateData' );
$wgTemplateDataUseGUI = true; # Enables graphical template editing
##### Scribento: Something todo with creating citations
$wgScribuntoDefaultEngine = 'luastandalone';
##### ParserFunctions: Extra parsing of the MediaWiki text source code.
wfLoadExtension( 'ParserFunctions' );
##### Nuke: Enables deletion of many articles at once
wfLoadExtension( 'Nuke' );
##### WikiEditor: Used for editing pages with the default MediaWiki editor.
wfLoadExtension( 'WikiEditor' );
# Enables use of WikiEditor by default but still allows users to disable it in preferences
$wgDefaultUserOptions['usebetatoolbar'] = 1;
# Enables link and table wizards by default but still allows users to disable them in preferences
$wgDefaultUserOptions['usebetatoolbar-cgd'] = 1;
# Displays the Preview and Changes tabs
$wgDefaultUserOptions['wikieditor-preview'] = 1;
# Displays the Publish and Cancel buttons on the top right side
$wgDefaultUserOptions['wikieditor-publish'] = 1; 
##### InputBox: Enables including HTML forms in the wiki
wfLoadExtension( 'InputBox' );
##### Contributors: Enables functionality to list the contributors of an article
require_once "$IP/extensions/Contributors/Contributors.php";
##### CSS: Enables special CSS per page
require_once "$IP/extensions/CSS/CSS.php";

# VisualEditor
$wgDefaultUserOptions['visualeditor-enable'] = 1;
$wgHiddenPrefs[] = 'visualeditor-enable';
$wgVisualEditorSupportedSkins = ['vector', 'ovasevector'];

$wgVirtualRestConfig['modules']['parsoid'] = array(
    // URL to the Parsoid instance
    // Use port 8142 if you use the Debian package
    'url' => 'http://localhost:8000',
    // Parsoid "domain", see below (optional)
    'domain' => 'localhost',
    // Parsoid "prefix", see below (optional)
    'prefix' => 'localhost'
);

# Want to hide sidebar for anonymous users
# This only hides it partially, doesn't remove "toolbox"
$wgHooks['SkinBuildSidebar'][] = 'lfHideSidebar';
function lfHideSidebar( $skin, &$bar ) {
    global $wgUser;
    // Hide sidebar for anonymous users
    if ( !$wgUser->isLoggedIn() ) {
        $bar = array(
            'navigation' => array(
                array(
                    'text'   => wfMessage( 'login' ) -> text(),
                    'href'   => SpecialPage::getTitleFor( 'Login' )->getLocalURL(),
                    'id'     => 'n-login',
                    'active' => ''
                )
            )
        );
    }
    return true;
}