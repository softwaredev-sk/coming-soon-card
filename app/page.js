import ComingSoon from '@/components/ComingSoon/ComingSoon';
import styles from './page.module.css';
import LegacyPortfolio from '@/components/LegacyPortfolio/LegacyLink';
import BestView from '@/components/BestView/BestView';

export default function Home() {
  return (
    <>
      <div id="page" className={styles.page}></div>
      <ComingSoon />
      <BestView />
      <LegacyPortfolio />
    </>
  );
}
