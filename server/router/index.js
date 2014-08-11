/**
 * The Index of Routes
 */
module.exports = function (app) {
    // The users route
    app.use('/users', require('./routes/users'));
}

