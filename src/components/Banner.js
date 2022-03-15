import "../styles/Banner.css";
/* import logo from "../assets/logo.png";

function Banner() {
  const title = "La maison jungle";
  const currentMonth = new Date().getMonth();

  const isSpring = currentMonth >= 2 && currentMonth <= 5;
  const recommandation = isSpring ? (
    <div>C'est le printemps rempotez ! 🌱</div>
  ) : (
    <div>C'est pas le moment de rempoter</div>
  );

  return (
    <div className="lmj-banner">
      <img className="lmj-logo" src={logo} alt="logo - La maison jungle" />
      <h1 className="lmj-title">{title}</h1>
      {recommandation}
    </div>
  );
}

export default Banner; */

import "../styles/Banner.css";

function Banner({ children }) {
  return <div className="lmj-banner">{children}</div>;
}

export default Banner;
