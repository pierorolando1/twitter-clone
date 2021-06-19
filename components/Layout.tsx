import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children: ReactNode
  title: string,
  header: ReactNode

}

const Layout = ({ children, title = 'This is the default title', header, }: Props) => (
  <div >
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {
        header
      }
    </Head>
    {
      children
    }
  </div>
)

export default Layout
