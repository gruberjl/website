import React from "react"
import { Stack, Text, Link, FontWeights } from "office-ui-fabric-react"
import logo from "../images/favicon-32x32.png"

const headerStyle = { root: {
  minHeight: '47px',
  padding: '0px 32px',
  boxShadow: 'rgb(0 0 0 / 13%) 0px 6.4px 14.4px 0px, rgb(0 0 0 / 11%) 0px 1.2px 3.6px 0px',
  alignItems: 'center',
  flexFlow: 'row nowrap'
} }

const linkStyle = { root: {
  alignItems: 'center',
  'display': 'flex',
  flexFlow: 'row nowrap'
}}

const textStyle = { root: {
  marginLeft: '12px',
  fontWeight: FontWeights.semibold,
  color: 'rgb(96, 94, 92)',
  borderLeft: '2px solid hsla(0,0%,37%,1)',
  paddingLeft: '12px'
}}

export default function Header({ children }) {
    return (
      <Stack styles={headerStyle}>
        <Link href="/" styles={linkStyle}>
          <img src={logo} height='32' width='32'/>
          <Text variant="xxLarge" styles={textStyle}>GitBit</Text>
        </Link>
      </Stack>
    );
}
