const formOpenBtn = document.querySelector("#form-open");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupLink = document.querySelector("#signup");
const loginLink = document.querySelector("#login");

formOpenBtn.onclick = () => formContainer.classList.add("show");
formCloseBtn.onclick = () => formContainer.classList.remove("show");
signupLink.onclick = () => {
  document.querySelector(".login_form").style.display = "none";
  document.querySelector(".signup_form").style.display = "block";
};
loginLink.onclick = () => {
  document.querySelector(".signup_form").style.display = "none";
  document.querySelector(".login_form").style.display = "block";
};
