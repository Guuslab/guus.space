import { useEffect } from 'react';

import '@/styles/globals.css'
import '@/styles/home.css';
import '@/styles/header.css';
import '@/styles/footer.css';

// import adobeFont from '@/javascript/adobe-font.js';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
 
export default MyApp