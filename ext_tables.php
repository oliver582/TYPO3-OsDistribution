<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'OS Distribution');


$GLOBALS['TBE_STYLES']['skins']['os_distribution'] = array (
	'name' => 'os_distribution',
	'stylesheetDirectories' => array(
		'css' => 'EXT:' . $_EXTKEY . '/Resources/Public/Css/Typo3Backend/'
	)
);
