<?php
declare(strict_types=1);

// Tangocard SDK utility: result_body

class TangocardResultBody
{
    public static function call(TangocardContext $ctx): ?TangocardResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
