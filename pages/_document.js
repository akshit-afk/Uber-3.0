import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const _document = () => {
  return (
    <Html>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300&display=swap" rel="stylesheet"></link>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
  )
}

export default _document