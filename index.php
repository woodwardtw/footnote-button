<?php 
/*
Plugin Name: Footnote Button Adder
Plugin URI:  https://github.com/
Description: Add a button for the 
Version:     1.0
Author:      ALT Lab
Author URI:  http://altlab.vcu.edu
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Domain Path: /languages
Text Domain: my-toolset

*/
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );


// add_action('wp_enqueue_scripts', 'prefix_load_scripts');

// function previx_load_scripts() {                           
//     $deps = array('jquery');
//     $version= '1.0'; 
//     $in_footer = true;    
//     wp_enqueue_script('fnbutton-main-js', plugin_dir_url( __FILE__) . 'js/fnbutton-main.js', $deps, $version, $in_footer); 
//     wp_enqueue_style( 'fnbutton-main-css', plugin_dir_url( __FILE__) . 'css/fnbutton-main.css');
// }

function load_custom_wp_admin_style() {
        wp_register_style( 'fnbutton_wp_admin_css', plugin_dir_url( __FILE__) . 'css/fnbutton-main.css', false, '1.0.0' );
        wp_enqueue_style( 'fnbutton_wp_admin_css' );
}
add_action( 'admin_enqueue_scripts', 'load_custom_wp_admin_style' );

// hooks your functions into the correct filters
function fnbutton_add_mce_button() {
            // check user permissions
            if ( !current_user_can( 'edit_posts' ) &&  !current_user_can( 'edit_pages' ) ) {
                       return;
               }
           // check if WYSIWYG is enabled
           if ( 'true' == get_user_option( 'rich_editing' ) ) {
               add_filter( 'mce_external_plugins', 'fnbutton_add_tinymce_plugin' );
               add_filter( 'mce_buttons', 'fnbutton_register_mce_button' );
               }
}
add_action('admin_head', 'fnbutton_add_mce_button');

// register new button in the editor
function fnbutton_register_mce_button( $buttons ) {
            array_push( $buttons, 'fnbutton_mce_button' );
            return $buttons;
}


// declare a script for the new button
// the script will insert the shortcode on the click event
function fnbutton_add_tinymce_plugin( $plugin_array ) {
          $plugin_array['fnbutton_mce_button'] = plugin_dir_url( __FILE__)  .'/js/fnbutton-main.js';
          return $plugin_array;
}

