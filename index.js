const app = require("./app");
require('dotenv').config({ path: 'ENV_FILENAME' });













/* Global Error Handling */
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});



app.use((err, req, res, next) => {
    console.log(err);
    if(req.headersSent) {
        return next(err);
    }
    res.status(500).json({
        message: err.message,
        error: err
    });
});