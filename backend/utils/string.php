<?php

namespace Backend\Utils;

/**
 * String class is a collection of string manipulation functions
 */
class StringMethods
{

    /**
     * Is not strictly limited to kebab case, as any character-separated string can be used.
     * @param string $str
     * @param string $separator
     * @return string
     */
    static function kebabToCamel(string $str, string $separator = '-'): string
    {
        $camelCase = preg_replace_callback(
            "/" . $separator . "([A-Za-z0-9])/", 
            fn($m) => $m[1],
            $str
        );

        return $camelCase;
    }

    static function camelToKebab(string $str, string $separator = '-'): string
    {
        $kebabCase = preg_replace_callback(
            "/[A-Z]/",
            fn($m) => $separator . strtolower($m[0]),
            $str
        );

        return ltrim($kebabCase, $separator);
    }

}