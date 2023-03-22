import { Col, Row } from 'antd';
import styles from '../styles/Home.module.css';

function MainNavbar() {
 
  return(
    <div style={{display:'flex',alignItems:'center'}}>
    <Row gutter={{xs: 8,sm: 16,md: 24,lg: 42}}> {/*lg:49 */}
      <Col className={styles.parent}>
        <a className={styles.child}>HOME</a>
      </Col>
      <Col className={styles.parent}>
        <a className={styles.child}>Series</a>
      </Col>
      <Col className={styles.parent}>
        <a className={styles.child}>Ranking</a>
      </Col>
      <Col className={styles.parent}>
        <a className={styles.child}>Blogs</a>
      </Col>
      <Col className={styles.parent}>
        <a className={styles.child}>News</a>
      </Col>
      <Col className={styles.parent}>
        <a className={styles.child} href="https://nextjs.org">How to play</a>
      </Col>
      <Col className={styles.parent}>
        <a className={styles.child} href="https://nextjs.org">Login</a>
      </Col>
    </Row>
  </div>
  )
}
  

export default MainNavbar;