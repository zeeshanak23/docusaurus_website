import React from "react"
import styles from "../../css/Footer.module.css"
import { ArrowRightOutlined,PhoneOutlined,MailOutlined } from "@ant-design/icons"

const Footer = () =>{
    return (
        <section>
            <div className={styles.footerSection}>
                <div className={styles.firstSection}>
                    <h1>Dazko</h1>
                    <p>CROSSFIT & FITNESS</p>
                    <div className={styles.firstSentence}>A small river named Duden flows by their place and supplies it
                        with the necessary regelialia.</div>
                    <div className={styles.logo}>
                        <div>
                            <img src="./img/dazko/twitter.png" alt="" />
                        </div>
                        <div>
                            <img src="./img/dazko/twitter.png" alt="" />
                        </div>
                        <div>
                            <img src="./img/dazko/twitter.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.secondSection}>
                    <h1>Explore</h1>
                    <div>
                    <ArrowRightOutlined className={styles.arrowIcon} />
                    <h2>About Us</h2>
                    </div>
                    <div>
                    <ArrowRightOutlined className={styles.arrowIcon} />
                    <h2>Trainers Team</h2>
                    </div>
                    <div>
                    <ArrowRightOutlined className={styles.arrowIcon} />
                    <h2>Awesome Classes</h2>
                    </div>
                    <div>
                    <ArrowRightOutlined className={styles.arrowIcon} />
                    <h2>Pricing Package</h2>
                    </div>
                    <div>
                    <ArrowRightOutlined className={styles.arrowIcon} />
                    <h2>Latest News</h2>
                    </div>
                </div>
                <div className={styles.thirdSection}>
                    <h1>Our Contacts</h1>
                    <div>
                        <PhoneOutlined className={styles.phoneIcon} />
                        <h2>
                        203 Fake St. Mountain View, San Francisco, California, USA
                        </h2>
                    </div>
                    <div>
                        <PhoneOutlined className={styles.phoneIcon} />
                        <h2>
                        +2 392 3929 210
                        </h2>
                    </div>
                    <div>
                        <MailOutlined  className={styles.phoneIcon} />
                        <h2>
                        info@yourdomain.com
                        </h2>
                    </div>
                </div>
                <div className={styles.forthSection}>
                    <div>
                        <img src="./img/dazko/footer1.webp" alt="" />
                        <img src="./img/dazko/footer2.webp" alt="" />
                        <img src="./img/dazko/footer3.webp" alt="" />
                        <img src="./img/dazko/footer4.webp" alt="" />
                    </div>
                    <div>
                        <img src="./img/dazko/footer5.webp" alt="" />
                        <img src="./img/dazko/footer6.webp" alt="" />
                        <img src="./img/dazko/footer7.webp" alt="" />
                        <img src="./img/dazko/footer8.webp" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;