import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const cancelado = () => {
  return (
    <div>
      <SEO title="Compra Cancelada" />
      <Purchase>
        <h2>Compra Cancelada</h2>
        <p>Lamentamos que no hayas podido comprar tu swag</p>
        <p>!Te esperamos de vuelta! </p>
        <span role="img" aria-label="emoji">
          💖💖
        </span>
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}

export default cancelado
