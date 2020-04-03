import { App, ConfigContext, MDX } from "../components"
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter as Router,
} from "react-router-dom"
import React, { Component } from "react"

import { LibzyTheme } from "../theme/libzyTheme"
import { MDXProvider } from "@mdx-js/react"
import { MuiThemeProvider } from "@material-ui/core"

export default class LibzyRoot extends Component {
  render() {
    // let Router = BrowserRouter;
    // if (this.props.config.options.routerType === 'hash') {
    //     Router = HashRouter;
    // }
    console.log(this.props.config)

    return (
      <ConfigContext.Provider value={this.props.config}>
        <Router>
          <MuiThemeProvider theme={LibzyTheme(this.props.config)}>
            <MDXProvider components={MDX}>
              <App />
            </MDXProvider>
          </MuiThemeProvider>
        </Router>
      </ConfigContext.Provider>
    )
  }
}
