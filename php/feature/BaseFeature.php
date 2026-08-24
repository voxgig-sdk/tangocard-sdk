<?php
declare(strict_types=1);

// Tangocard SDK base feature

class TangocardBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TangocardContext $ctx, array $options): void {}
    public function PostConstruct(TangocardContext $ctx): void {}
    public function PostConstructEntity(TangocardContext $ctx): void {}
    public function SetData(TangocardContext $ctx): void {}
    public function GetData(TangocardContext $ctx): void {}
    public function GetMatch(TangocardContext $ctx): void {}
    public function SetMatch(TangocardContext $ctx): void {}
    public function PrePoint(TangocardContext $ctx): void {}
    public function PreSpec(TangocardContext $ctx): void {}
    public function PreRequest(TangocardContext $ctx): void {}
    public function PreResponse(TangocardContext $ctx): void {}
    public function PreResult(TangocardContext $ctx): void {}
    public function PreDone(TangocardContext $ctx): void {}
    public function PreUnexpected(TangocardContext $ctx): void {}
}
