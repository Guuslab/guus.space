// import { useEffect } from 'react';
import styles from '@/styles/Home.module.css';

import space from '@/javascript/space';
import Navigation from '@/components/navigation';
// import Bagrounds from '@/components/bagrounds';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <>
    <Navigation />
      <div className="hero">
        <h1 className="space-text">GUUS.SPACE</h1>
        <canvas id="space"></canvas>
      </div>
      <div>
        {/* <Bagrounds/> */}
      </div>
      <Footer />
    </>
  )
}