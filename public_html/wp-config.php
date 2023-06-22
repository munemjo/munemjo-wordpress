<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u329178650_kbWC5' );

/** Database username */
define( 'DB_USER', 'u329178650_ergJQ' );

/** Database password */
define( 'DB_PASSWORD', '3u0qiLAMkO' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'l7=WQu;h~2]Zb4ye%@N~N=4.i|b4k;[hljblX]m+m55+]}K&sf!*3zW2woUX(9.-' );
define( 'SECURE_AUTH_KEY',   '|II@)XgGi|b,9f$%/,P*1_^Cy@h qO_Q>ao3K?_xy6)9Qr[BA~31`,gMU.f#19B[' );
define( 'LOGGED_IN_KEY',     'yzk*o?qBT8Q?;>ZrNCS,{`s7w)73SC/x!`u^-4$Dh1y30h(U?R*8@*T$0$[eJc-}' );
define( 'NONCE_KEY',         'k[j.>E*1i@/lW,noZ+t1]E-lC*zM(&K;[vb]gs^tI_T AeV^dRiG!i!-kUwg@)&L' );
define( 'AUTH_SALT',         'ga6(`1{R: *y}*#Rj5yw70Wysh`JVDeF6nXjk<-z+>@&P&278ngdjSwxA_$,[)S]' );
define( 'SECURE_AUTH_SALT',  '`0B;XKEP_wy&$i8JhOgzcII?IESf3X(<GFr}in}q=&RYp)n3FCtf9)r,u$k__7OO' );
define( 'LOGGED_IN_SALT',    'kMhsxWpy$&&l2VEz59K}?po3z=iZm$inDgKn.&|:.I)1),^K?/J(s3%qk&kx6;H;' );
define( 'NONCE_SALT',        'WT{>BZ8s9Z90tHqoVL|^pI#8qu:<=407(_{ 40m}pP=fo!3JZqi{B0S`ber4JA6f' );
define( 'WP_CACHE_KEY_SALT', 'JbByfcK8oxZaG(.qjm,C51NumyL5=@phKx9/T*N(|05Xsqwf`=|wSV]Y9L?z[G$Y' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'WP_AUTO_UPDATE_CORE', 'minor' );
define( 'FS_METHOD', 'direct' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
