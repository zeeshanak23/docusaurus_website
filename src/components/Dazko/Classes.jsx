import React, { useState } from 'react';
import styles from '../../css/Clases.module.css'
import { ArrowRightOutlined }  from '@ant-design/icons'

const Classes = () => {

    const [isActive1,setActive1]=useState(false);
    const [isActive2,setActive2]=useState(false);
    const [isActive3,setActive3]=useState(false);
    
    const onHover = (index) => {
        console.log(index)
        if (index == 0) {
            setActive1(true)
        } else if (index == 1) {
            setActive2(true)
        } else if (index == 2) {
            setActive3(true)
        }
    }

    const classItem = [{
        image:"/img/dazko/class1.webp",
        title:"body builder",
        active:isActive1,
        price:"$100"
    },
    {
        image:"/img/dazko/class2.webp",
        title:"weight lifting",
        active:isActive2,
        price:"$100"
    },
    {
        image:"/img/dazko/class3.webp",
        title:"cardio",
        active:isActive3,
        price:"$100"    
    }
]

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
}

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
}


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