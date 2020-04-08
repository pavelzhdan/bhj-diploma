/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * Имеет свойство HOST, равно 'https://bhj-diplom.letsdocode.ru'.
 * */
class Entity {
  constructor(){
    this.HOST = "https://bhj-diplom.letsdocode.ru";
    this.URL = " ";
  }
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list( data, callback = f => f ) {
    return createRequest({
      url: String(this.HOST)+String(this.URL),
      data,
      method: 'GET',
      callback});
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create( data, callback = f => f ) {
    return createRequest({
      url: String(this.HOST)+String(this.URL),
      method: 'POST',
      data: Object.assign({_method: 'PUT'}, data ),
      callback
      });
  };

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get( id = '', data, callback = f => f ) {
     return createRequest({
      url: String(this.HOST)+String(this.URL),
      data: Object.assign({id: id}, data ),
      method: 'GET',
      callback
    })
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove( id = '', data, callback = f => f ) {
    return createRequest({
      url: String(this.HOST)+String(this.URL),
      data: Object.assign({ _method: 'DELETE' }, { id: id }, data ),
      method: 'GET',
      callback
    })
  }
}