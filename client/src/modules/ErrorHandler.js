
class ErrorHandler {

    static handle(error, cb) {
        error.response.json().then((json) => {
            const errors = json.errors ? json.errors : {};
            errors.summary = json.message;
            cb(errors);
        });
    }

}

export default ErrorHandler;