import * as data from "../data.json" assert { type: "json" };
const content = Object.values(JSON.parse(JSON.stringify(data)))[0];

const numbersList = document.querySelector('[role="numberslist"]');
const numbers = document.querySelectorAll('[role="number"]');
const techInfo = document.querySelector(".tech-details");
const techImage = document.querySelector("#tech-image");

numbers.forEach((number, index) => {
  number.addEventListener("click", () => {
    numbers.forEach((number) => number.setAttribute("aria-selected", "false"));
    number.setAttribute("aria-selected", "true");
    changeTech(index);
  });
});

const changeTech = (index) => {
  const techData = content["technology"][index];
  techInfo.querySelectorAll("p")[0].innerHTML = techData["name"];
  techInfo.querySelectorAll("p")[1].innerHTML = techData["description"];
  techImage.querySelector("source").srcset =
    "../" + techData["images"]["portrait"];
  techImage.querySelector("img").src = "../" + techData["images"]["landscape"];
  techImage.querySelector("img").alt = techData["name"];
};
