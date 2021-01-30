// Styling

import { NavProduct, Logo, ThemeButton } from "../styles";

const NavBar = (props) => {
  const logo = () =>
    props.currentTheme === "light"
      ? "https://cdn.discordapp.com/attachments/797449550616068106/804257167925706762/light-logo.png"
      : "https://cdn.discordapp.com/attachments/797449550616068106/804257171373162526/dark-logo.png";

  return (
    <nav className="navbar navbar-expand">
      <Logo className="navbar-brand" exact to="/">
        <img src={logo} alt="logo" />
      </Logo>

      <div className="navbar-nav ml-auto">
        <NavProduct
          exact
          to="/"
          className="nav-item nav-linkvtext-light"
          style={{ padding: "0.25em 1em" }}
        >
          Home
        </NavProduct>
        <NavProduct
          to="/products"
          className="nav-item nav-linkvtext-light"
          style={{ padding: "0.25em 1em" }}
        >
          Products
        </NavProduct>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
