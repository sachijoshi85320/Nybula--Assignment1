const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const studentLoginBtn = document.querySelector("#studentLoginBtn");
const studentLoginLink = document.querySelector("#studentLoginLink");
const studentEmail = document.querySelector("#studentEmail");
const studentPassword = document.querySelector("#studentPassword");
const teacherLoginBtn = document.querySelector("#teacherLoginBtn");
const teacherLoginLink = document.querySelector("#teacherLoginLink");
const teacherEmail = document.querySelector("#teacherEmail");
const teacherPassword = document.querySelector("#teacherPassword");

// For swiping and opening signup page
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};

// For swiping and opening login page
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};

studentLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("CLicked");
  if (
    studentEmail.value === "" &&
    studentPassword.value === ""
  ) {
    studentLoginLink.click();
  }
});

teacherLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("CLicked");
  if (
    teacherEmail.value === "" &&
    teacherPassword.value === ""
  ) {
    teacherLoginLink.click();
  }
});