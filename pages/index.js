import { ContextProvider } from "components"
import LibzyConfig from "../libzy.config"
import LibzyRoot from "./libzyroot"
import React from "react"

// import { LibzyRoot } from "components"

const App = () => (
  <ContextProvider>
    <LibzyRoot config={LibzyConfig} />
  </ContextProvider>
)

export default App
