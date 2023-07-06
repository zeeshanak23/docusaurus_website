import React from 'react';
import clsx from 'clsx';
import styles from '../../css/Hero.module.css';
import { Carousel } from 'antd'
import { ArrowRightOutlined,TwitterOutlined,FacebookOutlined, InstagramOutlined } from '@ant-design/icons'


export default function Hero() {
  const [isHamburger, setHamburger] = React.useState(false)

  return (
    
    <section className={styles.features}>
      <div className={styles.mobileLogo}>
        <div className={styles.logo}>
        <span>dazko</span>
        <div>crossfit & fitness</div>
        </div>  
    <div className={styles.headerSecond}>
        <div className={styles.hamburger} onClick={()=>{
          setHamburger(!isHamburger)
          console.log(isHamburger)
        }}>
          <div className={styles.slice}></div>
          <div className={styles.slice}></div>
          <div className={styles.slice}></div>
        </div>
        <span>MENU</span>
    </div>
        <div className={`${styles.anchorTags} ${isHamburger ? styles.active : styles.close}`}>
        <a href="">Home</a>
        <a href="">about</a>
        <a href="">trainer</a>
        <a href="">clases</a>
        <a href="">schedules</a>
        <a href="">new</a>
        <a href="">contact</a>
        <button>Become a member</button>
        </div>


  </div>
      <Carousel className={styles.carouselContainer} autoplay >
      <div className={styles.dazko}>
        <div>     
             <img src='/img/dazko/bg2.webp'></img>
        </div>

        <div className={styles.dazkoHeading}>
          <h1>You only fail,when you stop trying</h1>
          <p>A small river named Duden flows by their place and supplies <br /> it with the necessary regelialia. 
            </p>
          <button>take a tour now <ArrowRightOutlined style={{height:10}} /> </button>
        </div>
      </div>
   <div className={styles.dazko}>
    <div>
        <img src='/img/dazko/bg1.webp'></img>
        </div>
        <div className={styles.dazkoHeading}>
          <h1>INCREASE YOUR MUSCLE POWER</h1>
          <p>A small river named Duden flows by their place and supplies <br /> it with the necessary regelialia. 
            </p>
          <button>take a tour now <ArrowRightOutlined style={{height:10}} /> </button>
        </div>
      </div>
      <div className={styles.dazko}>
        <div>
        <img src='/img/dazko/bg3.webp'></img>
        </div>
        <div className={styles.dazkoHeading}>
          <h1>SHAPE YOUR PERFECT BODY</h1>
          <p>A small river named Duden flows by their place and supplies <br /> it with the necessary regelialia. 
            </p>
          <button>take a tour now <ArrowRightOutlined style={{height:10}} /> </button>
        </div>
      </div>
  </Carousel>
  <div className={styles.headerComponents}>
    <div className={styles.phoneNumber}>
      <div>Free Call<h1>+1 123 643 784738</h1></div>
    </div>
    <div className={styles.headerImage}>
      <div>
        <TwitterOutlined className={styles.anchortagImages} />
      </div>
      <div>
        <FacebookOutlined className={styles.anchortagImages} />
      </div>
      <div>
        <InstagramOutlined className={styles.anchortagImages} />
      </div>
      </div>
  </div>
  <nav className={styles.navigation}>
    <div className={styles.logo}>
      <span>dazko</span>
      <div>crossfit & fitness</div>
    </div>
    <div className={styles.anchorElements}>
      <div className={styles.borderLine}></div>
      <div className={`${styles.borderNavigation} ${isHamburger ? styles.active : styles.close}`}>
        <a href="">Home</a>
        <a href="">about</a>
        <a href="">trainer</a>
        <a href="">clases</a>
        <a href="">schedules</a>
        <a href="">new</a>
        <a href="">contact</a>
      <div>
        <div className={styles.anchorBtn}></div>
        <button>Become a member</button>
      </div>
      </div>
    </div>
  </nav>
    </section>
  );
}
