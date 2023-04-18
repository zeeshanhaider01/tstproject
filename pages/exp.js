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