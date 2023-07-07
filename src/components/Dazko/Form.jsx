import React from "react";
import styles from "../../css/Form.module.css"

const Form = () =>{
    return (
        <section>
            <div className={styles.formBg}>
                <img src="./img/dazko/formBg.webp" alt="" />
            </div>
            <div className={styles.overlapsForm}>
                <div className={styles.heading}>
                    <h1>GET YOUR BODY MAX INDEX</h1>
                    <h2>WHAT IS YOUR <span>BMI</span></h2>
                </div>
                <div className={styles.formBtn}>
                    <button>Standard</button>
                    <button>Metric</button>
                </div>
                <div className={styles.inputForm}>
                    <div>
                        <h1>
                        your height
                    </h1>
                    </div>
                    <div className={styles.inputFirst}>
                        <input type="text" placeholder="Feet"/>
                        <input type="text" placeholder="Inches"/>
                    </div>
                    <h1 className={styles.secondHeader}>
                        your weight
                    </h1>
                    <input type="text"placeholder="Pounds" />
                    <div className={styles.submitBtn}>
                        <button>compute bmi</button>
                        <button>Pounds</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form;