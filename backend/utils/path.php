<?php

namespace Backend\Utils;

class Path
{

    public static function join(...$paths): string
    {
        return join(array_map(fn($p) => str_replace("\\", "/", $p), $paths), '/');
    }
}