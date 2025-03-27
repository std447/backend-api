#!/bin/sh

set -e



curl -fsSL https://deno.land/install.sh | sh

export PATH="$DENO_INSTALL/bin:$PATH"

deno run -EN server.ts

