import { DownloadOutlined } from '@ant-design/icons';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainNavbar from './mainnavbar.js';
import SecNavbar from './2ndnavbar.js';
import Scrollbarmain from './scrolbar.js';
import News from './new.js';
import Exp from './exp.js'
// import HorizontalScrollBar from './exp.js'

export default function Home() {
  return (
    <div style={{width:'100vw',height:'100vh'}}>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500&display=swap');
      body {
        margin: 0;
        font-family: 'Plus Jakarta Sans';
      }

    `}</style>
      <div className={styles.mainnavbardiv}>
        <div  style={{display:'flex',position:'absolute',width:'86.11vw',height: '54px',top: '33px',left: '6.94vw',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',width: '68.54vw',height: 'auto',justifyContent: 'space-between'}}>
            <div style={{position: 'relative',width: '11.5vw',height: '54px',left: '0',top: '0',display: 'flex',flexdirection: 'row'}}>
              <div className={styles.imgcontainer}> 
                <img className={styles.logoimg} src='/inEle1.svg'/>
              </div>
              {/* <img src='/Vector14Stroke.svg' /> */}
              <div className={styles.imgcontainer2}> {/*height: '54px' */}
                <img className={styles.logoimg} src='/Vector13Stroke.svg' />
              </div>
              {/* <img src='/en.svg'/> */}
              <div className={styles.imgcontainer3}> {/*width: '46.26px' */}
                <img className={styles.logoimg} src='/en1.svg'/>
              </div>
              {/* <img src='/Ele.svg'/> */}
              {/* <img src='/inEle.svg'/> */}
            </div>        
            <MainNavbar/> 
          </div>
          <div style={{position: 'relative'}}>
            <div className={styles.button}>
              <text className={styles.text}>Create Account</text>
            </div>
          </div>
        </div>
      </div>
      <SecNavbar/>
      <Scrollbarmain/>
      <News/>
      {/* <HorizontalScrollBar/> */}
      
    </div>
  )
}


