const carouselElem = document.querySelector(".js-carousel");

console.log(carouselElem);
boreDom.forEach((content) => {
  carouselElem.innerHTML += `

  <div class="content swiper-slide">
        <img src="${content.img}">
   </div>

`;
});
