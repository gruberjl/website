import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Stack } from 'office-ui-fabric-react/lib/Stack'
import Header from './header'
//
// export default function Container({ children }) {
//   return <div className={containerStyles.container}>{children}</div>
// }
//

export default function Page({ children }) {
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
      <Header />
      <Stack>
        <Stack>
          <Link to={`/`}>
            <h3>
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <Link to={`/about/`} >
            About
          </Link>
        </Stack>
        {children}
      </Stack>
    </div>
  )
}