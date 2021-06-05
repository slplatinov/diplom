// Дожидаемся полной загрузки страницы

window.onload = function(){
  //получаем идентификатор элемента
  // let liPos = document.querySelector('header-menu-link');
  // console.log(liPos);
  // let elements= document. getElementsByTagName('li');
  // console.log(elements);
  // let elements = document. querySelector('li.animate');
  // console.log(elements);
  let elements = document.getElementsByClassName('animate') ;
    console.log(elements);
  let el= document.getElementsByClassName('animate').firstChild.nodeValue; 
   console.log(el);
    //вешаем на него событие
  elements.onclick = function () {
    
    //производим какие-то действия
  //  console.log(this.innerHTML);
    if (this.innerHTML == "Виндсерфинг") this.innerHTML = "Off";
    else this.innerHTML = "On";
    //предотвращаем переход по ссылке href
    return false;
  }
 }