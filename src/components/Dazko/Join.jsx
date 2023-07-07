
import React from 'react';
import styles from '../../css/Join.module.css';


export default function Join () {
  return (
    <section className={styles.JoinSection}>
      <div className={styles.heading}>
        <h1>Join us Now</h1>
        <h2>join us our free workout training with <span>DAZKO</span></h2>
      </div>
      <div className={styles.containerJoin}>
        <div className={styles.joinContent1}>
            <img src="/img/dazko/001-fitness.svg" alt="" />
            <h1>Free fitness training</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam.
                Dicta quasi deserunt exercitationem possimus sed, nisi commodi reiciendis odio 
                accusamus laudantium facere quia totam culpa minima? Officia, nam sapiente?</p>
        </div>
        <div className={styles.joinContent}>
            <img src="/img/dazko/002-treadmill.svg" alt="" />
            <h1>tons of cardio & strength</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam.
                Dicta quasi deserunt exercitationem possimus sed, nisi commodi reiciendis odio 
                accusamus laudantium facere quia totam culpa minima? Officia, nam sapiente?</p>
        </div>
        <div className={styles.joinContent}>
            <img src="/img/dazko/003-vip-card.svg" alt="" />
            <h1>no commentment memberships</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam.
                Dicta quasi deserunt exercitationem possimus sed, nisi commodi reiciendis odio 
                accusamus laudantium facere quia totam culpa minima? Officia, nam sapiente?</p>
        </div>
      </div>
    </section>
  );
}
