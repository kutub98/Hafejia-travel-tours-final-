'use client';

import '@/styles/globals.css';
import './sidebar/sidebar.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);
  return getLayout(<Component {...pageProps} />);
}
