
// import styles from '../styles/Home.module.css';
import styles from '../styles/index.module.css';
import headerstyle from '../styles/1stnavbar.module.css'
import Main from './main.js';
import SecNavbar from './2ndnavbar.js';
import Scrollbarmain from './scrolbar.js';
import News from './new.js';
import Headersec from './1stnavbar.js'
import Sidebar from './sidebar';
// import HorizontalScrollBar from './exp.js'
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Divider } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
 const[value,setValue]=useState('Home')
  let obj={
    'Home':['FANTASY','LIVE','LEADERBOARD','INSTRUCTIONS','VIDEOS','MY TEAMS','HELP & SUPPORT','HELP & SUPPORT','PRIVACY POLICY'],
    'Series':['Series','...','...','...','...','...','...','...','...'],
    'Ranking':['Ranking','...','...','...','...','...','...','...','...'],
    'Blogs':['Blogs','...','...','...','...','...','...','...','...'],
    'News':['News','...','...','...','...','...','...','...','...'],
    'How to Play':['How to Play','...','...','...','...','...','...','...','...']
  }
  let clickhandler=(e)=>{console.log("button clicked and label is: ",e.value)}
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className={styles.home}>
      <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500&display=swap');
            body {
              margin: 0;
              font-family: 'Plus Jakarta Sans';
            }
          `}</style>
      <Layout className={styles.home1}>
        
        <Sider
          theme='light'
          breakpoint="lg"
          collapsedWidth="0"
          collapsedheight={10}
          // below={false}
          width={150}
          style={{background:'transparent',height:'auto'}}
          // onClick={clickhandler}
        >
          <Menu className={styles.Menu} theme="light" mode="inline">
            <Menu.Item key='1' type='button' onClick={e=>{setValue('Home')}}>Home</Menu.Item>
            <Menu.Item key='2' onClick={e=>{setValue('Series')}}>Series</Menu.Item>
            <Menu.Item key='3' onClick={e=>{setValue('Ranking')}}>Ranking</Menu.Item>
            <Menu.Item key='4' onClick={e=>{setValue('Blogs')}}>Blogs</Menu.Item>
            <Menu.Item key='5' onClick={e=>{setValue('News')}}>News</Menu.Item>
            <Menu.Item key='6' onClick={e=>{setValue('How to Play')}}>How to Play</Menu.Item>
          </Menu>
          <Divider className={styles.divider}/>
          <Menu className={styles.menu}
            theme="light"
            mode="inline"
            items={obj[value].map(
              (item, index) => ({
                key: index+1,
                label: item,
              }),
            )}
            // onClick={clickhandler}
          />
          
        </Sider>
        <Layout>
          <Header className={headerstyle.Header}> 
              <div className={headerstyle.header_1stnavbar_subdiv1}>
                  <div className={headerstyle.MainLogodiv} >
                      <div className={headerstyle.imgcontainer}> 
                          <img className={headerstyle.logoimg} src='/inEle1.svg'/>
                      </div>
                      {/* <img src='/Vector14Stroke.svg' /> */}
                      <div className={headerstyle.imgcontainer2}> {/*height: '54px' */}
                          <img className={headerstyle.logoimg} src='/Vector13Stroke.svg' />
                      </div>
                      {/* <img src='/en.svg'/> */}
                      <div className={headerstyle.imgcontainer3}> {/*width: '46.26px' */}
                          <img className={headerstyle.logoimg} src='/en1.svg'/>
                      </div>
                      {/* <img src='/Ele.svg'/> */}
                      {/* <img src='/inEle.svg'/> */}
                  </div>
              </div>
              <div className={headerstyle.header_1stnavbar_subdiv2}>
                  <div className={headerstyle.header_1stnavbar_subdiv2_button}>
                      <a type='button' onClick={clickhandler} className={headerstyle.button}>
                      <text className={headerstyle.text}>Login</text>
                      </a>
                  </div>
                  <div className={headerstyle.header_1stnavbar_subdiv2_button}>
                      <a type='button' onClick={clickhandler} className={headerstyle.button}>
                      <text className={headerstyle.text}>Create Account</text>
                      </a>
                  </div>
              </div>

          </Header>       
          <Content className={styles.content}>
            <div className={styles.content_matchcarddiv}>
                <Scrollbarmain className={styles.matchcarddiv_matchcardlist}/>
            </div>
            <News/>
          </Content>
        </Layout>
      </Layout>
      <Layout className={styles.home2}>
        <div>
          <Main/>
          {/* <Headersec/> */}
        </div>
      </Layout>
    </Layout>
  );
};
export default App;
// #components-layout-demo-responsive .logo {
//   height: 32px;
//   margin: 16px;
//   background: rgba(255, 255, 255, 0.2);
// }


