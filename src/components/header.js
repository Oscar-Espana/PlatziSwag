import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from "../styles/components"
import logo from "../images/Logo.png"
import bolsa from "../images/cart.png"

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img src={logo} alt="Logo Platzi Swag" />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="/">Productos</Link>
        </MenuItem>
        <MenuItem margin>
          <a href="https://www.platzi.com">Platzi</a>
        </MenuItem>
        <MenuItem>
          <Link to="/cart">
            <span>
              <img src={bolsa} alt="Cart Logo "></img>
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
