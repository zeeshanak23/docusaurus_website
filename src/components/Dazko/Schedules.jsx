import styles from "../../css/Schedule.module.css"
import React from "react";

const Schedules = () => {
    return (
        <section>
            <div className={styles.heading}>
                <h1>Schedules</h1>
                <h2>Fitness <span>schedules</span></h2>
            </div>
            <div className={styles.tableSection}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thrusday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>8am-9am</th>
                            <td>Body Building</td>
                            <td>Weight Lifting</td>
                            <td>&nbsp;</td>
                            <td>Yoga</td>
                            <td>Aerobics</td>
                            <td>Cycling</td>
                            <td>Stretching</td>
                        </tr>
                        <tr>
                            <th>10am-11am</th> 
                            <td>Weight Lifting</td>
                            <td>Body Building</td>
                            <td>Cardio</td>
                            <td>Yoga</td>
                            <td>Aerobics</td>
                            <td>Cycling</td>
                            <td>Stretching</td>
                        </tr>	
                        <tr>
                            <th>1pm-2am</th>
                            <td>&nbsp;</td>
                            <td>Weight Lifting</td>
                            <td>Cardio</td>
                            <td>Yoga</td>
                            <td>Aerobics</td>
                            <td>Cycling</td>
                            <td>Stretching</td>
                        </tr>	
                        <tr>
                            <th>3pm-5pm</th>
                            <td>Aerobics</td>

                            <td>Weight Lifting</td>
                            <td>Cardio</td>
                            <td>Yoga</td>
                            <td>Body Building</td>
                            <td>&nbsp;</td>
                            <td>Stretching</td>
                        </tr>	
                        <tr>
                            <th>7pm-9pm</th>
                            <td>Body Building</td>
                            <td>Weight Lifting</td>
                            <td>Cardio</td>
                            <td>&nbsp;</td>
                            
                            <td>Aerobics</td>
                            <td>Cycling</td>
                            <td>Stretching</td>
                        </tr>			
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Schedules;