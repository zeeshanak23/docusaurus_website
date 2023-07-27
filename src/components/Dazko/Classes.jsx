import React, { useState } from 'react';
import styles from '../../css/Clases.module.css'
import { ArrowRightOutlined }  from '@ant-design/icons'

const Classes = () => {

    const [isOpen1,setOpen1]=useState(false);
    const [isOpen2,setOpen2]=useState(false);
    const [isOpen3,setOpen3]=useState(false);

    const inActiveFunction = (index) => {
        if (index == 0) {
            setOpen1(false)
        }
        else if (index == 1){
            setOpen2(false)
        } 
        else if (index == 2){
            setOpen3(false)
        }
    }
    
    const activeFunction = (index) => {
        if (index == 0) {
            setOpen1(true)
        }
        else if (index == 1){
            setOpen2(true)
        } 
        else if (index == 2){
            setOpen3(true)
        } 
    }

    const classItem = [{
        image:"/img/dazko/class1.webp",
        title:"body builder",
        active:isOpen1,
        price:"$100"
    },
    {
        image:"/img/dazko/class2.webp",
        title:"weight lifting",
        active:isOpen2,
        price:"$100"
    },
    {
        image:"/img/dazko/class3.webp",
        title:"cardio",
        active:isOpen3,
        price:"$100"    
    }
]



    return (
      <section className={styles.classesSection}>
        <div className={styles.heading}>
            <h1>
                Our classes
                <h2>DAZKO <div> WORKOUT CLASSES</div></h2>
            </h1>
            <div className={styles.classContainer}>
                {classItem.map((list,i)=>{
                    return (
                        <div className={styles.classImage}>
                        <div  onMouseOver={()=>
                        activeFunction(i)}
                        onMouseLeave={()=>{
                            inActiveFunction(i)
                        }} key={i}>
                            <img src={list.image} alt="" />
                            <div className={`${styles.price} ${list.active ? `${styles.priceOpen}`:`${styles.priceClose}`}`}>
                                {list.price}
                            </div>
                            <h3 className={`${styles.title} ${list.active ? `${styles.titleOpen}`:`${styles.titleClose}`}`}>
                         {list.title}</h3>
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <h5 className={styles.classesBtn}>View all classes <ArrowRightOutlined /></h5>
      </section>
    );
  }

  export default Classes;