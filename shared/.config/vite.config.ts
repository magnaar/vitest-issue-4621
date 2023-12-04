import Path from "path"
import { defineConfig } from "vite"
import swc from "unplugin-swc"

export default defineConfig({
    plugins: [
        swc.vite({
            tsconfigFile: __dirname + "/tsconfig.json"
        })
    ],
    build: {
        rollupOptions: {
            // overwrite default .html entry
            input: "src/index.ts"
        }
    },
    optimizeDeps: {
        exclude: []
    },
    resolve: {
        alias: {
            "src": Path.resolve(__dirname, "../src")
        }
    }
})
