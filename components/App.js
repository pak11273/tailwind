import React, { Component } from "react"

import Footer from "./Footer"
import LibzyAppBar from "./AppBar"
import PageContainer from "./PageContainer"
import { withConfig } from "./ConfigContext"
import { withRouter } from "react-router"
import { withStyles } from "@material-ui/core"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMenuOpen: true,
    }
  }

  showMenuButton = () => {
    const page = this.props.config.menuTree
      .slice()
      .reverse()
      .find((a) => this.props.location.pathname.startsWith("/" + a.path))

    if (page && page.tree && page.tree.length > 0) {
      return true
    }
    return false
  }

  render() {
    return (
      <div className={this.props.classes.container}>
        <div className={this.props.classes.main}>
          <LibzyAppBar
            showMenuButton={this.showMenuButton()}
            onMenuButtonClick={() =>
              this.setState({
                isMenuOpen: !this.state.isMenuOpen,
              })
            }
          />
          <div className={this.props.classes.content}>
            <PageContainer isMenuOpen={this.state.isMenuOpen} />
          </div>
        </div>
        <footer className={this.props.classes.footer}>
          <Footer />
        </footer>
      </div>
    )
  }
}

const styles = () => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: "1 0 auto",
  },
  content: {
    paddingBottom: 60,
    display: "inline-flex",
    minWidth: "100%",
    flexDirection: "row",
    height: "calc(100% - 48px)",
    backgroundColor: "#e8eaf5",
  },
  footer: {
    flexShrink: 0,
    backgroundColor: "#61DBFB",
    padding: 15,
  },
})

export default withStyles(styles)(withRouter(withConfig(App)))
