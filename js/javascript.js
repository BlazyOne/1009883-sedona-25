var fastHotelButton = document.querySelector(".fast-hotel-button");

var fastHotelForm = document.querySelector(".fast-hotel-form");

var arrival = document.querySelector("#arrival-field");
var departure = document.querySelector("#departure-field");
var adults = document.querySelector("#adults-field");
var children = document.querySelector("#children-field");

fastHotelForm.classList.remove("fast-form-show");

fastHotelButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  fastHotelForm.classList.toggle("fast-form-show");
  fastHotelForm.classList.remove("fast-form-error");
});

fastHotelForm.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    fastHotelForm.classList.remove("fast-form-error");
    fastHotelForm.offsetWidth = fastHotelForm.offsetWidth;
    fastHotelForm.classList.add("fast-form-error");
  }
});
