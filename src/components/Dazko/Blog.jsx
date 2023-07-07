import React from "react"
import styles from "../../css/Blog.module.css"

const Blog = () =>{
    return (
        <section className={styles.blogSection}>
            <div className={styles.header}>
                <h1>
                    our blog
                </h1>
                <h2>
                RECENT BLOG
                </h2>
            </div>
            <div className={styles.blog}>
                <div className={styles.blogContainer}>
                    <img src="./img/dazko/blog1.webp" alt="" />
                </div>
                <div className={styles.textBox}>
                    <p>DEC. 20, 2020 <span>3 COMMENTS</span></p>
                    <h3>REALLY GOOD WORKOUT, CAN FEEL IT WORKING</h3>
                    <div>A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
                </div>
                <div className={styles.blogContainer}>
                    <img src="./img/dazko/blog3.webp" alt="" />
                </div>
                <div className={styles.textBox}>
                    <p>DEC. 20, 2020 <span>3 COMMENTS</span></p>
                    <h3>REALLY GOOD WORKOUT, CAN FEEL IT WORKING</h3>
                    <div>A small river named Duden flows by their place and supplies it with the necessary regelialia.</div> 
                </div>
            </div>

            <div className={styles.blog2}>
                
                <div className={styles.textBox}>
                    <p>DEC. 20, 2020 <span>3 COMMENTS</span></p>
                    <h3>REALLY GOOD WORKOUT, CAN FEEL IT WORKING</h3>
                    <div>A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
                </div>
                <div className={styles.blogContainer2}>
                    <img src="./img/dazko/blog2.webp" alt="" />
                </div>
                
                <div className={styles.textBox}>
                    <p>DEC. 20, 2020 <span>3 COMMENTS</span></p>
                    <h3>REALLY GOOD WORKOUT, CAN FEEL IT WORKING</h3>
                    <div>A small river named Duden flows by their place and supplies it with the necessary regelialia.</div> 
                </div>
                <div className={styles.blogContainer2}>
                    <img src="./img/dazko/blog4.webp" alt="" />
                </div>
            </div>
            
        </section>
    )
}
export default Blog;