/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство HOST, равно значению Entity.HOST.
 * Имеет свойство URL, равное '/user'.
 * */
class User {

  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static setCurrent(user) {
    localStorage.user = JSON.stringify(user);
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
    delete localStorage.user;
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {
    const data = localStorage.user;
    if(!data == undefined){
    return JSON.parse(data)
    }  
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch( data, callback = f => f ) {
    return createRequest({
      url: `${this.HOST}${this.URL}/current`,
      method: "GET",
      data,
      callback: (err, response) => {
        if (response.success) {
          this.setCurrent(response.user);
        } else {
          this.unsetCurrent();
        }
      }
    })
  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login( data, callback = f => f ) {
    return createRequest({
      url: `${this.HOST}${this.URL}/login`,
      method: "POST",
      data,
      callback: (err, response) => {
        if (response.success) {
          this.setCurrent(response.user);
        } 
      }
    })
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register( data, callback = f => f ) {
    return createRequest({
      url: `${this.HOST}${this.URL}/register`,
      method: "POST",
      data,
      callback: (err, response) => {
        if (response.success) {
          this.setCurrent(response.user);
        } 
      }
    })
  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout( data, callback = f => f ) {
    return createRequest({
      url: `${this.HOST}${this.URL}/logout`,
      method: "POST",
      data,
      callback: (err, response) => {
        if (response.success) {
          this.unsetCurrent();
        } 
      }
    })
  }
}

User.URL = "/user";
User.HOST = Entity.HOST;