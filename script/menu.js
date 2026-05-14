const pfpElem = document.querySelector(".js-pfp-div");

const profileObject = [
  {
    name: "user",
    image: "images/pfp.png",
  },

  {
    name: "user1",
    image: "images/pfp1.png",
  },

  {
    name: "user2",
    image: "images/pfp2.png",
  },

  {
    name: "user3",
    image: "images/pfp3.png",
  },

  {
    name: "user4",
    image: "images/pfp4.png",
  },
];

profileObject.forEach((values) => {
  pfpElem.innerHTML += `
   
   <div class="user-wrap" style="">
    <div class="pic">
    <img src=${values.image}>
    </div>
    <p>${values.name}</p> 

    </div>
   `;
});
