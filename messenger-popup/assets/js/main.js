/*
  -- Cach 2: Them 1 event vao DOM
*/

// B1: Truy cap phan tu
const btn2 = document.querySelector(".btn2-js");
// console.log(click2);

// B2: Them su kien click vao phan tu
// btn2.onclick = function() {
//   handleShow2();
// }

// // Dinh nghia function handleShow2 xu ly su kien khi nguoi dung click vao button
// const handleShow2 = () => {
//   alert("Hello 500 anh em!");
// }
btn2.onclick = () => {
  alert("hello 500 anh em !");
}


/* Cach 3: */
// B1: Truy cap vao phan tu
const btn3 = document.querySelector(".btn3-js");
// console.log(btn3);


// B2: Dinh nghia function handleShow3
const handleShow3 = () => {
  alert("Nen dung cach nay de them su kien!");
}

// B3: Them su kien onclick() cho phan tu
btn3.addEventListener("click", handleShow3);

// btn3.addEventListener("click", () => {
// alert("heelo 123");
// })


/* mousedown */
// B1: Truy cap phan tu
const btn4 = document.querySelector(".btn4-js");
console.log(btn4);
btn4.addEventListener("mousemove", () => {
  alert("Event MouseDown");
})















/* xu ly logic popup-messgenger */
// B1 truy cap phan tu button
const btnMess = document.querySelector(".btn-mess");
const boxContent = document.querySelector(".box-content");
const close = document.querySelector(".close");


//B2: Them su kien vao btnMess (Button)
btnMess.addEventListener('click', () => {
  // alert("hello 123");
  boxContent.style.bottom = "120px";
  boxContent.style.transition = ".3s";
});

close.addEventListener('click', () => {
  boxContent.style.bottom = "-500px";
  boxContent.style.transition = ".0s";
})