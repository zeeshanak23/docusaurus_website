import React, { useState } from "react";
import styles from '../../css/Trainer.module.css'

const Trainer = () => {

    const [isActive1,setActive1]=useState(false);
    const [isActive2,setActive2]=useState(false);
    const [isActive3,setActive3]=useState(false);
    const [isActive4,setActive4]=useState(false);

    const trainerList = [{
        imgage:"../img/dazko/trainer1.png",
        title:"ARON MIGHTY",
        active:isActive1,
    },
    {
        imgage:"../img/dazko/trainer2.png",
        title:"ALICIA BROWN",
        active:isActive2,
    },
    {
        imgage:"../img/dazko/trainer3.png",
        title:"ANNE HENDERSON",
        active:isActive3,
    },
    {
        imgage:"../img/dazko/trainer4.png",
        title:"BRUCE GRAPLER",
        active:isActive4,
    }
]


    

    const activeFunction = (index) => {
        if (index == 0) {
            setActive1(true)
        }
        else if (index == 1){
            setActive2(true)
        } 
        else if (index == 2){
            setActive3(true)
        } 
        else if (index == 3){
            setActive4(true)
        } 
    }

    const inActiveFunction = (index) => {
        if (index == 0) {
            setActive1(false)
        }
        else if (index == 1){
            setActive2(false)
        } 
        else if (index == 2){
            setActive3(false)
        } 
        else if (index == 3){
            setActive4(false)
        } 
    }

    

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
                {trainerList.map((list,i)=>{
                    return ( 
                        <div key={i} 
                        onMouseOver={()=>
                        activeFunction(i)}
                        onMouseLeave={()=>{
                            inActiveFunction(i)
                        }}
                        className={list.active ? `${styles.imageOpen}`:`${styles.imageClose}`}
                         >
                            <img className={styles.trainerImage} src={list.imgage} alt="" />
                            <div className={`${styles.textBox} ${list.active ? `${styles.nameOpen}`:`${styles.nameClose}`}`}>
                            <h3>{list.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>                


                <div className={styles.MoboverlapSection}>
                    <div>
                    <img src="../img/dazko/trainer1.png" alt="" />
                    <div>
                            <div className={styles.mobTextBox}>
                            <h3>Alicia <br /> Brown</h3>
                            <div className={styles.MobTransformdiv}>         
                            </div>
                            </div>
                        </div>
                    </div>

                    <div>
                    <img src="../img/dazko/trainer2.png" alt="" />
                    <div>
                            <div className={styles.mobTextBox}>
                            <h3>Alicia <br /> Brown</h3>
                            <div className={styles.MobTransformdiv}>         
                            </div>
                            </div>
                        </div>
                    </div>

                    <div>
                    <img src="../img/dazko/trainer3.png" alt="" />
                    <div>
                            <div className={styles.mobTextBox}>
                            <h3>Alicia <br /> Brown</h3>
                            <div className={styles.MobTransformdiv}>         
                            </div>
                            </div>
                        </div>
                    </div>

                    <div>
                    <img src="../img/dazko/trainer4.png" alt="" />
                        <div>
                            <div className={styles.mobTextBox}>
                            <h3>Alicia <br /> Brown</h3>
                            <div className={styles.MobTransformdiv}>         
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
        </section>
    )
}
export default Trainer;