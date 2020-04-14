import { ContextProvider } from "components"
import LibzyConfig from "../libzy.config"
import { LibzyRoot } from "components"
import React from "react"

const App = () => (
  <ContextProvider>
    <LibzyRoot config={LibzyConfig} />
  </ContextProvider>
)

export default App
