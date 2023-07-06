
import React from 'react';
import styles from '../../css/Information.module.css';
import {ArrowRightOutlined} from '@ant-design/icons'


export default function Information () {
  return (
    <section className={styles.InformationSection}>
      <div className={styles.informationContainer}>
      <div className={styles.informationImage}>
        <img src='/img/dazko/homePage.webp'></img>
      </div>
      <div className={styles.SubHeading}>
        <span>Information About Us</span>
        <h2>DAZKO A <span>CROSSFIT</span> WORKOUT TRAINING CENTER</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda beatae fuga laboriosam, exercitationem quisquam cum atque aliquam, quo quos,
            neque optio tenetur qui voluptate at necessitatibus in labore ratione cumque.</p>
        <ul>
          <li>
            <a href="#"></a>    
            <span className={styles.listInformation}><ArrowRightOutlined style={{color:"#e1193e"}} />Men Fitness and Workout</span>
          </li>
          <li>
            <a href="#"></a>
            <span className={styles.listInformation}><ArrowRightOutlined style={{color:"#e1193e"}} />Men Fitness and Workout</span>
          </li>
          <li>
            <a href="#"></a>
            <span className={styles.listInformation}><ArrowRightOutlined style={{color:"#e1193e"}} />Men Fitness and Workout</span>
          </li>
        </ul>
      </div>
      </div>
      

      <div className={styles.MobInformationContainer}>
      
      <div className={styles.SubHeading2}>
        <span>Information About Us</span>
        <h2>DAZKO A <span>CROSSFIT</span> WORKOUT TRAINING CENTER</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda beatae fuga laboriosam, exercitationem quisquam cum atque aliquam, quo quos,
            neque optio tenetur qui voluptate at necessitatibus in labore ratione cumque.</p>
        <ul>
          <li>
            <a href="#"></a>    
            <span className={styles.listInformation2}><ArrowRightOutlined style={{color:"#e1193e",marginRight:20}} />Men Fitness and Workout</span>
          </li>
          <li>
            <a href="#"></a>
            <span className={styles.listInformation2}><ArrowRightOutlined style={{color:"#e1193e",marginRight:20}} />Men Fitness and Workout</span>
          </li>
          <li>
            <a href="#"></a>
            <span className={styles.listInformation2}><ArrowRightOutlined style={{color:"#e1193e",marginRight:20}} />Men Fitness and Workout</span>
          </li>
        </ul>
      </div>
      <div className={styles.informationImage2}>
        <img src='/img/dazko/homePage.webp'></img>
      </div>
      <div className={styles.mobReveiwList}>
        <div>
            <h1>30 +</h1>
            <p>Year of experience</p>
        </div>
        <div>
            <h1>100 +</h1>
            <p>fitness trainer</p>
        </div>
        <div>
            <h1>310 +</h1>
            <p>best equipment</p>
        </div>
        <div>
            <h1>10K+</h1>
            <p>Satisfied clients</p>
        </div>  
      </div>

      </div>


      <div className={styles.reviewSection}>
      <div className={styles.row}>
        <div className={styles.heightItems}>
          <div className={styles.blueBox}>
            <div>
              <div className={styles.reviewsList}>
                <div className={styles.text}>
                  <span>30<span>+</span></span>
                  <p>Year of experience</p>
                </div>
                <div className={styles.text}>
                  <span>100<span>+</span></span>
                  <p>Fitness Trainer</p>
                </div>
                <div className={styles.text}>
                  <span>310<span>+</span></span>
                  <p>Best Equipment</p>
                </div>
                <div className={styles.text}>
                  <span>10K<span>+</span></span>
                  <p>Satisfied clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      </div>
    </section>
  );
}
