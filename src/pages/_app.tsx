import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Container } from 'react-bootstrap';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS PokéDex</title>
        <meta name="description" content="NextJS PokéDex app by Coding in Flow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container className='py-4'>
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  );
}
