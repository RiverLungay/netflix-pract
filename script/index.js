const pfpElem = document.querySelector(".js-pfp-div");

profileObject.forEach((values) => {
  pfpElem.innerHTML += `
   
    <a href="menu.html">
    <div class="user-wrap" style="">
      <div class="pic">
      <img src=${values.image}>
      </div>
      <p>${values.name}</p> 

      </div>
    </a>
   `;
});
