import React from "react"
import { Stack, Text, Link, FontWeights } from "office-ui-fabric-react"
import Page from '../components/page'
import "./index.css"

const boldStyle = { root: { fontWeight: FontWeights.semibold } }

const App: React.FunctionComponent = () => {
  return (
    <Page>
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        verticalFill
        styles={{
          root: {
            width: "960px",
            margin: "0 auto",
            textAlign: "center",
            color: "#605e5c",
          },
        }}
        className="App"
        gap={15}
      >
        <Text variant="xxLarge" styles={boldStyle}>
          GitBit - Microsoft 365 Security Administration (Exam MS-500)
        </Text>
        <Text variant="large">
          Prepare for the Microsoft MS-500 exam
        </Text>
        <Text variant="large" styles={boldStyle}>
          Essential Links
        </Text>
        <Stack horizontal gap={15} horizontalAlign="center">
          <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
          <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">
            Stack Overflow
          </Link>
          <Link href="https://github.com/officeDev/office-ui-fabric-react/">
            Github
          </Link>
          <Link href="https://twitter.com/officeuifabric">Twitter</Link>
        </Stack>
        <Text variant="large" styles={boldStyle}>
          Design System
        </Text>
        <Stack horizontal gap={15} horizontalAlign="center">
          <Link href="https://developer.microsoft.com/en-us/fabric#/styles/icons">
            Icons
          </Link>
          <Link href="https://developer.microsoft.com/en-us/fabric#/styles/typography">
            Typography
          </Link>
          <Link href="https://developer.microsoft.com/en-us/fabric#/styles/themegenerator">
            Theme
          </Link>
        </Stack>
      </Stack>
    </Page>
  )
}

export default App
