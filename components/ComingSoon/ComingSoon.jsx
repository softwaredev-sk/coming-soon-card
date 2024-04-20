'use client';
import { useEffect } from 'react';
import styles from './ComingSoon.module.css';
import party from 'party-js';
import Link from 'next/link';

export default function ComingSoon() {
  useEffect(() => {
    const pre = document.querySelector('pre');
    const page = document.querySelector('#page');

    document.addEventListener('mousemove', (e) => {
      rotateElement(e, pre);
    });

    page.addEventListener('click', () => {
      handleClick(null, page);
    });

    function rotateElement(event, element) {
      // get mouse position
      const x = event.clientX;
      const y = event.clientY;

      // find the middle
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;

      // get offset from middle as a percentage and tone it down a little
      const offsetX = ((x - middleX) / middleX) * 45;
      const offsetY = ((y - middleY) / middleY) * 45;

      // set rotation
      element.style.setProperty('--rotateX', offsetX + 'deg');
      element.style.setProperty('--rotateY', -1 * offsetY + 'deg');
      document.body.style.setProperty(
        '--dot-space',
        Math.abs(offsetX) + Math.abs(offsetY) + 50 + 'px'
      );
      document.body.style.setProperty(
        '--dot-size',
        Math.abs(offsetY / 25) + 1 + 'px'
      );
    }
  }, []);

  function handleClick(event, element) {
    party.confetti(event?.currentTarget || element, {
      count: element ? 80 : 35,
    });
  }

  return (
    <pre className={styles.pre} onClick={(e) => handleClick(e)}>
      <div className={styles.soon}>Coming Soon</div>
      <div className={styles.title}>
        <Link href="/" className={styles.a}>
          shailendra.xyz
        </Link>
      </div>
    </pre>
  );
}
