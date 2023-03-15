// document.getElementById("toggle-menu-button").addEventListener("click", () => {
//     document.getElementById("menu-icons-links").classList.add("d-flex");
// })

const mybutton = document.getElementById("button-scroll");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 ||  document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}



/////////////////////////////////7
// api till featured product

async function getFeaturedProducts() {
  try {
    const response = await fetch('https://kyh-net22.azurewebsites.net/api/products/featured');
    const data = await response.json();
    const productsEl = document.getElementById('product-grid');
    for (let i = 0; i < 8; i++) {
      const product = data[i];
      const productEl = document.createElement('div');
      productEl.setAttribute('id', `product-${i}`);
      productEl.classList.add('product-card');
      const rating = (product.starRating);
      const filledStar = '<i class="fa-solid fa-sharp fa-star"></i>';
      const emptyStar = '<i class="fa-solid fa-regular fa-star"></i>';
      const ratingProduct = filledStar.repeat(rating) + emptyStar.repeat(5 - rating);
      productEl.innerHTML = `
        <div class="product-card-img">
          <img src="${product.imageUrl}" alt="${product.name}"/>
          <div class="product-card-menu">
            <nav class="menu-icons">
              <a class="menu-link" href="#"><i class="fa-regular fa-code-compare"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-heart"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-bag-shopping"></i></a>                   
            </nav>
            <a href="#" id="btn-quick-view" class="btn-theme">QUICK VIEW</a>
          </div>
        </div>
        <h2 class="product-card-category">${product.category}</h2>
        <h2 class="product-card-title">${product.name}</h2>
        <div class="product-card-rating">
          ${ratingProduct}
        </div>
        <p class="product-card-price">${product.originalPrice} ${product.currency}</p>`;
      productsEl.appendChild(productEl);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}


async function newProductsBox1() {
  try {
    const response = await fetch('https://kyh-net22.azurewebsites.net/api/products/new');
    const data = await response.json();
    const productsEl = document.getElementById('case2/1');
    for (let i = 0; i < 6; i++) {
      const product = data[i];
      const productEl = document.createElement('div');
      productEl.setAttribute('id', `product-${i}`);
      productEl.classList.add('product-card');
      const rating = (product.starRating);
      const filledStar = '<i class="fa-solid fa-sharp fa-star"></i>';
      const emptyStar = '<i class="fa-solid fa-regular fa-star"></i>';
      const ratingProduct = filledStar.repeat(rating) + emptyStar.repeat(5 - rating);
      productEl.innerHTML = `
        <div class="product-card-img">
          <img src="${product.imageUrl}" alt="${product.name}"/>
          <div class="product-card-menu">
            <nav class="menu-icons">
              <a class="menu-link" href="#"><i class="fa-regular fa-code-compare"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-heart"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-bag-shopping"></i></a>                   
            </nav>
            <a href="#" id="btn-quick-view" class="btn-theme">QUICK VIEW</a>
          </div>
        </div>
        <h2 class="product-card-category">${product.category}</h2>
        <h2 class="product-card-title">${product.name}</h2>
        <div class="product-card-rating">
          ${ratingProduct}
        </div>
        <p class="product-card-price">${product.originalPrice} ${product.currency}</p>`;
      productsEl.appendChild(productEl);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

async function newProductsBox2() {
  try {
    const response = await fetch('https://kyh-net22.azurewebsites.net/api/products/popular');
    const data = await response.json();
    const productsEl = document.getElementById('case2/2');
    for (let i = 0; i < 6; i++) {
      const product = data[i];
      const productEl = document.createElement('div');
      productEl.setAttribute('id', `product-${i}`);
      productEl.classList.add('product-card');
      const rating = (product.starRating);
      const filledStar = '<i class="fa-solid fa-sharp fa-star"></i>';
      const emptyStar = '<i class="fa-solid fa-regular fa-star"></i>';
      const ratingProduct = filledStar.repeat(rating) + emptyStar.repeat(5 - rating);
      productEl.innerHTML = `
        <div class="product-card-img">
          <img src="${product.imageUrl}" alt="${product.name}"/>
          <div class="product-card-menu">
            <nav class="menu-icons">
              <a class="menu-link" href="#"><i class="fa-regular fa-code-compare"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-heart"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-bag-shopping"></i></a>                   
            </nav>
            <a href="#" id="btn-quick-view" class="btn-theme">QUICK VIEW</a>
          </div>
        </div>
        <h2 class="product-card-category">${product.category}</h2>
        <h2 class="product-card-title">${product.name}</h2>
        <div class="product-card-rating">
          ${ratingProduct}
        </div>
        <p class="product-card-price">${product.originalPrice} ${product.currency}</p>`;
      productsEl.appendChild(productEl);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

async function newFeaturedProducts() {
  try {
    const response = await fetch('https://kyh-net22.azurewebsites.net/api/products');
    const data = await response.json();
    const productsEl = document.getElementById('product-grid');
    for (let i = 0; i < 20; i++) {
      const product = data[i];
      const productEl = document.createElement('div');
      productEl.setAttribute('id', `product-${i}`);
      productEl.classList.add('product-card');
      const rating = (product.starRating);
      const filledStar = '<i class="fa-solid fa-sharp fa-star"></i>';
      const emptyStar = '<i class="fa-solid fa-regular fa-star"></i>';
      const ratingProduct = filledStar.repeat(rating) + emptyStar.repeat(5 - rating);
      productEl.innerHTML = `
        <div class="product-card-img">
          <img src="${product.imageUrl}" alt="${product.name}"/>
          <div class="product-card-menu">
            <nav class="menu-icons">
              <a class="menu-link" href="#"><i class="fa-regular fa-code-compare"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-heart"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-bag-shopping"></i></a>                   
            </nav>
            <a href="#" id="btn-quick-view" class="btn-theme">QUICK VIEW</a>
          </div>
        </div>
        <h2 class="product-card-category">${product.category}</h2>
        <h2 class="product-card-title">${product.name}</h2>
        <div class="product-card-rating">
          ${ratingProduct}
        </div>
        <p class="product-card-price">${product.originalPrice} ${product.currency}</p>`;
      productsEl.appendChild(productEl);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}
