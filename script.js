var modalMap = document.document.querySelector('.map-popup');
var mapLink = document.document.querySelector('.map-link');
var mapClose = document.document.querySelector('.map-close');

mapLink.addEventListener("click" function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

mapClose.addEventListener("click" function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show")
});
window.addEventListener("keydown" function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalMap.classList.contains("modal-show")) {
      modalMap.classList.remove("modal-show");
    }
  }
});
