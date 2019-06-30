import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import "./Layout.module.scss"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400i,700,700i|Roboto:700"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
