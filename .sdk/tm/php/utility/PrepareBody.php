<?php
declare(strict_types=1);

// Tangocard SDK utility: prepare_body

class TangocardPrepareBody
{
    public static function call(TangocardContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
