import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

export default function About({ data }) {
  return (
    <Container>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Container>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
