/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    let button = document.querySelector("a.sidebar-toggle");
    button.addEventListener("click", () => {
      let mainBody = document.querySelector("body.skin-blue");
      mainBody.classList.toggle("sidebar-open");
      mainBody.classList.toggle("sidebar-collapse");
    });
  };

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    let buttons = document.querySelectorAll("li.menu-item");
    for(let button of buttons){
      button.addEventListener("click", ()=>{
        let element = event.target.closest("li");
        if(element.classList.contains("menu-item_login")){
          let window = App.getModal("login");
          window.open();
        } if (element.classList.contains("menu-item_register")){
          let window = App.getModal("register");
          window.open();
        } else {
          /*User.logout();
          if (response.success = true){
            App.setState('init');
          };*/
        }
      })
    }
  }



}
