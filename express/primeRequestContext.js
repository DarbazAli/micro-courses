/* 
    Prime Request Context

    @file primeRequestContext
    @author: Darbaz Ali
    @date: Jan 11, 2022

    @description
    This middleware's job is to set up values that we'll want to recive
    on every request.
*/
import uuid from "uuid/v4"

const primeRequestContext = (req, res, next) => {
    req.context = {
        traceId: uuid(),
    }

    next()
}

export default primeRequestContext
