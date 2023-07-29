/*
  Database -> Arr Json: 
  [
    {
      "name": "Cong viec 1",
      "completed": true
    },
    {
      "name": "Cong viec 2",
      "completed": false
    }
  ]
  




 Thao tac voi localStorage
    + Tao 1 du lieu: localStorage.setItem(key, value);
      - key: Ten cua du lieu minh can luu tru
      - value: Gia tri cua du lieu can luu tru

    + Lay du lieu: localStorage.getItem(key)

    + Xoa: localStorage.removeItem(key);



  Vi du:
    // const name = "web36";
    // localStorage.setItem("CLASS", name);
    // const nameClasss = localStorage.getItem("CLASS");
    // console.log(nameClasss);
    // localStorage.removeItem("NAME");
*/

// B1: Truy cap phan tu
const formEle = document.querySelector('#form');
const inputEle = document.querySelector('.input');
const ulEle = document.querySelector('.todos');


// B2: Kiem tra xem trong ung dung da co list cong viec ton tai hay chua?. Neu ton tai ->  hien thi cho nguoi dung?. Chua co -> Tao moi.

const listTodo = JSON.parse(localStorage.getItem('LIST_TODOS'));


// Fn updateListTodo chuyen cap nhat trang thai trong localstorage
const updateLocalStorage = () => {
  // Truy cap phan tu de lay ra tat ca the li
  liElement = document.querySelectorAll('li');

  let listTodo = [];
  liElement.forEach((item, index) => {
    // console.log(item);
    listTodo.push(
      {
        name: item.innerHTML,
        completed: item.classList.contains('completed'), //kiem tra 1 cai the trong phan tu => true, false
      }
    )
  });


  // console.log(listTodo);
  localStorage.setItem('LIST_TODOS', JSON.stringify(listTodo));
}

// Function showTodo hien thi danh sach cong viec
const showTodo = (list) => {

  // TH1: CONG VIEC DUOC TAO MOI
  let todoText = inputEle.value;
  // TH2: Cong viec truoc do da co
  if (list) {
    todoText = list.name
  }

  // Them 1 cong viec moi
  if (todoText) {

    const liEle = document.createElement('li');     // Tao 1 the moi <li></li>

    // CHECK HOAN THANH CONG VIEC HAY CHUA
    if (list && list.completed === true) {
      liEle.classList.add('completed');
    }

    liEle.addEventListener('click', () => {
      liEle.classList.toggle('completed'); //Neu li co class 'completed' => remove, khong co add vao
      updateLocalStorage();
    })

    // DELETE CONG VIEC
    liEle.addEventListener('contextmenu', () => {  //contextmenu -> su kien nguoi dung click chuoi phai
      liEle.remove();
      updateLocalStorage();
    })

    liEle.innerHTML = todoText;     // Them ten viec vao <li></li>
    ulEle.appendChild(liEle);     // Hien thi ra ngoai
    inputEle.value = '';     // Reset gia tri sau khi nhap xong input
    updateLocalStorage();

  }


}

// kiem tra danh cong viec da co hay chua ?
if (listTodo) {
  listTodo.forEach((item, index) => {
    showTodo(item);
  })
}
formEle.addEventListener('submit', (event) => {
  event.preventDefault();
  showTodo();
})
