/**
 * @vitest-environment node
 */
import Path from "path"
import { fileURLToPath } from "node:url"
import { defineConfig, mergeConfig } from "vitest/config"
import viteConfig from "./vite.config"

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            include: ["**/*.spec.ts", "**/*.test.ts"],
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
