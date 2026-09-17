# API definition provenance

## tangocard-openapi.json

- **Source:** https://tangocard.readme.io/llms.txt → the `developers.tangocard.com/reference`
  pages. Tango's documentation site publishes OpenAPI **one operation per
  page**, each page carrying the full `openapi`/`info`/`servers`/`security`/`components` header.
- **Publisher:** Tango (Tango Card)
- **Retrieved:** 2026-09-17
- **Format:** OpenAPI 3.x
- **Size:** 366668 bytes
- **Coverage:** 56 paths, 72 methods, 175 component schemas — every operation
  Tango's API Reference lists, assembled from its 72 reference pages.

## How this file was assembled, and the API that is NOT in it

Tango publishes no single downloadable document, so this file is the reference
pages' embedded OpenAPI fragments merged: `paths` and `components` unioned,
`info`/`servers`/`security` taken as published. Nothing is hand-written and
no name is rewritten — the fragments are one document served in pieces.

The pages carry **two** `info.title` values, and this is the larger:
`Tango API` on `integration-api.tangocard.com/raas/v2`. The other,
`Auth Token acquisition`, is a single `POST /oauth/token` on a **different
host** (`sandbox-auth.tangocard.com`), so it cannot share a server with this
one and is its own SDK: `tangocard-auth-sdk`.

Rebuild with `admin/scripts/tangocard-merge.sh`; do not hand-edit this file.
