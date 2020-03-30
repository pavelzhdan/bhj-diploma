/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
        let xhr = new XMLHttpRequest();
        xhr.open(options.method, `${options.url}?mail=${options.data.mail}&password=${options.data.password}`);
        xhr.withCredentials = true;
        xhr.responseType = options.responseType;
        for (head in headers){
            xhr.setRequestHeader(head, options.headers[head]);
        };
        xhr.send();
    /*} else {
        let xhr = new XMLHttpRequest;
        formData = new FormData;

        for(dataElement in options.data){
            formData.append(dataElement, `${options.data.dataElement}`);
        };        
        xhr.open(options.method, options.url);
        xhr.withCredentials = true;
        xhr.responseType = options.responseType;
        for (head in headers){
            xhr.setRequestHeader(head, options.headers[head]);
        };
        xhr.send(formData);
    };
    let err;
    let response;
    let callbackFunction = options.callback;

    if(xhr.status === 200){ 
        err = null;
        response = xhr.responseText;
        callbackFunction(err, response);
    } else {
        err = xhr.statusText;
        response  = undefined;
        callbackFunction(err, response);
    };*/
};