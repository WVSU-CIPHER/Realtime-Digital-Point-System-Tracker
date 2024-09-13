<?php

namespace Backend;

use Backend\Utils\Path;
use Bramus\Router\Router as BramusRouter;
use Dallgoot\Yaml\Yaml;

class Router extends BramusRouter
{
    public static string $routeDirectory;

    public function __construct()
    {
        self::$routeDirectory = Path::fromDist(Yaml::parseFile('server-config.yaml')->router->dir ?? "src/routes");
    }

    public function render(string $pattern, string $path, string $method = 'get')
    {
        $doc = Document::loadFromPath(Path::resolve(self::$routeDirectory, $path));

        if (method_exists($this, $method)) {
            $this -> $method($pattern, function() use ($doc) { echo $doc->saveHTML(); });
        } 
    }
}