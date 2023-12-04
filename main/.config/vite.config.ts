import Path from "path"
import { defineConfig } from "vite"
import swc from "unplugin-swc"

export default defineConfig({
    plugins: [
        swc.vite({
            tsconfigFile: __dirname + "/tsconfig.json"
        })
    ],
    optimizeDeps: {
        exclude: []
    },
    resolve: {
        alias: {
            "_tests": Path.resolve(__dirname, "../_tests"),
            "shared/tests": Path.resolve(__dirname, "../../shared/_tests"),
            "shared": Path.resolve(__dirname, "../../shared/dist"),
            "src": Path.resolve(__dirname, "../src")
        }
    }
})
