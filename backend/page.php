<?php

namespace Backend\Components;

use Backend\Config\ServerConfig;
use Backend\Utils\Path;

use Bramus\Router\Router;

class Page
{
    private string $content;
    private static string $routes;

    private $page_contents;

    public function __construct(string $route)
    {
        try {
            $this->page_contents = file_get_contents(Path::join(ServerConfig::getRouteDirectory(), $route));

        } catch (\Exception $e) {
            echo 'Page Fetch Error: cannot find route in files';
        }
    }

    public function attach(string $param, mixed $value)
    {
        
    }

    public function render()
    {

    }
}