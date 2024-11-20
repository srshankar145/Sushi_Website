const tgleBtn = document.querySelector(".toggle-btn");
const dropdwnBtn = document.querySelector(".dropdown-menu");

tgleBtn.addEventListener("click", () => {
  console.log("Menu Open");
  dropdwnBtn.classList.toggle("top-12");
});
