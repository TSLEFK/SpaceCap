<?php

/**
 *@author TSLEFK
 *
 *role: call toppage layout files
 */
    $title = "SpaceCatcher(仮)";
?>

<!DOCTYPE html>
<html>
    <head>   
<?php 
//head tags -JS,CSS, and more... 
require 'TopHead.php';
?>
    </head>
    <body>
        <header>
<?php
//header tag -has SiteName,Navigater
require 'Header.php';
?>
        </header>

<?php
        //HTML code
?>
        <footer>
<?php
//footer tag -has Sitemap 
require 'TopFotter.php';
?>
        </footer>
    </body>
</html>