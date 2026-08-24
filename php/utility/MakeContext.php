<?php
declare(strict_types=1);

// Tangocard SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TangocardMakeContext
{
    public static function call(array $ctxmap, ?TangocardContext $basectx): TangocardContext
    {
        return new TangocardContext($ctxmap, $basectx);
    }
}
