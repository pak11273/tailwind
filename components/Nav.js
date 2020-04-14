import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  withStyles,
} from "@material-ui/core"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Link } from "react-router-dom"
import React from "react"
import { lighten } from "@material-ui/core/styles/colorManipulator"
import { withRouter } from "react-router"

class Nav extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      expandedItems: [],
    }
  }

  handleNodeClick = (id) => {
    this.setState(() => ({ [id]: !this.state[id] }))
  }

  renderNavItem(item, path, nestingLevel = 0) {
    const itemStyle = {
      paddingLeft: 10 + 20 * nestingLevel,
    }

    if (item.tree && item.tree.length > 0) {
      const open = this.state.expandedItems.indexOf(item.id) > -1
      return (
        <div key={item.id}>
          <ListItem
            id={"menu-item-" + item.path}
            classes={{ root: this.props.classes.listItemRoot }}
            button
            onClick={() => {
              this.handleNodeClick(item.id)
            }}
            style={itemStyle}
          >
            <ListItemText primary={item.text} />
            <ExpandMoreIcon>
              {open ? "expand_less" : "expand_more"}
            </ExpandMoreIcon>
          </ListItem>
          <Collapse in={this.state[item.id]} timeout="auto">
            <List dense disablePadding>
              {item.tree.map((subItem) => {
                return this.renderNavItem(
                  subItem,
                  path + "/" + item.path,
                  nestingLevel + 1
                )
              })}
            </List>
          </Collapse>
        </div>
      )
    }
    let listItemTextStyle = {}
    const listItemStyle = Object.assign({}, itemStyle)

    if (this.props.location.pathname === "/" + path + "/" + item.path) {
      listItemTextStyle = {
        fontWeight: 600,
        color: "#61DBFB",
      }

      listItemStyle.backgroundColor = lighten("#61DBFB", 0.85)
    }

    return (
      <ListItem
        key={item.path}
        id={"menu-item-" + item.path}
        button
        classes={{ root: this.props.classes.listItemRoot }}
        style={listItemStyle}
        to={"/" + path + "/" + item.path}
        component={Link}
      >
        <ListItemText
          primary={<div style={listItemTextStyle}>{item.text}</div>}
        />
      </ListItem>
    )
  }

  render() {
    return (
      <List
        dense
        key="NavListKey"
        component="nav"
        disablePadding
        style={{ padding: 5 }}
      >
        {this.props.tree.map((item) => {
          return this.renderNavItem(item, this.props.basePath)
        })}
      </List>
    )
  }
}

const styles = () => ({
  listItemIconRoot: {
    marginRight: 0,
  },
  listItemRoot: {
    color: "#65819D",
    borderRadius: 5,
    borderBottomColor: "#61DBFB",
    "&:hover": {
      backgroundColor: lighten("#61DBFB", 0.85),
    },
  },
})

export default withRouter(withStyles(styles)(Nav))
