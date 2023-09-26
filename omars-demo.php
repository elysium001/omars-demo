<?php

/**
 * Plugin Name: Omar's Demo Block
 * Plugin URI:
 * 
 **/

// strict types
declare(strict_types=1);

namespace OMARS_DEMO_BLOCK;

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

// define constants
define('OMARS_DEMO_BLOCK_DIR', plugin_dir_path(__FILE__));
define('OMARS_DEMO_BLOCK_URL', plugin_dir_url(__FILE__));
define('OMARS_DEMO_BLOCK_FILE', __FILE__);
define('OMARS_DEMO_BLOCK_BASENAME', plugin_basename(__FILE__));
define('OMARS_DEMO_BLOCK_VERSION', '1.0.0');

add_action('init', function () {
    // register block
    \register_block_type( OMARS_DEMO_BLOCK_DIR . 'src/demo-block' );
});
