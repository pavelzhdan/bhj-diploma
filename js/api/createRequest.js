/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    let xhr = new XMLHttpRequest();
    let formData = new FormData;
    if(options.method === "GET"){
        options.url += "?";
        for (let property in options.data){
            options.url += `${property}=${options.data[property]}&`;
          };
        xhr.open(options.method, options.url);
    } else {
        for(let property in options.data){
            formData.append(property, `${options.data[property]}`);
        };
        xhr.open(options.method, options.url);
    };
    xhr.withCredentials = true;
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.response;
            options.callback(null, response)
        } else if (!xhr.status === 200){
            console.log(`ошибка`);
        };
    };
    try{
        xhr.send(formData);
    } catch (err){
        console.log(err);
    };
};