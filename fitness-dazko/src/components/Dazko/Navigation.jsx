
import React from 'react';
import styles from '../../css/Navigation.module.css';


export default function Navigation () {
  return (
    <section className={styles.dazkoSection}>
      <div className="dazko">
        <img src='/img/dazko/bg2.webp'></img>
      </div>
      <div className={styles.name}></div>
    </section>
  );
}
