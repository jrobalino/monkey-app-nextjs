import Link from 'next/link'
import Head from 'next/head'
import TopNav from '../navigation/TopNav';

export default function Layout({
  children,
  title = 'Alma',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <TopNav/>
      </header>

      {children}

    </div>
  )
}