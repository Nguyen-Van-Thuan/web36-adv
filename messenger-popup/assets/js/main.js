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
// console.log(btn4);
btn4.addEventListener("mousemove", () => {
  alert("Event MouseDown");
});


/* Event */ 
// B1:
const btn5 = document.querySelector(".btn5-js");
// console.log(btn5);
// B2:
btn5.addEventListener("click", (e) => {
  console.log(e); //Lay toa do
});



/* KeyBoard */
document.addEventListener('keydown',(event)=>{
  // alert('abc');
  console.log(event.key); //Biet duoc nguoi dung bam phim nao
  alert(event.key);
});















/* xu ly logic popup-messgenger */
// B1 truy cap phan tu button
const btnMess = document.querySelector(".btn-mess");
const boxContent = document.querySelector(".box-content");
const close = document.querySelector(".close");

let isStatus = false; //Bien trang thai


/* == Cach 1: ==*/ 
//B2: Them su kien vao btnMess (Button)
// btnMess.addEventListener('click', () => {

//   isStatus = !isStatus; //Cong tac den

//   if(isStatus == false) {
//     boxContent.style.bottom = "-500px";
//     boxContent.style.transition = ".3s";
//   }else {
//     boxContent.style.bottom = "120px";
//     boxContent.style.transition = ".3s";
//   }

//   console.log(isStatus, "abc")
// });


// close.addEventListener('click', () => {
//   boxContent.style.bottom = "-500px";
//   boxContent.style.transition = ".0s";
// })




/*== Cach 2: ==*/ 
btnMess.addEventListener("click", () => {
  boxContent.classList.toggle("change-show");
  boxContent.style.transition = ".3s";

});


close.addEventListener('click', () => {
  boxContent.classList.remove("change-show");
  boxContent.style.transition = ".0s";
})