//--------------------------------------onload
document.querySelector(".loading").style.display = "block";
document.querySelector(".body").style.display = "none";
window.onload = function () {
  // setTimeout(() => {
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".body").style.display = "block";
  // }, 1000);
};
// ____________________________________________________________________________________________________________________
// ________________________________________________________________________________________________
// ________________________________________________________________________________________________

// ---------------------------------onScroll
window.addEventListener("load", function () {
  var elem1 = document.querySelector(".react");
  var elem2 = document.querySelector(".css");
  var elem3 = document.querySelector(".html");
  var elem4 = document.querySelector(".js");
  var elem5 = document.querySelector(".restapi");
  var elem6 = document.querySelector(".photoshop");

  elms = [elem1, elem2, elem3, elem4, elem5, elem6];

  window.onscroll = function () {
    move();
  };

  let repeat = false;

  function move() {
    if (
      (document.body.scrollTop > 350 &&
        document.body.scrollTop < 460 &&
        repeat === false) ||
      (document.documentElement.scrollTop > 350 &&
        document.documentElement.scrollTop < 460 &&
        repeat === false)
    ) {
      // console.log("haha");
      repeat = true;
      let i = 0;

      if (i == 0) {
        i = 1;

        let id;

        var width = 0;

        let x = function (id) {};

        elms.forEach((elm) => {
          if (elm.classList.contains("react")) {
            id = setInterval(function () {
              frame(elm, 75);
            }, 20);
          }
          if (elm.classList.contains("css")) {
            id = setInterval(function () {
              frame(elm, 90);
            }, 20);
          }
          if (elm.classList.contains("html")) {
            id = setInterval(function () {
              frame(elm, 92);
            }, 20);
          }
          if (elm.classList.contains("js")) {
            id = setInterval(function () {
              frame(elm, 78);
            }, 20);
          }
          if (elm.classList.contains("restapi")) {
            id = setInterval(function () {
              frame(elm, 65);
            }, 20);
          }
          if (elm.classList.contains("photoshop")) {
            id = setInterval(function () {
              frame(elm, 60);
            }, 20);
          }
        });

        function frame(elm, limit) {
          if (width >= limit) {
            i = 0;
          } else {
            width++;
            elm.style.width = width + "%";
          }
        }
      }
    }
  }
});
// ____________________________________________________________________________________________________________________
// ________________________________________________________________________________________________
// ________________________________________________________________________________________________

// ------------------------validation & submission
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

let errors = [];

name.addEventListener("blur", validateName);
email.addEventListener("blur", validateEmail);
message.addEventListener("blur", validateMessage);

function validateName() {
  let error = "Name must be between 2 and 15 characters";
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
    name.classList.remove("is-valid");
    if (!errors.includes(error)) {
      errors.push(error);
    }
    document.getElementById("invalid-feedback").innerHTML = error;
    document.getElementById("invalid-feedback").style.display = "block";
  } else {
    name.classList.add("is-valid");
    name.classList.remove("is-invalid");
    if (errors.includes(error)) {
      errors.pop(error);
    }
    document.getElementById("invalid-feedback").style.display = "none";
  }
}

function validateEmail() {
  let error = "A valid email is required";
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    if (!errors.includes(error)) {
      errors.push(error);
    }
    document.getElementById("invalid-feedback").innerHTML = error;
    document.getElementById("invalid-feedback").style.display = "block";
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    if (errors.includes(error)) {
      errors.pop(error);
    }
    document.getElementById("invalid-feedback").style.display = "none";
  }
}

function validateMessage() {
  let error = "Please provide some message";
  const message = document.getElementById("message");
  const re = /^[a-zA-Z]{2,100}$/;

  if (!re.test(message.value)) {
    message.classList.add("is-invalid");
    message.classList.remove("is-valid");
    if (!errors.includes(error)) {
      errors.push(error);
    }
    document.getElementById("invalid-feedback").innerHTML = error;
    document.getElementById("invalid-feedback").style.display = "block";
  } else {
    message.classList.add("is-valid");
    message.classList.remove("is-invalid");
    if (errors.includes(error)) {
      errors.pop(error);
    }
    document.getElementById("invalid-feedback").style.display = "none";
  }
}
document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".loading").style.display = "block";
    document.querySelector(".body").style.display = "none";
    validateName();
    validateEmail();
    validateMessage();

    if (errors.length !== 0) {
      errors.reverse().forEach((error) => {
        document.getElementById("invalid-feedback").innerHTML = error;
      });
      document.querySelector(".loading").style.display = "none";
      document.querySelector(".body").style.display = "block";
      document.getElementById("invalid-feedback").style.display = "block";

      setTimeout(() => {
        document.getElementById("invalid-feedback").style.display = "none";
        document.getElementById("invalid-feedback").innerHTML = "";
      }, 5000);
    } else {
      let success = "Your concern was submitted successfully";

      setTimeout(() => {
        document.querySelector(".loading").style.display = "none";
        document.querySelector(".body").style.display = "block";
        scrollIntoContacts();
      }, 500);

      document.getElementById("invalid-feedback").style.display = "none";
      document.getElementById("positive-feedback").style.display = "block";
      document.getElementById("positive-feedback").innerHTML = success;

      name.classList.remove("is-valid");
      email.classList.remove("is-valid");
      message.classList.remove("is-valid");
      name.value = "";
      email.value = "";
      message.value = "";
      document.documentElement.scrollTop = "1000px";

      setTimeout(() => {
        document.getElementById("positive-feedback").innerHTML = "";
        document.getElementById("positive-feedback").style.display = "none";
      }, 5000);
    }
  });

function scrollIntoContacts() {
  var elmnt = document.getElementById("contact");
  elmnt.scrollIntoView();
}
// ____________________________________________________________________________________________________________________
// ____________________________________________________________________________________________________________________
// ____________________________________________________________________________________________________________________

// -----------------------------------projects

let allButton = document.querySelector(".all.btn");
let jsButton = document.querySelector(".js.btn");
let reactButton = document.querySelector(".react.btn");
let cssButton = document.querySelector(".css.btn");
let burgerBuilder = document.querySelector(".burger");
let fotofinder = document.querySelector(".foto");
let mizuxe = document.querySelector(".mizuxe");
let calorieCounter = document.querySelector(".calorie");
let uhost = document.querySelector(".uhost");
let github = document.querySelector(".git");
let omnifoods = document.querySelector(".omni");
let bookManager = document.querySelector(".book");
let coolCamp = document.querySelector(".cool");
let projectsMain = document.querySelector(".projects-main");
let project = document.querySelector(".project");

projectsMain.style.transition = "all 3s";
project.style.transition = "all 3s";
burgerBuilder.style.transition = "all 2s";

allButton.addEventListener("click", function () {
  burgerBuilder.style.display = "inline-block";
  fotofinder.style.display = "inline-block";
  mizuxe.style.display = "inline-block";
  calorieCounter.style.display = "inline-block";
  uhost.style.display = "inline-block";
  github.style.display = "inline-block";
  omnifoods.style.display = "inline-block";
  bookManager.style.display = "inline-block";
  coolCamp.style.display = "inline-block";
  project.style.transition = "display 3s";
  projectsMain.style.transition = "display 3s";
});

jsButton.addEventListener("click", function () {
  burgerBuilder.style.display = "none";
  fotofinder.style.display = "none";
  mizuxe.style.display = "none";
  uhost.style.display = "none";
  omnifoods.style.display = "none";
  coolCamp.style.display = "none";
  calorieCounter.style.display = "inline-block";
  bookManager.style.display = "inline-block";
  github.style.display = "inline-block";
  project.style.transition = "display 3s";
  projectsMain.style.transition = "display 3s";
});

cssButton.addEventListener("click", function () {
  burgerBuilder.style.display = "none";
  fotofinder.style.display = "none";
  calorieCounter.style.display = "none";
  bookManager.style.display = "none";
  github.style.display = "none";
  mizuxe.style.display = "inline-block";
  uhost.style.display = "inline-block";
  omnifoods.style.display = "inline-block";
  coolCamp.style.display = "inline-block";
  project.style.transition = "display 3s";
  projectsMain.style.transition = "display 3s";
});

reactButton.addEventListener("click", function () {
  mizuxe.style.display = "none";
  calorieCounter.style.display = "none";
  uhost.style.display = "none";
  github.style.display = "none";
  omnifoods.style.display = "none";
  bookManager.style.display = "none";
  coolCamp.style.display = "none";
  burgerBuilder.style.display = "inline-block";
  fotofinder.style.display = "inline-block";

  burgerBuilder.style.transition = "all 3s";
  fotofinder.style.transition = "all 3s";
  github.style.transition = "all 3s";
  uhost.style.transition = "all 3s";

  mizuxe.style.transition = "all 3s";
});

// ____________________________________________________________________________________________________________________
// ____________________________________________________________________________________________________________________
// ____________________________________________________________________________________________________________________

// ----------------------------------menu overlay back
// .navi__checkbox:checked ~ .navi__button__background {
//   transform: scale(80);
// }

// .navi__checkbox:checked ~ .navi__nav {
//   opacity: 1;
//   width: 100%;
// }

let x = document.querySelectorAll(".navi__link");
// let y = document.querySelector(".menu-container");
// let overlay = document.querySelector(".overlay");
// let links = document.querySelector(".links");
// overlay.style.height = "0px";
// links.style.visibility = "hidden";

x.forEach(function (element, index) {
  element.addEventListener("click", function (e) {
    document.querySelector(".navi__button__background").style.transform =
      "scale(0)";
    document.querySelector(".navi__nav").style.opacity = "0";
    document.querySelector(".navi__nav").style.width = "0px";
    document.querySelector(".navi__checkbox").checked = false;
  });
});

// y.addEventListener("click", function (e) {
//   if (
//     overlay.style.height === "800px" &&
//     links.style.visibility === "visible"
//   ) {
//     overlay.style.height = "0px";
//     links.style.visibility = "hidden";
//     document.querySelector(".overlay").style.zIndex = "-99";
//   } else {
//     overlay.style.height = "800px";
//     document.querySelector(".overlay").style.zIndex = "2999";
//   }
//   if (overlay.style.height === "800px") {
//     links.style.visibility = "visible";
//   }
// });

// x.forEach(function (element, index) {
//   element.addEventListener("click", function (e) {
//     if (e.currentTarget.classList.contains("link")) {
//       console.log(e.currentTarget);
//       document.querySelector(".overlay").style.height = "0px";
//       document.querySelector(".links").style.visibility = "hidden";
//       document.querySelector(".overlay").style.zIndex = "-99";
//       let z = document.querySelector(".container.menu");
//       myFunction(z);
//     }
//   });
// });
