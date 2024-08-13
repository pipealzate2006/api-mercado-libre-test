import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
export const readJSON = (path) => require(path);
