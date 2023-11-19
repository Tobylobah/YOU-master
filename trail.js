

const menuIconButton = document.querySelector("[data-menu-icon-btn]");
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBx1 = document.querySelector("[data-sidebar-box-1]");
const sidebarBx2 = document.querySelector("[data-sidebar-box-2]");
const sidebarBx3 = document.querySelector("[data-sidebar-box-3]");
const sidebarBx4 = document.querySelector("[data-sidebar-box-4]");
const sidebarBx5 = document.querySelector("[data-sidebar-box-5]");
const sidebarBx6 = document.querySelector("[data-sidebar-box-6]");
const sidebarBx7 = document.querySelector("[data-sidebar-box-7]");
const sidebarBx8 = document.querySelector("[data-sidebar-box-8]");
const sidebarBx9 = document.querySelector("[data-sidebar-box-9]");
const sidebarBx10 = document.querySelector("[data-sidebar-box-10]");
const sidebarBx11 = document.querySelector("[data-sidebar-box-11]");
 const sidebarBx12 = document.querySelector("[data-sidebar-box-12]");
// const sidebarBx13 = document.querySelector("[data-sidebar-box-13]");
// const sidebarBx14 = document.querySelector("[data-sidebar-box-14]");
// const sidebarBx15 = document.querySelector("[data-sidebar-box-15]");
// const sidebarBx16 = document.querySelector("[data-sidebar-box-16]");
const videoBx = document.querySelector("[video-sidebar]");
const shorts = document.querySelector("[shorts-sidebar]");
const option = document.querySelector("[option-sidebar]");

menuIconButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebarBx1.classList.toggle("open");
  sidebarBx2.classList.toggle("open");
  sidebarBx3.classList.toggle("open");
  sidebarBx4.classList.toggle("open");
  sidebarBx5.classList.toggle("open");
  sidebarBx6.classList.toggle("open");
  sidebarBx7.classList.toggle("open");
  sidebarBx8.classList.toggle("open");
  sidebarBx9.classList.toggle("open");
  sidebarBx10.classList.toggle("open");
  sidebarBx11.classList.toggle("open");
  sidebarBx12.classList.toggle("open");
  // sidebarBx13.classList.toggle("open");
  // sidebarBx14.classList.toggle("open");
  // sidebarBx15.classList.toggle("open");
  // sidebarBx16.classList.toggle("open");
  videoBx.classList.toggle("open");
  shorts.classList.toggle("open");
  option.classList.toggle("open");
});


