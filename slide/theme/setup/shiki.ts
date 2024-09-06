import { ShikiSetupReturn } from "@slidev/types";
import { defineShikiSetup } from "@slidev/types";
import fs from "node:fs";

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: JSON.parse(fs.readFileSync(`${__dirname}/shiki/dark.json`, "utf-8")),
      light: JSON.parse(fs.readFileSync(`${__dirname}/shiki/light.json`, "utf-8")),
    },
  } as ShikiSetupReturn;
});
