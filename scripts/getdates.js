const currentYearElement = document.querySelector("#currentyear");
const todayDate = new Date();
currentYearElement.textContent = `${todayDate.getFullYear()}` + currentYearElement.textContent;

const lastModifiedElement = document.getElementById("lastModified");
const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = "Last Modified: " + lastModifiedDate;