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
        for(let property in options.data){
            formData.append(property, `${options.data[property]}`);
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