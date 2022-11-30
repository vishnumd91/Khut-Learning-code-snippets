const productList = [
  {
    productId: 1,
    productName: "Product 1",
    price: 1000,
  },
  {
    productId: 2,
    productName: "Product 2",
    price: 5000,
  },
  {
    productId: 3,
    productName: "Product 3",
    price: 3000,
  },
  {
    productId: 4,
    productName: "Product 4",
    price: 4000,
  },
  {
    productId: 5,
    productName: "Product 5",
    price: 1000,
  },
  {
    productId: 6,
    productName: "Product 6",
    price: 5000,
  },
  {
    productId: 7,
    productName: "Product 7",
    price: 3000,
  },
  {
    productId: 8,
    productName: "Product 8",
    price: 4000,
  },
];

const cartElement = document.querySelector(".cart-container");
let cart = [];

productList.forEach((product) => {
  const productElement = document.querySelector(".product-container");
  const { productId, productName, price } = product;
  //   Create Card element
  const cardBody = `
    <div class='card-container'>
        <div class='card-body'>
            <h4>Name: ${productName}</h4>
            <h4>Price: ${price}</h4>
            <button onclick='addToCart(${productId})'>Add to Cart</button>
        </div>
    </div>
  `;

  //   Append Card to the parent div product-container
  productElement.innerHTML += cardBody;
});

const addToCart = (productId) => {
  const addedProduct = productList.find(
    (product) => product.productId === productId
  );
  const { price } = addedProduct;
  cart.push(price);
  displayCartValues(cart);
};

const displayCartValues = (cart) => {
  const cartSum = cart.reduce((acc, curr) => acc + curr);
  const cartBody = `
  <h4>Cart Size: ${cart.length}</h4>
  <h4>Total Price: ${cartSum}</h4>
`;
  cartElement.innerHTML += cartBody;
};
