function parserError(err) {
    if(Array.isArray(err)) {
        return err.map(e => e.msg).join('\n');
    } else if(err.name == 'ValidationError') {
        return Object.values(err.errors).map(v => v.message).join('\n');
    } else {
        return err.message;
    }
}

module.exports = {
    parserError
}