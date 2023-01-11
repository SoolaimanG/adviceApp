const span = document.querySelector("span");
const content = document.querySelector("p");
const btn = document.querySelector(".container__three");

const Fetch = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.slip);
      const value = data.slip;
      span.textContent = "#" + value.id;
      content.textContent = value.advice;
    })
    .catch(() => {
      content.textContent = "Network Error";
      span.textContent = "";
    });
};
btn.addEventListener("click", Fetch);
