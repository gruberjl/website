import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Heading(props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )
  const location = useLocation()
  const canonicalUrl = data.site.siteMetadata.siteUrl + location.pathname
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>GitBit</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content="Prepare for the Microsoft MS-500 exam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    </div>
  )
}
