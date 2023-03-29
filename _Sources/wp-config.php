<?php
define( 'UPLOADS', 'archivos' );
/** 
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'jorgesch_wp');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'jorgesch_userdb');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', 'RvJpSch1157');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '8glL2T0s[BMi ME$P~-htB+J55|T:h*7g*P56c&Cu>7mBK.W>S!?#Y7.U%NI!HTD');
define('SECURE_AUTH_KEY', 'fNXpr`V , ]qL]fr1RcPVJc}DB{f7lx{dCBs-vYKYK8%Y_fb@NJTTfct%DU)kZMQ');
define('LOGGED_IN_KEY', 'M<|U)|%SI$Te&sj<?YW@1|m.4^$8aNMq tU@fDGe4(w>0<&cQ>D&Z;3`^Y{;Hn6U');
define('NONCE_KEY', '%oa>P~#*k!?iW{S DKK=}~oH|xw1!GP6:SXhF^uEDxZ?GyyN{S%+w0ky_$BPE0kF');
define('AUTH_SALT', '=9NN;5X-m:J ?<xmAa7H7Rvq.[S]g-?$n}2RgH-/EMhk~2Q6-*lklkR4lIF0=Gmh');
define('SECURE_AUTH_SALT', 'rxi9! y#9!~!Zd^^uAba2t(^zmbih_+N~Ec>|C{acyt{hH4>N^%CT`*A`Pl^y;Da');
define('LOGGED_IN_SALT', '(`$Z<p@+wbHZ.p`WxC]]fBfcWeOmuqpeaC9)s1B+$4|,e}Jn| 5qX$D9dEYhJ8*l');
define('NONCE_SALT', '7}loj-,N9s1+`?r+y(;/rQk5DkP*+z`oST.;|]zcTB|3F`w^b^P+!8..C-C[YH q');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'pdv';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

//Disable File Edits
define('DISALLOW_FILE_EDIT', true);