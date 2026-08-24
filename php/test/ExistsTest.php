<?php
declare(strict_types=1);

// Tangocard SDK exists test

require_once __DIR__ . '/../tangocard_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TangocardSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
