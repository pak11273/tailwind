//ref: https://medium.com/javascript-in-plain-english/ssr-with-next-js-styled-components-and-material-ui-b1e88ac11dfa

import "assets/css/styles.css"
import "assets/css/custom.css"

import NextApp from "next/app"

export default class App extends NextApp {
  // remove  server generated css
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
