function hasUser() {
    return (req, res, next) => {
        next();
    }
}

function hasRole() {
    return (req, res, next) => {
        next();
    }
}

module.exports = {
    hasUser,
    hasRole
}