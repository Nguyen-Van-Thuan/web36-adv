const URL_API = `http://localhost:3000/movies`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

// Truy cap phan
const filmElement = document.querySelector('#render-js');

// Function GetApi
const getApi = async (URL_API) => {
  const response = await axios.get(URL_API);
  
  // console.log(response);
  showData(response.data);
}

getApi(URL_API);


// Function Show Data
const showData = (data) => {
  
  let HTML = ``;
  data.forEach((item, index) => {
    // console.log(item, 'gia tri cua mang');
    
    HTML += `
    <div class="col-12 col-sm-6 col-md-3">
    <div class="card">
    <a href="/detail.html?id=${item.id}">
    <img src="${IMG_PATH + item.poster_path}" class="card-img-top" alt="Phim">
    </a>
    <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class=" rate ${fillColor(item.vote_average)} ">${item.vote_average}</p>
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

// Truy cap phan tu
const form = document.querySelector('#form');
const input = document.querySelector('#search');

// Function Search Film
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let valueInput = input.value;
  // console.log(valueInput);

  if(valueInput && valueInput !== '') {    
    const apiSearch = URL_API + `?title_like=${valueInput}`;
    getApi(apiSearch);
    input.value = '';
  }else {
    window.location.reload();
  }
});
