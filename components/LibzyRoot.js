import { App, ConfigContext, MDX } from "../components"
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter as Router,
} from "react-router-dom"
import React, { Component } from "react"

import { MDXProvider } from "@mdx-js/react"

export default class LibzyRoot extends Component {
  render() {
    // let Router = BrowserRouter;
    // if (this.props.config.options.routerType === 'hash') {
    //     Router = HashRouter;
    // }

    return (
      <ConfigContext.Provider value={this.props.config}>
        <Router>
          <MDXProvider components={MDX}>
            <App />
          </MDXProvider>
        </Router>
      </ConfigContext.Provider>
    )
  }
}
