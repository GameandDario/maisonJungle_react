import "../styles/Cart.css";
function Cart() {
  const plants = [
    {
      name: "monstera",
      price: 8,
    },
    {
      name: "lierre",
      price: 10,
    },
    {
      name: "bouquet",
      price: 15,
    },
  ];
  let total = plants[0].price + plants[1].price + plants[2].price;
  /* console.log(total); */
  return (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <ul>
        <li>
          nom : {plants[0].name} prix : {plants[0].price} €
        </li>
        <li>
          nom : {plants[1].name} prix : {plants[1].price} €
        </li>
        <li>
          nom : {plants[2].name} prix : {plants[2].price} €
        </li>
      </ul>
      <p>Prix total : {total} €</p>
    </div>
  );
}

export default Cart;
