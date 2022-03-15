import logo from "../assets/logo.png";
import "../App.css";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

function App() {
  const title = "La maison jungle";
  const currentMonth = new Date().getMonth();

  const isSpring = currentMonth >= 2 && currentMonth <= 5;
  const recommandation = isSpring ? (
    <div>C'est le printemps rempotez ! 🌱</div>
  ) : (
    <div>C'est pas le moment de rempoter</div>
  );
  return (
    <div>
      <Banner>
        <img className="lmj-logo" src={logo} alt="logo - La maison jungle" />
        <h1 className="lmj-title">{title}</h1>
        {recommandation}
      </Banner>
      <Cart />
      <ShoppingList />
    </div>
  );
}

export default App;
