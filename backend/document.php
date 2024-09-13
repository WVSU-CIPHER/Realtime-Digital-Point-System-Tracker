<?php

namespace Backend;

use Gt\Dom\HTMLDocument;

class Document extends HTMLDocument
{
    public static function loadFromPath(string $path): self
    {
        if (($contents = file_get_contents($path)) === false) {
            throw new \Exception("Document Fetching Error: the load function cannot find the file specified. File path: " . $path);
        }
        return new self($contents);
    }
}