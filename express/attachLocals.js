/* 
    Attach Locals

    @file: express/attachLocals
    @author: Darbaz Ali
    @date: Jan 11, 2022

    @description
    This middleware makes the context we setup on the requet available when
    rendering our UI.

*/

const attachLocals = (req, res, next) => {
    res.locals.context = req.context
    next()
}

export default attachLocals
