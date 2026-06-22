console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const $ = (selector) => document.querySelector.bind(document)(selector);
const createEle = (element) => document.createElement(element);

const searchInput = createEle("input");
searchInput.type = "text";
searchInput.id = "search-input";
searchInput.placeholder = "Search product...";
$("header").insertBefore(searchInput, $("header nav"));

searchInput.addEventListener("input", function (e){searchProduct(e)});

const productLink = $("a[href='#prod']");
productLink.addEventListener("click", renderProducts.bind(null, products));

function searchProduct(e)
{
  const searchTerm = e.target.value.toLowerCase();
  const searchResult = products.filter(product => product.name.toLowerCase().includes(searchTerm));
  $("main").innerHTML = "";
  renderProducts(searchResult);
  
}
  // This should create the ul and the li's with the individual products details
function renderProducts(products) {
  // your code goes here
  const main = $("main");
  const ul = createEle("ul");
  for (const product of products) {
    // product card
    const card = createEle("div");
    card.classList.add("product-item");
    ul.appendChild(card);

    // product name
    const name = createEle("h2");
    name.textContent = product.name;
    card.appendChild(name);

    // product price
    const price = createEle("p");
    price.textContent = `Price: $${product.price}`;
    card.appendChild(price);

    // product rating
    const rating = createEle("p");
    rating.textContent = `Rating: ${product.rating} / 10`;
    card.appendChild(rating);
  }
  main.appendChild(ul);
}

renderProducts(products); 
