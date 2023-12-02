import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/

// Babel conditional Plugins
const conditionalPlugins = [];
if (process.env.MIGHTYMELD) {
  conditionalPlugins.push("@mightymeld/runtime/babel-plugin-mightymeld");
}

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [...conditionalPlugins],
      },
    }),
  ],
});
