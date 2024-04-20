import Link from 'next/link';
import styles from './LegacyLink.module.css';

export default function LegacyPortfolio() {
  return (
    <div className={styles.link}>
      <a href="/legacy">Legacy</a>
    </div>
  );
}
