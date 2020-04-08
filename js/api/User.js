/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство HOST, равно значению Entity.HOST.
 * Имеет свойство URL, равное '/user'.
 * */
class User {

  constructor() {
    this.URL = "/user";
    this.HOST = Entity.HOST;
}
  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static setCurrent(user) {
    localStorage.setItem("user", {"id": user.id, "name": user.name});
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
    localStorage.removeItem("user");
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {
    localStorage.getItem("user");
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch( data, callback = f => f ) {
    return createRequest({
      url: String(this.HOST) + String(this.URL) + "/current",
      method: "GET",
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
      url: String(this.HOST) + String(this.URL) + "/login",
      method: "POST",
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
      url: String(this.HOST) + String(this.URL) + "/register",
      method: "POST",
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
      url: String(this.HOST) + String(this.URL) + "/logout",
      method: "POST",
      callback: (err, response) => {
        if (response.success) {
          this.unsetCurrent();
        } 
      }
    })
  }
}
