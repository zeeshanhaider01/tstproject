export default function Home() {
    return (
      <div className={styles.home}>
          <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500&display=swap');
          body {
            margin: 0;
            font-family: 'Plus Jakarta Sans';
          }
        `}</style>
  
          <Header/>
          {/* <SecNavbar/> */}
          <div style={{backgroundColor: "transparent", position:'relative',top:'66px'}}>
            <div>
              <Scrollbarmain />
            </div> 
          </div>
          <News/>
          <div style={{position:'fixed',zIndex:'1',top:'0px',left:'0px'}}>
            <Sidebar />
          </div>
      </div>
    )
  }