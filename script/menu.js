const navElem = document.querySelector(".js-pfp-nav");
const navArrowElem = document.querySelector(".js-pfp-nav .arrow");

const menuListElem = document.querySelector(".js-menu-list");

// navElem.addEventListener("mouseenter", () => {
//   navArrowElem.innerHTML = `&#9650;`;
// });

// navElem.addEventListener("mouseleave", () => {
//   navArrowElem.innerHTML = `&#9660;`;
// });

profileObject.forEach((profile) => {
  menuListElem.innerHTML += `
 <div class="menu-pfp" >
  <img src=${profile.image}>
  <p>${profile.name}</p>
 </div>
 `;
});
