/**
 * @vitest-environment node
 */
import Path from "path"
import { fileURLToPath } from "node:url"
import { mergeConfig } from "vite"
import { defineConfig } from "vitest/config"
import viteConfig from "./vite.config"

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            include: ["**/*.spec.[jt]s", "**/*.test.[jt]s"],
            root: fileURLToPath(new URL("../src", import.meta.url)),
            setupFiles: fileURLToPath(new URL("../_tests/setup.ts", import.meta.url))
        },
        resolve: {
            alias: {
                "tests": Path.resolve(__dirname, "../_tests")
            }
        }
    })
)
