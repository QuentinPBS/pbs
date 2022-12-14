<?php
declare(strict_types=1);

/**
 * Laravel API Response Builder - configuration file
 *
 * See docs/config.md for detailed documentation
 *
 * @author    Marcin Orlowski <mail (#) marcinOrlowski (.) com>
 * @copyright 2016-2022 Marcin Orlowski
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      https://github.com/MarcinOrlowski/laravel-api-response-builder
 *
 * @noinspection PhpCSValidationInspection
 * phpcs:disable Squiz.PHP.CommentedOutCode.Found
 */

return [
	/*
	|-------------------------------------------------------------------------------------------------------------------
	| Code range settings
	|-------------------------------------------------------------------------------------------------------------------
	*/
	'min_code'          => 100,
	'max_code'          => 1024,

	/*
	|-------------------------------------------------------------------------------------------------------------------
	| Error code to message mapping
	|-------------------------------------------------------------------------------------------------------------------
	*/
	'map'               => [
        251 => 'api.invalid_credentials'
	],
];
