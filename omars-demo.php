<?php

/**
 * Plugin Name: Omar's Demo Block
 * Plugin URI:
 * 
 **/

// strict types
declare(strict_types=1);

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

// define constants
define('OMARS_DEMO_BLOCK_DIR', plugin_dir_path(__FILE__));

add_action('init', function () {
    // register block
    \register_block_type( OMARS_DEMO_BLOCK_DIR . 'build/demo-block' );
});
