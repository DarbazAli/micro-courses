import express from "express"
import { join } from "path"

import mountMiddleware from "./mountMiddleware.js"
import mountRoutes from "./mountRoutes.js"

const createExpressApp = ({ config, env }) => {
    const app = express()

    // Configure PUG
    app.set("views", join(__dirname))
    app.set("view engine", "pug")

    mountMiddleware(app, env)
    mountRoutes(app, config)

    return app
}

export default createExpressApp
