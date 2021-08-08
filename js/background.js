const imgs = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
const wrap = document.querySelector(".wrap");

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;
console.log(chosenImg);

wrap.appendChild(bgImg);



