import Head from 'next/head';
import Link from 'next/link';

export default () => (
  <div>
    <Head>
      <title>About Pages</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <p>About Pages</p>
    <Link prefetch href="/">Go back</Link>
  </div>
)