/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    let xhr = new XMLHttpRequest();
    if(options.method === "GET"){
        let userspecificURL = [];
        for (let property in options.data){
            userspecificURL.push(`${property}=${options.data[property]}`);
          };
        xhr.open(options.method, `${options.url}?${userspecificURL.join("&")}`);
    } else {
        formData = new FormData;
        for(dataElement in options.data){
            formData.append(dataElement, `${options.data.dataElement}`);
        };        
        xhr.open(options.method, options.url);
        
    };
    xhr.withCredentials = true;
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.responseText;
            options.callback(null, response)
        } if (!xhr.status === 200){
            console.log(`ошибка`);
        };
    };
    if(!typeof formData === undefined){
        xhr.send(formData);
    } else{
        xhr.send();
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