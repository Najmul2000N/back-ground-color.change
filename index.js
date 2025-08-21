const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (colors) {
    console.log(colors);
    console.log(colors.target);
    if (colors.target.id === "purple") {
      body.style.backgroundColor = colors.target.id; /*===purple*/
    }

    if (colors.target.id === "red") {
      body.style.backgroundColor = colors.target.id;
    }

    if (colors.target.id === "blue") {
      body.style.backgroundColor = colors.target.id;
    }
    if (colors.target.id === "green") {
      body.style.backgroundColor = colors.target.id;
    }
    if (colors.target.id === "yellow") {
      body.style.backgroundColor = colors.target.id; 
    }

    if (colors.target.id === "chartreuse") {
      body.style.backgroundColor = colors.target.id; 
    }
    if (colors.target.id === "pink") {
      body.style.backgroundColor = colors.target.id;
    }
    if (colors.target.id === "aqua") {
      body.style.backgroundColor = colors.target.id; 
    }
    if (colors.target.id === "orange") {
      body.style.backgroundColor = colors.target.id;
    }
    if (colors.target.id === "brown") {
      body.style.backgroundColor = colors.target.id; /*===brown*/
    }
  });
});
