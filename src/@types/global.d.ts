import React from "react"

declare global {
  type ReactProps<T> = {
    children: React.ReactNode
  } & T
}

// Adding this exports the declaration file which Typescript/CRA can now pickup:
export {}