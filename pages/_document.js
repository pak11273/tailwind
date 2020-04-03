import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/styles"
import NextDocument from "next/document"
import React from "react"

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const materialUiSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            materialUiSheets.collect(<App {...props} />),
        })
      const initialProps = await NextDocument.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
          </React.Fragment>,
        ],
      }
    } catch (error) {
      console.log(error)
    }
  }
}
