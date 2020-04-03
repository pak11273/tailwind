import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

// import Layout from '../layout/layout'
import Nav from "./Nav"
import { withConfig } from "./ConfigContext"
import { withStyles } from "@material-ui/core"

class PageContainer extends Component {
  state = {
    layoutOpen: false,
  }

  getMenuTreeRoute(i, item, basePath) {
    if (item.tree) {
      return item.tree.map((treeItem, i) =>
        this.getMenuTreeRoute(i, treeItem, basePath + "/" + item.path)
      )
    }
    return (
      <Route
        key={i}
        path={basePath + "/" + item.path}
        component={item.component}
      />
    )
  }

  toggleLayout = () => {
    this.setState(() => ({
      layoutOpen: !this.state.layoutOpen,
    }))
  }

  getRoute = (item, i) => {
    if (item.component) {
      return (
        <Route
          key={i}
          exact
          path={"/" + item.path}
          render={(props) => <item.component {...props} data={item.data} />}
        />
      )
    }
    return (
      <Route
        key={i}
        path={"/" + item.path}
        render={() => (
          <React.Fragment>
            <div
              className={this.props.classes.nav}
              style={{
                width: this.props.isMenuOpen ? 240 : 0,
                marginLeft: this.props.isMenuOpen ? 20 : 0,
              }}
            >
              <Nav basePath={item.path} tree={item.tree} />
            </div>
            <div className={this.props.classes.page}>
              {item.tree.map((treeItem, i) =>
                this.getMenuTreeRoute(i, treeItem, "/" + item.path)
              )}
            </div>
            {/* TODO: layout feature button */}
            {/* <div>
                            <button
                                type="button"
                                className={this.props.classes.layoutToggle}
                                onClick={() => this.toggleLayout()}
                            >
                                Layout
                            </button>
                        </div> */}
            <div
              className={this.props.classes.layout}
              style={{
                width: this.state.layoutOpen ? 600 : 0,
                marginLeft: this.state.layoutOpen ? 20 : 0,
              }}
            >
              {/* <Layout /> */}
            </div>
          </React.Fragment>
        )}
      />
    )
  }

  render() {
    return this.props.config.menuTree.map((item, i) => this.getRoute(item, i))
  }
}

const styles = (theme) => ({
  nav: {
    transition: "all ease 300ms",
    flexShrink: 0,
    backgroundColor: "white",
    width: 240,
    // height: 'calc(100% - 40px)',
    overflow: "hidden",
    borderRadius: 5,
    margin: "20px 0px 20px 0px",
  },
  layout: {
    transition: "all ease 300ms",
    flexShrink: 0,
    width: 600,
    backgroundColor: "white",
    marginTop: 100,
    overflow: "hidden",
    borderRadius: 5,
    margin: "20px 0px 20px 0px",
  },
  layoutToggle: {
    background: "#61DBFB",
    borderRadius: "5px",
    color: "white",
    padding: "1px 10px 2px",
    position: "absolute",
    right: 20,
    fontSize: "1.5rem",
    fontWeight: 400,
    marginTop: 20,
  },
  page: {
    flex: "1 0 auto",
    flexShrink: "inherit",
    height: "100%",
    minHeight: 900,
    maxWidth: 1440,
    padding: "0px 20px",
    "& @media screen and (max-width: 767px)": {
      padding: "0px 5px",
    },
  },
})

export default withConfig(
  withStyles(styles, { withTheme: true })(PageContainer)
)
