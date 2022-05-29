import * as data from "../data.json" assert { type: "json" };
const content = Object.values(JSON.parse(JSON.stringify(data)))[0];

const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');
const destinationInfo = document.querySelector(".destination-info");
const destinationImage = document.querySelector("#destination-image");

tabs.forEach((tab, index) =>
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.setAttribute("aria-selected", "false"));
    tab.setAttribute("aria-selected", "true");
    changeDestination(index);
  })
);

const changeDestination = (index) => {
  const destinationData = content["destinations"][index];
  destinationInfo.querySelector("h2").innerHTML = destinationData["name"];
  destinationInfo.querySelectorAll("p")[0].innerHTML =
    destinationData["description"];
  destinationInfo.querySelectorAll("p")[1].innerHTML =
    destinationData["distance"];
  destinationInfo.querySelectorAll("p")[2].innerHTML =
    destinationData["travel"];
  destinationImage.querySelector("source").srcset =
    "../" + destinationData["images"]["webp"];
  destinationImage.querySelector("img").src =
    "../" + destinationData["images"]["png"];
  destinationImage.querySelector("img").alt = destinationData["name"];
};
