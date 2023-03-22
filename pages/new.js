import styles from '../styles/Home.module.css';

function News(){

    return(
        <div className={styles.newsmaindiv}>
            <div className={styles.newsmaindiv_subdiv1st}>
                <div className={styles.newsmaindiv_subdiv1st_newsheadingdiv}>
                    <div className={styles.newsmaindiv_subdiv1st_newsheadingdiv_text}>Today’s News</div>
                </div>
                <div className={styles.newsmaindiv_subdiv1st_imgdiv}>
                    <div className={styles.newsmaindiv_subdiv1st_imgdiv_img}>
                        <img className={styles.newsmaindiv_subdiv1st_imgdiv_img_img} src='/Rectangle6.png' />
                        <div className={styles.newsmaindiv_subdiv1st_imgdiv_textdivmain}>
                            <div className={styles.newsmaindiv_subdiv1st_imgdiv_textdivmain_text1st}>
                            Saleem Khaliq in Abu Dhabi
                            </div>
                            <div className={styles.newsmaindiv_subdiv1st_imgdiv_textdivmain_text2nd_div}>
                                <div className={styles.newsmaindiv_subdiv1st_imgdiv_textdivmain_text2nd_div_text1st}>PCB reiterates stance against moving Asia Cup to neutral venue</div>
                                <div className={styles.newsmaindiv_subdiv1st_imgdiv_textdivmain_text2nd_div_text2nd}> 15 January, 2023.</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className={styles.newsmaindiv_subdiv2nd}>
                <div className={styles.newsmaindiv_subdiv2nd_titlediv}>
                    <div className={styles.newsmaindiv_subdiv2nd_titlediv_text}>Latest Blogs</div>
                </div>
                <div className={styles.newsmaindiv_subdiv2nd_feediv}>
                    <div className={styles.newsmaindiv_subdiv2nd_1stdiv}>
                        <div className={styles.newsmaindiv_subdiv2nd_1stdiv_imgdiv}>
                            <img className={styles.newsmaindiv_subdiv2nd_1stdiv_imgdiv_img} src='/Rectangle7.png'/>
                        </div>
                        <div className={styles.newsmaindiv_subdiv2nd_1stdiv_textdiv}>
                            <div className={styles.newsmaindiv_subdiv2nd_1stdiv_textdiv_1stext}>By Abrar-ul-haq</div>
                            <div className={styles.newsmaindiv_subdiv2nd_1stdiv_textdiv_2ndtext}>Who is going to sing PSL Anthem Season 8?</div>
                            <div className={styles.newsmaindiv_subdiv2nd_1stdiv_textdiv_3rdtext}>Lorem ipsum dolor sit amet consectetur. Suspendisse donec mi egestas duis interdum nulla ipsum.</div>
                        </div>
                    </div>
                    <div className={styles.newsmaindiv_subdiv2nd_2ndtdiv}>
                        <div className={styles.newsmaindiv_subdiv2nd_1stdiv_imgdiv}>
                            <img className={styles.newsmaindiv_subdiv2nd_1stdiv_imgdiv_img} src='/Rectangle7.png'/>
                        </div>
                        <div className={styles.newsmaindiv_subdiv2nd_1stdiv_textdiv}>
                            <div className={styles.newsmaindiv_subdiv2nd_1stdiv_textdiv_1stext}>By Abrar-ul-haq</div>
                            <div className={styles.newsmaindiv_subdiv2nd_1stdiv_textdiv_2ndtext}>Who is going to sing PSL Anthem Season 8?</div>
                            <div className={styles.newsmaindiv_subdiv2nd_1stdiv_textdiv_3rdtext}>Lorem ipsum dolor sit amet consectetur. Suspendisse donec mi egestas duis interdum nulla ipsum.</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default News;