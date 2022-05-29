import * as data from "../data.json" assert { type: "json" };
const content = Object.values(JSON.parse(JSON.stringify(data)))[0];

const dotList = document.querySelector('[role="dotlist"]');
const dots = document.querySelectorAll('[role="dot"]');
const crewInfo = document.querySelector(".crew-details");
const crewImage = document.querySelector("#crew-image");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots.forEach((dot) => dot.setAttribute("aria-selected", "false"));
    dot.setAttribute("aria-selected", "true");
    changeCrew(index);
  });
});

const changeCrew = (index) => {
  const crewData = content["crew"][index];
  crewInfo.querySelector("h2").innerHTML = crewData["role"];
  crewInfo.querySelectorAll("p")[0].innerHTML = crewData["name"];
  crewInfo.querySelectorAll("p")[1].innerHTML = crewData["bio"];
  crewImage.querySelector("source").srcset = "../" + crewData["images"]["webp"];
  crewImage.querySelector("img").src = "../" + crewData["images"]["png"];
  crewImage.querySelector("img").alt = crewData["name"];
};
