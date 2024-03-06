'use client';

import '@/styles/globals.css';
import './sidebar/sidebar.css';
import { appWithTranslation } from 'next-i18next';
import { SessionProvider } from 'next-auth/react';

function App({ session, Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <SessionProvider session={pageProps.session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}

export default appWithTranslation(App);

// // Assuming you're working in pages/_app.js

// import '@/styles/globals.css'
// import './sidebar/sidebar.css'
// import { useEffect } from 'react'
// import { appWithTranslation } from 'next-i18next'

// function App({ Component, pageProps }) {
//   // Your custom effect to disable right-click and dev shortcuts
//   useEffect(() => {
//     const disableRightClick = event => event.preventDefault()

//     const disableDevShortcuts = event => {
//       if (
//         (event.ctrlKey &&
//           event.shiftKey &&
//           (event.key === 'I' || event.key === 'i')) ||
//         (event.ctrlKey &&
//           event.shiftKey &&
//           (event.key === 'C' || event.key === 'c')) ||
//         (event.ctrlKey &&
//           event.shiftKey &&
//           (event.key === 'J' || event.key === 'j')) ||
//         (event.ctrlKey && (event.key === 'U' || event.key === 'u')) ||
//         event.keyCode === 123
//       ) {
//         event.preventDefault()
//       }
//     }

//     document.addEventListener('contextmenu', disableRightClick)
//     document.addEventListener('keydown', disableDevShortcuts)

//     return () => {
//       document.removeEventListener('contextmenu', disableRightClick)
//       document.removeEventListener('keydown', disableDevShortcuts)
//     }
//   }, [])

//   // Support for layout patterns in Next.js
//   const getLayout = Component.getLayout || (page => page)

//   return getLayout(<Component {...pageProps} />)
// }

// export default appWithTranslation(App)
