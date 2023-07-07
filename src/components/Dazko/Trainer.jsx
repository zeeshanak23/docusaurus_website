import React from "react";
import styles from '../../css/Trainer.module.css'

const Trainer = () => {
    return (
        <section className={styles.TrainerSection}>
                <div className={styles.heading}>
                    <h1>TRAINER</h1>
                    <h2>FITNESS <span>TRAINER</span></h2>
                </div>
                <div className={styles.overlapsImages}>
                        <img src="../img/dazko/trainerBg.jpg" alt="" />
                    </div>
                <div className={styles.overlapSection}>
                    
                    <div>
                        <img src="../img/dazko/trainer1.png" alt="" />
                        <img src="../img/dazko/trainer2.png" alt="" />
                        <img src="../img/dazko/trainer3.png" alt="" />
                        <img src="../img/dazko/trainer4.png" alt="" />
                    </div>
                </div>
                <div className={styles.MoboverlapSection}>
                    <div>
                    <img src="../img/dazko/trainer1.png" alt="" />
                        <div>
                            <div className={styles.textBox}>
                            <h3>Alicia <br /> Brown</h3>
                            <div className={styles.transformdiv}>         
                            </div>
                            </div>
                        </div>
                    </div>

                    <div>
                    <img src="../img/dazko/trainer2.png" alt="" />
                        <div>
                            <div className={styles.textBox}>
                            <h3>Alicia <br /> Brown</h3>
                            <div className={styles.transformdiv}>         
                            </div>
                            </div>
                        </div>
                    </div>

                    <div>
                    <img src="../img/dazko/trainer3.png" alt="" />
                        <div>
                            <div className={styles.textBox}>
                            <h3>Alicia <br /> Brown</h3>
                            <div className={styles.transformdiv}>         
                            </div>
                            </div>
                        </div>
                    </div>

                    <div>
                    <img src="../img/dazko/trainer4.png" alt="" />
                        <div>
                            <div className={styles.textBox}>
                            <h3>Alicia <br /> Brown</h3>
                            <div className={styles.transformdiv}>         
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
        </section>
    )
}
export default Trainer;