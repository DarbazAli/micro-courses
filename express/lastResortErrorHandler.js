/* 
    Last Resort Error Handler

    @file: express/lastResortErrorHandler
    @author: Darbaz Ali
    @date: Jan 11, 2022

    @description
    When nothing else manages to catch an error during a request,
    we at least catch it here and log it.

*/
const { error } = console

const lastResortErrorHandler = (err, req, res, next) => {
    const traceId = req.traceId ? req.context.traceId : "none"
    error(traceId, err)

    res.status(500).send("error")
}

export default lastResortErrorHandler
