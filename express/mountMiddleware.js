import express from "express"
import { join } from "path"

import attachLocals from "./attachLocals.js"
import lastResortErrorHandler from "./lastResortErrorHandler.js"
import primeRequestContext from "./primeRequestContext.js"

// mount middleware function
const mountMiddleware = (app, env) => {
    app.use(lastResortErrorHandler)
    app.use(primeRequestContext)
    app.use(attachLocals)

    app.use(
        express.static(join(__dirname, "..", "public"), { maxAge: 86400000 })
    )
}

export default mountMiddleware
