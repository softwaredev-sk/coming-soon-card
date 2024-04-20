import styles from './BestView.module.css';

export default function BestView() {
  return (
    <div className={styles.nopointer}>
      {/* Best viewed on screens with pointing devices. */}
      Swipe or Touch
    </div>
  );
}
