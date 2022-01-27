const profileContainer = document.querySelector(".profile-container");
const mainContainer = document.querySelector(".main-container");
const profileBtn = document.querySelector("#profile");

let flag = 0;
profileBtn.addEventListener("click", () => {
  if (flag === 0) {
    mainContainer.style.display = "none";
    profileContainer.style.display = "inline";
    profileBtn.innerHTML = "Courses";
    flag = 1;
  } else {
    profileContainer.style.display = "none";
    mainContainer.style.display = "inline";
    profileBtn.innerHTML = "Profile";
    flag = 0;
  }
  console.log("Clicked!!!");
});
