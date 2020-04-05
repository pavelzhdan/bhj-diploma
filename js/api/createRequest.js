/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    let xhr = new XMLHttpRequest();
    if(options.method === "GET"){
        let userInfo = [];
        for(let dataElement in options.data){
            userInfo.push(options.data[dataElement]);
        };    
        xhr.open(options.method, `${options.url}?mail=${userInfo[0]}&password=${userInfo[1]}`);
    } else {
        formData = new FormData;
        for(dataElement in options.data){
            formData.append(dataElement, `${options.data.dataElement}`);
        };        
        xhr.open(options.method, options.url);
        
    };
    xhr.withCredentials = true;
    xhr.responseType = 'json';
    if(!typeof formData === undefined){
        xhr.send(formData);
    } else{
        xhr.send();
    };

    let err;
    let response;

    if(xhr.status === 200){ 
        err = null;
        response = xhr.responseText;
        options.callback(err, response);
    } else {
        err = xhr.statusText;
        response  = undefined;
        options.callback(response);
    };
};



/*const createRequest = (options = {}) => {
    let xhr = new XMLHttpRequest();
    if(options.method === "GET"){
        xhr.open(options.method, `${options.url}?mail=${options.data.mail}&password=${options.data.password}`);
        xhr.withCredentials = true;
        xhr.responseType = 'json';
        /*let headersName = Object.getOwnPropertyNames(options.headers);
        for(let i=0; i< headersName.length; i++){
            let currentName = headersName[i]
            xhr.setRequestHeader(currentName, options.headers.currentName);
        };
        xhr.send();
    } else {
        formData = new FormData;

        for(dataElement in options.data){
            formData.append(dataElement, `${options.data.dataElement}`);
        };        
        xhr.open(options.method, options.url);
        xhr.withCredentials = true;
        xhr.responseType = 'json';
        /*for (head in headers){
            xhr.setRequestHeader(head, options.headers[head]);
        };
        xhr.send(formData);
    };
    let err;
    let response;

    if(xhr.status === 200){ 
        err = null;
        response = xhr.responseText;
        options.callback(err, response);
    } else {
        err = xhr.statusText;
        response  = undefined;
        options.callback(err);
    };
};*/

        /*let headersName = Object.getOwnPropertyNames(options.headers);
        for(let i=0; i< headersName.length; i++){
            let currentName = headersName[i]
            xhr.setRequestHeader(currentName, options.headers.currentName);
        };
        if(options.headers){
        for (head in options.headers){
            xhr.setRequestHeader(head, options.headers[head]);
        };
    };*/

            /*for (head in headers){
            xhr.setRequestHeader(head, options.headers[head]);
        };*/