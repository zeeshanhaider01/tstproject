import styles from '../styles/Home.module.css';
// import styles from '../styles/matchcard.css'

function Matchcard(props){
    return(
        <div className={styles.matchcard}>
            <div className={styles.matchcard__mainheading}>
                <div className={styles.matchcard__mainheading_logo}>
                    <img className={styles.imgclass} src='/T20.png'/>
                </div>
                <div className={styles.matchcard__mainheading_seriesname}>
                    <div className={styles.matchcard__mainheading_seriesname__text}>Pak-Ind Series</div>
                </div>
                <div className={styles.matchcard__mainheading_timediv}>
                    <div className={styles.matchcard__mainheading_time}>00:00:00</div>
                </div>
            </div>
            <div className={styles.matchcard__logosdiv}>
                <div className={styles.matchcard__logosdiv__teamlogo}>
                    <div className={styles.teamimgdiv}><img className={styles.teamimgdiv__img} src='/Vector.png'/></div>
                    <div className={styles.matchcard__logosdiv__teamlogo_title}>PAK</div>
                </div>
                <div className={styles.matchcard__logosdiv__Vsmaindiv}>
                    <div className={styles.matchcard__logosdiv__Vsmaindiv__subdiv}>
                        <div className={styles.matchcard__logosdiv__Vsmaindiv__subdiv__logo}>
                            <img src='/Vector13.png'/>
                            {/* <img src='/Vector14.png'/> */}
                            </div>
                        <div className={styles.matchcard__logosdiv__Vsmaindiv__subdiv__text}>s</div>
                    </div>
                    
                </div>
                <div className={styles.matchcard__logosdiv__teamlogo}>
                    <div className={styles.teamimgdiv}><img className={styles.teamimgdiv__img} src='/Vector2.png'/></div>
                    <div className={styles.matchcard__logosdiv__teamlogo_title}>IND</div>
                </div>
            </div>
            <div className={styles.matchcard__datetime}>
                <div className={styles.matchcard__datetime__time}>7:30 PM</div>
                <div className={styles.matchcard__datetime__date}>saturday, 21<sup>th</sup> Jan 2023</div>
            </div>
            <div className={styles.matchcard__createbtn}>
                <div className={styles.matchcard__createbtndiv}>
                    <div className={styles.matchcard__createbtndiv__btn}>Create your Fantasy team</div>
                </div>
                
            </div>
        </div>
    )
}

export default Matchcard;