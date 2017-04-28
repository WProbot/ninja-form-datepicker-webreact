<?php if ( ! defined( 'ABSPATH' ) ) exit;

/*
Plugin Name: Ninja Forms - Datepicker Webreact
Plugin URI: http://ninjaforms.com/
Description: Set defaults for the jQuery UI Datepicker in Ninja Forms
Version: 0.0.1
Author: Webreact
Author URI: http://webreact.nl

Copyright (c) 2017 The WP Ninjas/Webreact

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

class NF_Datepicker_Webreact {

    public function __construct() {
        add_filter( 'ninja_forms_enqueue_scripts', 'nf_datepicker_options' );

        function nf_datepicker_options() {

            $settings = array(
                'weekdays' => 'foor',
                'vacactiondays' => 'bar'
            );

            wp_register_script('nf_datepicker_options', plugin_dir_url( __FILE__ ) . 'js/locale_date.js', array( 'jquery' ), false, true );
            wp_localize_script('nf_datepicker_options', 'settings', $settings);
            wp_enqueue_script('nf_datepicker_options');

        }


    }
}

new NF_Datepicker_Webreact();
