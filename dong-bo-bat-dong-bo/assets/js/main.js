// const fnA = () => {
//   setTimeout(()=>{
//     // logic thuc thi o day
//     console.log("Cong viec 1 het 0.5s")
//   }, 1000);
// }
// const fnB = () => {
//   setTimeout(()=> {
//     console.log("cong viec 2 moi duoc thuc thi");
//   }, 4000);
// }
// fnA();
// fnB();
// => Tong thoi gian chay = tong thoi gian cua fnA + fnB




// Mô tả về hoạt đồng hằng ngày
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)


// Thực hiện đồng thời các công việc
// const work1 = () => {
//   console.log("Lam bai tap xong");
// };
// const work2 = () => {
//   console.log("Da bong xong");
// };
// const work3 = () => {
//   console.log("Nau com xong");
// }

// work1();
// work2();
// work3();



// Mô tả về hoạt đồng hằng ngày Thuc hien dong bo (Tuan tu)
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)
// 4. Xem phim (7s)

// const congViec1 = (name, callback) => {
//   // Bat dau thong bao thoi
//   console.log("Bat dau thuc hien con viec");
//   console.log("Thuc hien cong viec " + name);

//   //Thoi gian thuc thi xong cong viec, va lam cong viec khac
//   setTimeout(()=> {
//     callback();
//   }, 3000)
// };

// const congViec2 = (name, callback) => {
//   console.log("Thuc hien cong viec " + name);

//   setTimeout(()=> {
//     callback();
//   }, 4000)

// }

// const congviec3 = (name, callback) => {
//   console.log("Thuc hien cong viec " + name);

//   setTimeout(()=> {
//     callback();
//   }, 5000)
// }

// const congviec4 = (name, callback) => {
//   console.log("Thuc hien cong viec " + name);

//   setTimeout(()=> {
//     callback();
//   }, 7000);
// }

// const kethuc = () => {
//   console.log("Ket thuc chuong trinh")
// }

// // Thuc thi function
// congViec1("Lam bai tap", () => {
//   congViec2("Da bong", () => {
//     congviec3("Nau com", () => {
//       congviec4("Xem phim", kethuc);
//     });
//   });
// } );




/* ====== Promise: Loi hua ===== */
// let money = 50;

// // Tao ra loi hua 1 <=> Cong viec 1
// let buyIphone = new Promise((resolve, reject) => { //resolve: Loi hua duoc thuc hien, reject: Loi hua khong duoc thuc hien

//   // 35tr la gia tien 1 chiec iphone
//   if(money > 35) {
//     resolve("Du tien mua ai phone day!");
//   }else {
//     reject("Kiem them tien di")
//   };
// });


// // Tao ra loi hua 2 <=> cong viec 2
// // gia su ipad cua minh la 3tr
// let buyIpad = new Promise((resolve, reject)=> {

//   if((money - 35 -  3) >= 0) {
//     resolve("Du tien mua ipad di");
//   }else {
//     reject("Ngheo chay tui roi");
//   }
// })

// // Thuc thi loi hua
// buyIphone
//   .then((response)=>{ //Loi hua duoc thuc hien thanh cong
//     console.log(response);

//     // Thuc thi loi hua 2
//     return buyIpad;
//   })
//   .catch((error)=>{
//     console.log(error);
//   })
//   .finally(()=> {
//     console.log("Di ve nha thoi");
//   });


// buyIpad
//   .then((response)=> {
//     console.log(response);
//   })
//   .catch((error)=> {
//     console.log(error);
//   })



// Async Function

// const fnA = async() => {
//   // return Promise.resolve("123");
//   return Promise.reject("Sai roi day");
// }
// // fnA();

// fnA()
//   .then((res)=> {
//     console.log('1');
//     console.log(res);
//   })
//   .catch((error)=> {
//     console.log('2')
//     console.log(error);
//   })


// async function fnA() {
//   return Promise.resolve("123");
// }

// fnA().then((res)=>{
//   console.log(res);
// });
/*
function fnA {
  return console.log("hello lop web36");
}
fnA();
*/

// const fnB = async() => {
//   return "helo"
// }

// fnB()
//   .then((res)=> {
//     console.log(res);
//   })
//   .catch((error)=> {
//     console.log(error);
//   })


// // B1: Truy cap phan tu
// const HTML = document.querySelector("#await-js");
// console.log(HTML);
// const show = async() => {

//   let myPromise = new Promise((resolve, reject) => {
//     return resolve("web32");
//   })
//   // myPromise
//   //   .then((res)=> {
//   //     HTML.innerHTML = res;
//   //   })
//   //   .catch((error)=> {
//   //     console.log(error)
//   //   })
//   // console.log(myPromise);
//   document.querySelector("#await-js").innerHTML = await myPromise;
// }
// show();


// /* await setTimout() */
// const popupAlert = async() => {
//   let timeOutPromise = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//       resolve("Hello 500 anh em!");
//     }, 3000);
//   });

//   const result = await timeOutPromise;
//   alert(result);
// }

// popupAlert();



/* CALL API TU SERVER */


// C1: Khong dung async/await
const getApi = () => {
  // Thuc hien 1 loi goi doc du lieu tu chuong trinh len server.
  const res = axios.get(`https://fakestoreapi.com/products/`);
  res
    .then((response) => {
      // console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
}
getApi()

// C2: Dung dung async/await
const getApi2 = async () => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}
getApi2();

