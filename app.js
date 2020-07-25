var square = document.getElementById("square");

x = 0;

square.addEventListener("mouseover", function () {
  x += 1;
  document.querySelector(".text").innerHTML = x;
});
