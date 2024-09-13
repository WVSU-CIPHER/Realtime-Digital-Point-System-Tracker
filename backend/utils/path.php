<?php

namespace Backend\Utils;

class Path
{
    public static function fromDist(string $path): string
    {
        return self::resolve('dist', $path);
    }

    public static function resolve(string ...$paths): string
    {
        return join('/', array_map(fn($p) => trim($p, '/'), $paths));
    }
}