"use strict";

window.addEventListener("mouseup", function(event) {
  console.log(event.target);
  let box = document.querySelector("#main-menu");
  let trigger = document.querySelector(".menu-trigger");
  let triggerSmall = document.querySelector("#dropdown-trigger");
  let dropdown = document.querySelector("#dropdown-list");
  if (
    event.target == trigger ||
    (box.classList.contains("show") &&
      event.target != trigger &&
      event.target != triggerSmall)
  ) {
    classList(box).toggle("show");
  } else if (box.classList.contains("show") && event.target == triggerSmall) {
    classList(dropdown).toggle("show");
    return;
  }

  if (
    event.target == triggerSmall ||
    (dropdown.classList.contains("show") && event.target != triggerSmall)
  ) {
    classList(dropdown).toggle("show");
  }
});

function validateForm() {
  let firstName = document.forms["myForm"]["firstName"];
  let lastName = document.forms["myForm"]["lastName"];
  let message = document.forms["myForm"]["message"];
  let errorMsg = document.getElementsByClassName("error");
  const minInput = 3;
  const maxInput = 20;
  const minMessage = 30;
  const maxMessage = 150;
  let x = firstName.value.replace(/ /g, "").length;
  let y = lastName.value.replace(/ /g, "").length;
  let m = message.value.replace(/ /g, "").length;
  let letterOnly = /^[a-zA-Z\s]*$/;
  let alphaExp = /^[0-9a-zA-Z\s]*$/;

  for (let input = 0; input < document.forms["myForm"].length - 1; input++) {
    classList(document.forms["myForm"][input])
      .remove("invalid")
      .add("valid");
    errorMsg[input].classList.remove("show");
  }
  if (
    x < minInput ||
    x > maxInput ||
    !firstName.value.match(letterOnly) ||
    (y < minInput || y > maxInput || !lastName.value.match(letterOnly)) ||
    (m < minMessage || m > maxMessage || !message.value.match(alphaExp))
  ) {
    if (x < minInput || x > maxInput || !firstName.value.match(letterOnly)) {
      classList(firstName)
        .remove("valid")
        .add("invalid");
      classList(document.querySelector(".nameError")).add("show");
    }
    if (y < minInput || y > maxInput || !lastName.value.match(letterOnly)) {
      classList(lastName)
        .remove("valid")
        .add("invalid");
      classList(document.querySelector(".lastNameError")).add("show");
    }
    if (m < minMessage || m > maxMessage || !message.value.match(alphaExp)) {
      classList(message)
        .remove("valid")
        .add("invalid");
      classList(document.querySelector(".msgError")).add("show");
    }

    return false;
  }
  return true;
}
//custom classList chaining
function classList(elt) {
  let list = elt.classList;

  return {
    toggle: function(className) {
      list.toggle(className);
      return this;
    },
    add: function(className) {
      list.add(className);
      return this;
    },
    remove: function(className) {
      list.remove(className);
      return this;
    }
  };
}
