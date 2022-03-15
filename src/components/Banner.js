import "../styles/Banner.css";
import logo from "../assets/logo.png";

function Banner() {
  const title = "La maison jungle";
  return (
    <div className="lmj-banner">
      <img className="lmj-logo" src={logo} alt="logo - La maison jungle" />
      <h1 className="lmj-title">{title}</h1>
    </div>
  );
}

export default Banner;
