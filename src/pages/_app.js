'use client';

import '@/styles/globals.css';
import './sidebar/sidebar.css';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);
  return getLayout(<Component {...pageProps} />);
}

export default appWithTranslation(App);

// হজ্ব ও উমরাহ
// প্যাকেজস
// আমাদের সম্পর্কে
// আরো জানুন
