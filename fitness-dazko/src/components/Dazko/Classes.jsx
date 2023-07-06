import React from 'react';
import styles from '../../css/Clases.module.css'
import { ArrowRightOutlined }  from '@ant-design/icons'

export default function Classes() {
    return (
      <section className={styles.classesSection}>
        <div className={styles.heading}>
            <h1>
                Our classes
                <h2>DAZKO <div> WORKOUT CLASSES</div></h2>
            </h1>
            <div className={styles.classImage}>
                <div>
                    <img src="/img/dazko/class1.webp" alt="" />
                    {/* <span className={styles.text}>$100</span> */}
                    <h3>body builder</h3>
                </div>
                <div>
                    <img src="/img/dazko/class2.webp" alt="" />
                    {/* <span className={styles.text}>$100</span> */}
                    <h3>weight lifting</h3>
                </div>
                <div>
                    <img src="/img/dazko/class3.webp" alt="" />
                    {/* <span className={styles.text}>$100</span> */}
                    <h3>cardio</h3>
                </div>
            </div>
        </div>
        <h5 className={styles.classesBtn}>View all classes <ArrowRightOutlined /></h5>
      </section>
    );
  }