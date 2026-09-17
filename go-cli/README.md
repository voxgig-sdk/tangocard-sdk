# tangocard-cli

boru-driven command-line client **and** interactive REPL for the Tangocard
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/tangocard-cli)
make build

# 2. See usage (words, entities, env vars)
./tangocard-cli --help

# 3. Provide credentials once, via the environment
export TANGOCARD_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./tangocard-cli load 1 account            # {id:1} shorthand
./tangocard-cli load '{id:1}' account       # explicit match map
./tangocard-cli update '{name:"x"}' account

# 5. Override the API base URL for a single call
TANGOCARD_BASE=https://api.example.com ./tangocard-cli load 1 account

# 6. No arguments -> interactive REPL
./tangocard-cli
tangocard> load 1 account
tangocard> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/tangocard-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export TANGOCARD_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/tangocard-cli load 1 account
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### Load a single record

```sh
./tangocard-cli load 1 account          # scalar shorthand for {id:1}
./tangocard-cli load '{id:1}' account     # explicit match map
```

The query is either a **scalar** (`1`, treated as `{id:1}`) or a **match map**
(`{id:1}`, `{slug:"acme"}`). Quote the map so your shell passes it through intact.

### Update a record

```sh
./tangocard-cli update '{id:1,name:"new"}' account
```

The match map carries both the selector and the new field values; the updated
record is printed back.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export TANGOCARD_APIKEY=sk_live_xxx            # API key
export TANGOCARD_BASE=https://api.example.com  # optional: override the API base URL
./tangocard-cli load 1 account
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `tangocard>`). Each line is
evaluated as its own boru expression:

```text
$ ./tangocard-cli
tangocard> load 1 account
tangocard> /help
tangocard> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 46 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `account`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `TANGOCARD_APIKEY` | API key sent with every request. |
| `TANGOCARD_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/tangocard-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 46 entities this SDK exposes (any is valid as `<entity>`):

account add_comment_escalation all_event_type async_order async_order_detail_view async_order_line_items_view async_reason_codes_view async_update_line_item_view balance_alert_view brand_categories_view catalog choice_product country_view_summary create_account_criterion create_customer_criterion credential_type_view credit_card credit_card_deposit credit_card_unregister customer email_template_list_view email_template_view_verbose embeddable_response_dto exchange_rates_with_disclaimer line_item low_balance_alert_list_view low_balance_alert_view mobile_country n14_webhook n1_customer n2_account n3_fund n8_line_item n9_digital_template order order_view_summary prepaid_card_info prepaid_card_transaction reissue_card replacement_reason resend reward_reasons_map transfer_fund update_account update_webhook_subscription_response_view webhook

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./tangocard-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
