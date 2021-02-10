import React from "react"
import { Stack, Link } from "office-ui-fabric-react"
import Header from './header'
//
// export default function Container({ children }) {
//   return <div className={containerStyles.container}>{children}</div>
// }
//

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <Stack>
        <Stack>
          <Link to={`/`}>
            <h3>
              GitBit
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
