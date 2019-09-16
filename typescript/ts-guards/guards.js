function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = 'response header';
        this.result = 'response result';
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'error header';
        this.message = 'error message';
    }
    return MyError;
}());
function handle(response) {
    if (response instanceof MyResponse) {
        return {
            info: response.header + response.result
        };
    }
    else {
        return {
            info: response.header + response.message
        };
    }
}
function setAlertType(type) {
    console.log(type);
}
setAlertType('success');
setAlertType('warning');
setAlertType('danger');
// setAlertType('default'); // error
