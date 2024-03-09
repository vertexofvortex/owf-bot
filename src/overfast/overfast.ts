import { readFileSync } from "fs";
import OpenAPIClientAxios from "openapi-client-axios";
import type { Client as OverfastClient } from "./openapi.d.ts";
import path from "path";

const overfastAxiosClient = new OpenAPIClientAxios({
    definition: JSON.parse(
        readFileSync(path.resolve("src/overfast/openapi.json"), "utf-8")
    ),
});

const overfast = overfastAxiosClient.initSync<OverfastClient>();

export default overfast;
