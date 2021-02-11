import React from "react"
import Heading from './heading'

export default function Page({ children }) {
  return (
    <div>
      <Heading />
      {children}
    </div>
  )
}
