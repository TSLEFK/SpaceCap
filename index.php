<?php
/**
 *
 * @version 0.0.0
 * @author TSLEFK
 * START 20160429
 */

 /**
  *require __DIR__.'/../bootstrap/autoload.php';
  *
  *
  */
    $title = "SpaceCatcher(仮)";
?>

<!DOCTYPE html>
<html>
    <head>   
<?php 
//head tags -JS,CSS, and more... 
require 'layouts/TopHead.php';
?>
    </head>
    <body>
        <header>
<?php
//header tag -has SiteName,Navigater
require 'layouts/Header.php';
?>
        </header>
        <div id="main" role="main">

<?php
        //HTML code
         require 'layouts/TopPage.php';
?>

        </div>
        <footer>
<?php
//footer tag -has Sitemap 
require 'layouts/TopFotter.php';
?>
        </footer>
    </body>
</html>