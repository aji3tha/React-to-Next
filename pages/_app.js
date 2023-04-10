import React from 'react'
import Layout from '../src/components/Layout'

function _app({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default _app