const URL_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`;


const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

// Truy cap phan
const filmElement = document.querySelector('#render-js');
// console.log(filmElement);


// Function GetApi
const getApi = async (URL_API) => {
  const response = await axios.get(URL_API);
  // console.log(response.data.results);
  showData(response.data.results);
}

getApi(URL_API);


// Function Show Data
const showData = (data) => {
  let HTML = ``;
  data.forEach((item, index) => {
    console.log(item, 'gia tri cua mang');

    HTML += `
      <div class="col-12 col-sm-6 col-md-3">
          <div class="card">
            <img src="${IMG_PATH + item.poster_path}" class="card-img-top" alt="Phim">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="rate ${fillColor(item.vote_average)}">${item.vote_average}</p>
            </div>
            <div class="overviews">
              <h4>Overview</h4>
              <p>${item.overview}</p>
            </div>

          </div>
        </div>
    `;
    filmElement.innerHTML = HTML;
  });
}

// Function dua vote fill color
const fillColor = (vote) => {
  if (vote > 8) {
    return 'green';
  } else if (vote > 7) {
    return 'orange';
  } else {
    return 'red';
  }
}