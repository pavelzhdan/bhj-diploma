/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * Имеет свойство HOST, равно 'https://bhj-diplom.letsdocode.ru'.
 * */
class Entity {
  constructor(){
    this.HOST = "";
    this.URL = "https://bhj-diplom.letsdocode.ru";
  }
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list( data, callback = f => f ) {
    const xhr = createRequest({
      url: String(this.URL)+String(this.HOST),
      data: {
        username: data.mail,
        password: data.password
      },
      method: 'GET',
    },
    callback = (err, response)=>{
      console.log( err );
      console.log( response );
    });
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create( data, callback = f => f ) {
    let copy =Object.assign({_method: 'PUT'}, data ),
    const xhr = createRequest({
      url: String(this.URL)+String(this.HOST),
      method: 'POST',
      data
    },
      callback = (err, response) => {
        console.log( err );
        console.log( response );
      });
  };

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get( id = '', data, callback = f => f ) {
    let copy =Object.assign(id = '', data );
    const xhr = createRequest({
      url: String(this.URL)+String(this.HOST),
      copy,
      method: 'GET'},

     callback = (err, response) => {
        console.log( 'Ошибка, если есть', err );
        console.log( 'Данные, если нет ошибки', response );
    })
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove( id = '', data, callback = f => f ) {
    let copy = Object.assign({ id = '' }, data );
    copy = Object.assign({ _method = 'DELETE' }, data );
    const xhr = createRequest({
      url: String(this.URL)+String(this.HOST),
      copy,
      method: 'GET'},

      callback = (err, response) => {
        console.log( err );
        console.log( response );
      }
    )}
}

