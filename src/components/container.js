import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import containerStyles from "./container.module.css"
//
// export default function Container({ children }) {
//   return <div className={containerStyles.container}>{children}</div>
// }
//

export default function Container({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <Link to={`/`}>
        <h3>
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link to={`/about/`} >
        About
      </Link>
      {children}
    </div>
  )
}
