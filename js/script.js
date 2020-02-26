// var open = document.querySelector(".open-form");              // нашел "напиши нам"
// var form = document.querySelector(".hidden-form");     // "нашел окно формы"
// var close = document.querySelector(".cross-form");      // "нашел крестик(закрытия) формы"

// open.addEventListener("click", function (evt) {           //  нажатие на "напиши нам"
//   evt.preventDefault();                                     // снял дефолт
//   form.classList.add("show-form");                        // добавил класс окно, для ПОКАЗА
// });


// close.addEventListener("click", function (evt) {       // нажатие на крестик "для закрытие окна"
//   evt.preventDefault();                                  //  снял дефолт
//   form.classList.remove("show-form");                  //снял класс окна, для ПОКАЗА
// });


// window.addEventListener("keydown", function (evt) {      // виндоу - это окно экрана,
//   if (evt.keyCode === 27) {                              //  "Esc"
//     if (form.classList.contains("show-form")) {             // убеждаемся что окно открыто
//       form.classList.remove("show-form");                    //тогда при нажатие Esc, удалиться класс     
//     }
//   }
// });





var openMap = document.querySelector(".map-popup");
var map = document.querySelector(".hidden-map");
var closeMap = document.querySelector(".cross-map");


openMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("show-map");
});


 closeMap.addEventListener("click", function (evt) {       // нажатие на крестик "для закрытие окна"
  evt.preventDefault();                                  //  снял дефолт
  map.classList.remove("show-map");                  //снял класс окна, для ПОКАЗА
});


 window.addEventListener("keydown", function (evt) {      // виндоу - это окно экрана,
   if (evt.keyCode === 27) {                              //  "Esc"
     if (map.classList.contains("show-map")) {             // убеждаемся что окно открыто
       map.classList.remove("show-map");                    //тогда при нажатие Esc, удалиться класс     
     }
   }
 });




// forma

var openForm = document.querySelector(".open-form")
var form = document.querySelector(".hidden-form");
var closeForm = document.querySelector(".cross-form");

openForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.add("show-form");
});


closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.remove("show-form");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (form.classList.contains("show-form")) {
      form.classList.remove("show-form");
    }
  }
});




$(document).ready(function () {
  $(".menu-service-wrap .button").click(function (evt) {
    let buttonIndex = $(".menu-service-wrap .button").index(evt.target);

    $(".service-description-item, .menu-service-wrap .button").removeClass("active");
    $(".service-description-item").eq(buttonIndex).addClass("active");
    $(evt.target).addClass("active");
    console.log()
  })

});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5500,
    autoplayHoverPause: true,
  });
});








