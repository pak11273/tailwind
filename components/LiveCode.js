import {
  Collapse,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  withStyles,
} from "@material-ui/core"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"
import React, { Component } from "react"

import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import CodeIcon from "@material-ui/icons/Code"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import LockIcon from "@material-ui/icons/Lock"
import { Resizable } from "re-resizable"

let dragula

if (typeof window !== "undefined") {
  let dragular = require("dragula")
}

// import fileDownload from 'js-file-download'
// import imagesLoaded from 'imagesloaded'

class LiveCodeInner extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: this.props.expanded || true,
      code: this.props.code,
      copy: this.props.copy,
      codeBlockOpen: this.props.codeBlockOpen,
      windowWidth: window.innerWidth,
    }
  }

  componentDidMount() {
    // OLD CODE
    //         const droppable = document.querySelector('.js-droppable')
    // const snippets = document.querySelector('#js-snippets')
    //         const snippet = document.querySelectorAll('.js-snippet')
    //         const filter = document.querySelector('.js-filter')
    //         const downloadBtn = document.querySelector('.js-download')
    //         const deleteBtnHtml =
    //             "<div class='bg-white hidden absolute top-0 left-0 js-delete-btn px-4 py-2 shadow'><i class='far fa-trash-alt pointer-events-none'></i></div>"
    //         const stitchesCSSPath = 'https://localhost:8080/output.css'
    //         const fontAwesomePath =
    //             'https://use.fontawesome.com/releases/v5.6.3/css/all.css'
    //         const fontAwesomeIntegrity =
    //             'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/'
    //         const stitchesHTML = html => `<!DOCTYPE html>
    // <html lang="en">
    //   <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //     <link href=${stitchesCSSPath} rel="stylesheet">
    //     <link rel="stylesheet" href=${fontAwesomePath} integrity=${fontAwesomeIntegrity} crossorigin="anonymous">
    //     <title>Stitches</title>
    //   </head>
    //   <body>${html}</body>
    // </html>`
    //         dragula([snippets, droppable], {
    //             copy: function(el, source) {
    //                 return source === snippets
    //             },
    //             accepts: function(el, target) {
    //                 return target !== snippets
    //             }
    //         }).on('drop', (el, target) => {
    //             el.innerHTML += deleteBtnHtml
    //             el.classList.add('relative')
    //         })
    //         filter.addEventListener('click', event => {
    //             if (event.target.tagName !== 'BUTTON') {
    //                 return
    //             }
    //             const val = event.target.getAttribute('data-filter')
    //             for (var i = 0; i < snippet.length; i++) {
    //                 if (snippet[i].classList.contains(val)) {
    //                     snippet[i].style.display = 'block'
    //                 } else {
    //                     snippet[i].style.display = 'none'
    //                 }
    //             }
    //             masonry('.js-snippets', '.js-snippet', 0, 2, 2, 1)
    //         })
    //         function masonry(
    //             grid,
    //             gridCell,
    //             gridGutter,
    //             dGridCol,
    //             tGridCol,
    //             mGridCol
    //         ) {
    //             var g = document.querySelector(grid)
    //             var gc = document.querySelectorAll(gridCell)
    //             var gcLength = gc.length
    //             var gHeight = 0
    //             var i
    //             for (i = 0; i < gcLength; ++i) {
    //                 gHeight += gc[i].offsetHeight + parseInt(gridGutter)
    //             }
    //             if (window.screen.width >= 1024)
    //                 g.style.height =
    //                     gHeight / dGridCol + gHeight / (gcLength + 1) + 100 + 'px'
    //             else if (window.screen.width < 1024 && window.screen.width >= 768)
    //                 g.style.height =
    //                     gHeight / tGridCol + gHeight / (gcLength + 1) + 'px'
    //             else
    //                 g.style.height =
    //                     gHeight / mGridCol + gHeight / (gcLength + 1) + 'px'
    //         }
    //         downloadBtn.addEventListener('click', () => {
    //             const selectedBlocks = []
    //             const selectedSnippets = document.querySelectorAll(
    //                 '.js-droppable > .js-snippet'
    //             )
    //             for (var i = 0; i < selectedSnippets.length; i++) {
    //                 selectedBlocks.push(selectedSnippets[i].id)
    //             }
    //             let html = ''
    //             Promise.all(
    //                 selectedBlocks.map(template =>
    //                     fetch(`../templates/${template}.html`).then(response =>
    //                         response.text()
    //                     )
    //                 )
    //             ).then(templateString => {
    //                 html += templateString.join('')
    //                 fileDownload(stitchesHTML(html), 'stitches.html')
    //             })
    //         })
    // document.addEventListener('click', function(event) {
    //     if (event.target.classList.contains('js-delete-btn')) {
    //         document
    //             .querySelector('.js-droppable')
    //             .removeChild(event.target.parentElement)
    //     }
    // })
    //         ;['resize', 'load'].forEach(function(event) {
    //             window.addEventListener(event, function() {
    //                 imagesLoaded(snippets, function() {
    //                     // A masonry grid with 0px gutter, with 2 columns on desktop, 2 on tablet, and 1 column on mobile devices.
    //                     masonry('.js-snippets', '.js-snippet', 0, 2, 2, 1)
    //                 })
    //             })
    //         })
    // dragula([snippets, document.querySelector('.js-droppable')], {
    // copy: true,
    // moves: function(el, source) {
    //     return source === snippets
    // },
    // accepts: function(el, target) {
    //     return target !== snippets
    // }
    // })
    //     .on('drop', (el, target) => {
    //     el.innerHTML += deleteBtnHtml
    //     el.classList.add('relative')
    // })
    // Dragula
    const snippets = document.querySelector("#js-snippets")

    document.addEventListener("click", this.renderDroppable)
    document.addEventListener("click", this.addDeleteBtn)

    // const drake = dragula(
    //     [snippets, document.querySelector('.js-droppable')],
    //     {
    //         copy: true,
    //         copySortSource: true
    // moves(el, source) {
    //     return source === snippets
    // },
    // accepts(el, target) {
    //     return target !== snippets
    // }
    //     }
    // )

    // Remove live editor when window width <= 500 to allow for responsive resizing
    window.addEventListener("resize", this.windowWidth)

    // Only run if ResizeObserver is supported.
    if ("ResizeObserver" in self) {
      // Create a single ResizeObserver instance to handle all
      // container elements. The instance is created with a callback,
      // which is invoked as soon as an element is observed as well
      // as any time that element's size changes.
      var ro = new ResizeObserver(function (entries) {
        // Default breakpoints that should apply to all observed
        // elements that don't define their own custom breakpoints.
        var defaultBreakpoints = {
          SM: 640,
          MD: 768,
          LG: 1024,
          XL: 1280,
        }

        entries.forEach(function (entry) {
          // If breakpoints are defined on the observed element,
          // use them. Otherwise use the defaults.
          var breakpoints = entry.target.dataset.breakpoints
            ? JSON.parse(entry.target.dataset.breakpoints)
            : defaultBreakpoints

          // Update the matching breakpoints on the observed element.
          Object.keys(breakpoints).forEach(function (breakpoint) {
            var minWidth = breakpoints[breakpoint]
            if (entry.contentRect.width >= minWidth) {
              entry.target.classList.add(breakpoint)
            } else {
              entry.target.classList.remove(breakpoint)
            }
          })
        })
      })

      // Find all elements with the `data-observe-resizes` attribute
      // and start observing them.
      var elements = document.querySelectorAll("[data-observe-resizes]")
      for (var element, i = 0; (element = elements[i]); i++) {
        ro.observe(element)
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowWidth)
    document.removeEventListener("click", this.renderDroppable)
    document.removeEventListener("click", this.addDeleteBtn)
  }

  windowWidth = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
    const win = window.innerWidth
  }

  renderDroppable = (e) => {
    if (e.target.classList.contains("js-delete-btn")) {
      document
        .querySelector(".js-droppable")
        .removeChild(event.target.parentElement)
    }
  }

  addDeleteBtn = (e) => {
    if (e.target.classList.contains("js-delete-btn")) {
      document
        .querySelector(".js-droppable")
        .removeChild(e.target.parentElement)
    }
  }

  render() {
    return (
      <LiveProvider
        copy={this.state.copy}
        code={this.state.code}
        scope={this.props.scope}
      >
        <Paper className={this.props.classes.root}>
          <div className={this.props.classes.topBar}>
            <div style={{ flex: 1, justifyContent: "space-between" }}>
              <Tooltip title={this.state.expanded ? "Hide" : "Show"}>
                <IconButton
                  style={{
                    transition: "all ease 300ms",
                    transform: this.state.expanded ? "rotate(90deg)" : "",
                  }}
                  onClick={() =>
                    this.setState((prev) => ({
                      expanded: !prev.expanded,
                    }))
                  }
                >
                  <ChevronRightIcon>chevron_right</ChevronRightIcon>
                </IconButton>
              </Tooltip>
              <Typography
                variant="subtitle1"
                className={this.props.classes.topBarTitle}
              >
                {this.props.title}
              </Typography>
              <IconButton
                // TODO: activate authorization
                style={{
                  position: "absolute",
                  right: "0",
                  marginRight: "20px",
                  display: this.state.expanded ? "none" : "inline-flex",
                  display: "none",
                }}
                onClick={() => null}
              >
                <LockIcon>lock_icon</LockIcon>
              </IconButton>
            </div>
            {this.state.expanded && (
              <div className={this.props.classes.topBarActions}>
                <Tooltip
                  title={
                    this.state.codeBlockOpen
                      ? "Hide the source code"
                      : "Show the source code"
                  }
                >
                  <IconButton
                    onClick={() =>
                      this.setState((prev) => ({
                        codeBlockOpen: !prev.codeBlockOpen,
                      }))
                    }
                  >
                    <CodeIcon>code</CodeIcon>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy the source code">
                  <IconButton
                    onClick={() =>
                      navigator.clipboard.writeText(this.state.copy)
                    }
                  >
                    <FileCopyIcon>file_copy</FileCopyIcon>
                  </IconButton>
                </Tooltip>
              </div>
            )}
          </div>
          <Collapse in={this.state.expanded} timeout="auto">
            {/* TODO: choose which framework */}
            {/* <div className="flex">
              <button className="p-2 bg-red-400">react</button>
              <button className="p-2 bg-gray-300">html</button>
              <button className="p-2 bg-gray-300">vue</button>
            </div> */}
            <Collapse
              style={{
                display: this.state.windowWidth >= 500 ? "block" : "none",
              }}
              in={this.state.codeBlockOpen}
              timeout="auto"
            >
              <div className={this.props.classes.codeBlock}>
                <LiveEditor
                  className={this.props.classes.code}
                  onChange={(code) => this.setState({ code })}
                />
                <LiveError className={this.props.classes.errorBlock} />
              </div>
            </Collapse>
            <Resizable
              enable={{
                right: true,
              }}
              bounds="parent"
              className={this.props.classes.preview}
              data-observe-resizes
            >
              <LivePreview
                id="js-snippets"
                className={this.props.classes.livePreview}
                data-observe-resizes
              />
            </Resizable>
          </Collapse>
        </Paper>
      </LiveProvider>
    )
  }
}

const styles = (theme) => ({
  root: {
    marginTop: 10,
    padding: 10,
    display: "grid",
  },
  topBar: {
    display: "flex",
    posistion: "relative",
    justifyContent: "space-around",
  },
  topBarTitle: {
    color: "#65819D",
    display: "inline-block",
  },
  topBarActions: {},
  description: {
    color: "#65819D",
    padding: 5,
  },
  codeBlock: {},
  code: {
    marginTop: 5,
    backgroundColor: "#2b3e50",
    borderRadius: 5,
    caretColor: "white",
  },
  errorBlock: {
    marginTop: 5,
    marginBottom: 0,
    color: "#e53935",
    backgroundColor: "#ffcdd2",
    borderRadius: 5,
    padding: 10,
  },
  preview: {
    marginTop: 5,
    backgroundColor: "#e8eaf5",
    borderRadius: 5,
    padding: 5,
    display: "grid",
  },
  livePreview: {
    maxWidth: "100%",
    // overflow: 'auto'
  },
})

const LiveCode = withStyles(styles, { withTheme: true })(LiveCodeInner)
export default LiveCode
