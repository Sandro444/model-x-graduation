import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div
          className="navbar-translate"
          style={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <NavbarBrand style={{ fontSize: "24px" }} data-placement="bottom">
            Model X Project
          </NavbarBrand>
          <NavbarBrand>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  textTransform: "none",
                  fontWeight: 400,
                  fontSize: "24px",
                }}
                className="presentation-subtitle text-center"
              >
                Ilia State University
              </h2>
              <img
                width={50}
                height={50}
                style={{
                  marginLeft: 10,
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
                src="https://upload.wikimedia.org/wikipedia/en/1/18/Ilia_State_University.png"
              />
            </div>
          </NavbarBrand>
        </div>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
