let increase = document.querySelector("#inc");

let decrease = document.querySelector("#dec");

let count = document.querySelector("span").innerText;

const checkColor = () => {
  if (count % 2 == 0) {
    document.querySelector("span").classList.add("first");

    document.querySelector("span").classList.remove("second");
  } else {
    document.querySelector("span").classList.remove("first");

    document.querySelector("span").classList.add("second");
  }
};

increase.addEventListener("click", () => {
  count++;

  document.querySelector("span").innerText = count;

  checkColor();
});

decrease.addEventListener("click", () => {
  if (0 < count) count--;

  document.querySelector("span").innerText = count;

  checkColor();
});