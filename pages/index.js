import Head from 'next/head';
import Link from 'next/link';

export default () => (
  <div>
    <Head>
      <title>Home Pages</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <p>Home Pages</p>
    <Link prefetch href="/about">About Pages</Link>
  </div>
)