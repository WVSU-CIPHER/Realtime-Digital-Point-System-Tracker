<?php

include_once "vendor/autoload.php";
include_once "backend/utils/string.php";

use Backend\Router;
use Backend\Utils\StringMethods;

spl_autoload_register(function ($class_name) {
    $paths = explode('\\', $class_name);
    $paths = array_map(fn($p) => StringMethods::camelToKebab($p), $paths);

    // echo 'Class Used: ' . join('/', $paths) . '.php';

    include_once join('/', $paths) . '.php';
});

include_once "backend/router.php";

$router = new Router();
$router->render('/', 'index.html');

$router->run();