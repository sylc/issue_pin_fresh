/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

// temporary workaround
declare global {
  // deno-lint-ignore no-explicit-any no-var
  var URLPattern: any;
}

export * from "https://raw.githubusercontent.com/lucacasonato/fresh/6abf62c832ced41ae9365b48939221adfbe74e5d/runtime.ts";
import { IS_BROWSER } from "https://raw.githubusercontent.com/lucacasonato/fresh/6abf62c832ced41ae9365b48939221adfbe74e5d/runtime.ts";
import { setup, tw } from "https://esm.sh/twind";
export { setup, tw };
if (IS_BROWSER) {
  setup({});
}
