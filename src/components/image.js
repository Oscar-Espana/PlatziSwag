import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = ({ name }) => {
  return (
    <StaticQuery
      query={graphql`
        query GET_IMAGE {
          icon: file(relativePath: { eq: "icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data[name].childImageSharp.fluid} />}
    ></StaticQuery>
  )
}

export default Image
