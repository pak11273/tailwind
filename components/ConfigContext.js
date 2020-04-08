import React, { useEffect, useState } from "react"

const Context = React.createContext()
const ConfigContext = React.createContext({})

const ContextProvider = (props) => {
  const [state, setState] = useState({
    framework: "react",
    loading: true,
  })

  /* pending api calls */
  const normalizeData = (data) => {
    return []
  }

  /* initialize context with api data */
  useEffect(() => {
    // const data = normalizeData(data)
    setState({
      ...state,
      loading: false,
    })
  }, [])

  return <Context.Provider value={state}>{props.children}</Context.Provider>
}

const Consumer = Context.Consumer

/* HOC for material ui styles */
const withConfig = (Wrapped) => (props) => (
  <ConfigContext.Consumer>
    {(config) => <Wrapped config={config} {...props} />}
  </ConfigContext.Consumer>
)

export { Context, ContextProvider, Consumer, withConfig, ConfigContext }
