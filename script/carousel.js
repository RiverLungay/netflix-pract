const carouselElem = document.querySelector(".js-carousel");

console.log(carouselElem);
boreDom.forEach((content) => {
  carouselElem.innerHTML += `

  <div class="content">
        <img src="${content.img}">
   </div>

`;
});
