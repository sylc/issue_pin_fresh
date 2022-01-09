import { start } from "./deps_server.ts";
import routes from "./routes.gen.ts";

await start(routes);
