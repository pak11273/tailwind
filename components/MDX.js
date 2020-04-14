import {
  Icon,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  withTheme,
} from "@material-ui/core"
import { LiveEditor, LiveProvider } from "react-live"

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import { Link } from "react-router-dom"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import React from "react"

export default {
  h1: withTheme((props) => (
    <div>
      <Typography variant="h4" {...props} />
      <div
        style={{
          width: 50,
          borderBottom: "4px solid " + "#61DBFB",
          borderRadius: 4,
        }}
      ></div>
      <br />
    </div>
  )),
  h2: (props) => (
    <div>
      <Typography variant="h6" {...props} />
    </div>
  ),
  h3: (props) => (
    <div>
      <Typography variant="subtitle1" {...props} />
    </div>
  ),
  p: (props) => (
    <div>
      <Typography variant="subtitle2" {...props} />
      <br />
    </div>
  ),
  ul: (props) => <List>{props.children}</List>,
  li: (props) => (
    <ListItem dense style={{ paddingTop: 4, paddingBottom: 4 }}>
      <FiberManualRecordIcon
        fontSize="small"
        style={{
          marginRight: 0,
          marginTop: 12,
          width: "5px",
          height: "5px",
          alignSelf: "flex-start",
        }}
      ></FiberManualRecordIcon>
      <ListItemText style={{ paddingLeft: 8 }}>
        <Typography variant="subtitle2" {...props} />
      </ListItemText>
    </ListItem>
  ),
  a: withTheme((props) => {
    if (props.href.startsWith("http")) {
      return (
        <a
          href={props.href}
          style={{
            color: props.theme.palette.primary.main,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          {props.children}
        </a>
      )
    } else {
      return (
        <Link
          to={props.href}
          style={{
            color: props.theme.palette.primary.main,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          {props.children}
        </Link>
      )
    }
  }),
  blockquote: withTheme((props) => (
    <div>
      <Paper
        elevation={0}
        style={{
          padding: 15,
          backgroundColor: "white",
          borderLeft: "4px solid " + props.theme.palette.primary.main,
          display: "flex",
        }}
      >
        <div style={{ flex: 1, alignSelf: "center" }}>
          <Typography variant="subtitle2">
            {props.children.props.children}
          </Typography>
        </div>
        <Icon style={{ fontSize: 30, opacity: 0.3, marginLeft: 10 }}>
          warning
        </Icon>
      </Paper>
      <br />
    </div>
  )),
  table: (props) => (
    <div style={{ width: "100%", display: "grid" }}>
      <table
        style={{
          maxWidth: "100%",
          display: "block",
          overflow: "auto",
        }}
      >
        {props.children}
      </table>
    </div>
  ),
  thead: (props) => (
    <thead
      style={{
        backgroundColor: "white",
      }}
    >
      {props.children}
    </thead>
  ),
  th: (props) => (
    <th style={{ padding: 10 }}>
      <Typography variant="subtitle1">{props.children}</Typography>
    </th>
  ),
  tbody: (props) => (
    <tbody style={{ backgroundColor: "#f9f9f999" }}>{props.children}</tbody>
  ),
  tr: (props) => <tr>{props.children}</tr>,
  td: (props) => (
    <td style={{ padding: 5 }}>
      <Typography variant="subtitle2">{props.children}</Typography>
    </td>
  ),
  inlineCode: (props) => (
    <code
      style={{
        backgroundColor: "rgb(239, 242, 247)",
        padding: "3px 5px",
        color: "indianred",
        borderRadius: 3,
      }}
    >
      {props.children}
    </code>
  ),
  code: (props) => {
    if (props.className === "language-console") {
      return (
        <div>
          <Paper
            elevation={0}
            style={{
              padding: 10,
              color: "#DDD",
              backgroundColor: "#2b3e50",
              fontFamily:
                'Inconsolata, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
              fontSize: 16,
              whiteSpace: "initial",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>{props.children}</div>
              <Tooltip title="Copy">
                <IconButton
                  style={{ padding: 0 }}
                  disableRipple
                  onClick={() => navigator.clipboard.writeText(props.children)}
                >
                  <Icon
                    style={{
                      color: "#FFFFFF99",
                      fontSize: 16,
                    }}
                  >
                    file_copy
                  </Icon>
                </IconButton>
              </Tooltip>
            </div>
          </Paper>
          <br />
        </div>
      )
    } else {
      return (
        <LiveProvider
          code={props.children.trim()}
          disabled
          language={props.className.substr("language-".length)}
        >
          <LiveEditor
            code={props.children.trim()}
            style={{
              backgroundColor: "#2b3e50",
              borderRadius: 5,
              caretColor: "white",
            }}
          />
        </LiveProvider>
      )
    }
  },
}
