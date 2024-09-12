<?php

namespace Backend\Config;

use Backend\Utils\Path;
use Dallgoot\Yaml\Yaml;


class ServerConfig
{
    private static $config = null;
    private const CONFIG_PATH = 'server-config';

    public static function get()
    {
        try {
            if (is_null(self::$config))
                self::$config = json_decode(json_encode(Yaml::parseFile(self::CONFIG_PATH)));
    
            return self::$config;
        } catch (\Exception $e) {
            throw new ServerConfigException('Server config file not found');
        }
    }

    public static function getRouteDirectory(): string | null
    {
        if(!self::get()->router)
            return null;

        return Path::join('dist/src', self::get()->router->dir);
    }
}

class ServerConfigException extends \Exception
{
    public function __construct(string $message)
    {
        parent::__construct("Server Config Error: $message", 500);
    }
}