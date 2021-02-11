import React from "react"
import Heading from './heading'
import Header from './header'

export default function Page({ children }) {
  return (
    <div>
      <Heading />
      <Header />
      {children}
    </div>
  )
}
