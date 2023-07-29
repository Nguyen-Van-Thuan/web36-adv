const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
// console.log(id);

const API_DETAI = `http://localhost:3000/movies/${id}`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

// Truy cap cap phan tu
const imgElement = document.querySelector('.box-img-js');

// Function getApi()
const getApi = async(URL_API) => {
  const response = await axios.get(URL_API);
  // console.log(response.data);
  showImg(response.data);
}

getApi(API_DETAI);


const showImg = (nameImg) => {
  // console.log(nameImg.poster_path);
  const linkFull = IMG_PATH + nameImg.poster_path;
  imgElement.innerHTML = `
  <img src="${linkFull}" alt="">
  `;
}