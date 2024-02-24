import { defineConfig, passthroughImageService } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), compressor()],
  output: "server",
  adapter: netlify(),
  image: {
    service: passthroughImageService()
  }
});