import {Row,Col} from 'antd';
import styles from '../styles/Home.module.css'
function SecNavbar(){
    return(
        <div className={styles.navbar2}>
            <Row className={styles.navbarrow} gutter={{xs: 8,sm: 16,md: 24,lg: 23}}>
                <Col className={styles.secnavparent}><a className={styles.secnavchild}>FANTASY</a></Col>
                <Col className={styles.secnavparent}><a className={styles.secnavchild}>LIVE</a></Col>
                <Col className={styles.secnavparent}><a className={styles.secnavchild}>LEADERBOARD</a></Col>
                <Col className={styles.secnavparent}><a className={styles.secnavchild}>INSTRUCTIONS</a></Col>
                <Col className={styles.secnavparent}><a className={styles.secnavchild}>VIDEOS</a></Col>
                <Col className={styles.secnavparent}><a className={styles.secnavchild}>MY TEAMS</a></Col>
                <Col className={styles.secnavparent}><a className={styles.secnavchild}>HELP & SUPPORT</a></Col>
                <Col className={styles.secnavparent}><a className={styles.secnavchild}>ABOUT US</a></Col>
                <Col className={styles.secnavparent}><a className={styles.secnavchild}>PRIVACY POLICY</a></Col>
            </Row>
        </div>
        
    )
}
export default SecNavbar;