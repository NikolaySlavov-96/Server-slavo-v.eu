function hasUser() {
    return (req, res, next) => {
        next();
        if(req.user) {
            next()
        } else {
            res.redirect('/');
        }
    }
}

function hasRole() {
    return (req, res, next) => {
        if(req.user == undefined || req.user.role.includes(role) == false) {
            res.redirect('/');
        } else {
            next();
        }
    }
}

module.exports = {
    hasUser,
    hasRole
}