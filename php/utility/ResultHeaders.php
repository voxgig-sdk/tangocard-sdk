<?php
declare(strict_types=1);

// Tangocard SDK utility: result_headers

class TangocardResultHeaders
{
    public static function call(TangocardContext $ctx): ?TangocardResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
