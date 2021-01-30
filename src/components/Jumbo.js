import React from "react"
import { StyledJumbo } from "../styles/components"
const Jumbo = ({ description }) => {
  return (
    <StyledJumbo>
      <div>
        <h2>Consigue el mejor swag exclusivo de Platzi</h2>
        <small>{description}</small>
      </div>
    </StyledJumbo>
  )
}

export default Jumbo
