import SecNavbar from './2ndnavbar';
import headerstyle from '../styles/1stnavbar.module.css'
import mainstyle from '../styles/main.module.css'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Scrollbarmain from './scrolbar.js'
import News from './new.js';
const { Header, Content, Footer } = Layout;
const App = () => {
    let clickhandler=()=>{console.log("button clicked")}
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      {/* <Header>
        <div className="logo" />
        <Menu 
            theme="light"
            mode="horizontal"
            items={['Home','Series','Ranking','Blogs','News','How to Play'].map(
              (item, index) => ({
                key: index+1,
                label: item,
              }),
            )}
          />
      </Header> */}
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
            <Menu className={headerstyle.Menu}
                theme="light"
                mode="horizontal"
                items={['Home','Series','Ranking','Blogs','News','How to Play'].map(
                (item, index) => ({
                    key: index+1,
                    label: item,
                }),
                )}
            />
            <Menu className={headerstyle.Menu2}
                border-bottom='none'
                theme="light"
                mode="horizontal"
                items={['Home','Series','Ranking','Blogs','News','How to Play','Login'].map(
                (item, index) => ({
                    key: index+1,
                    label: item,
                }),
                )}
            />
              <div className={headerstyle.header_1stnavbar_subdiv2}>
                  <div className={headerstyle.header_1stnavbar_subdiv2_buttondiv1}>
                      <a type='button' onClick={clickhandler} className={headerstyle.button}>
                      <text className={headerstyle.text}>Login</text>
                      </a>
                  </div>
                  <div className={headerstyle.header_1stnavbar_subdiv2_buttondiv2}>
                      <a type='button' onClick={clickhandler} className={headerstyle.button}>
                      <text className={headerstyle.text}>Create Account</text>
                      </a>
                  </div>
              </div>

          </Header>
      <Content className={mainstyle.content}>
        <SecNavbar/>
        <Scrollbarmain/>
        <News/>
      </Content>
      
    </Layout>
  );
};
export default App;
// .site-layout-content {
//   min-height: 280px;
//   padding: 24px;
// }
// #components-layout-demo-top .logo {
//   float: left;
//   width: 120px;
//   height: 31px;
//   margin: 16px 24px 16px 0;
//   background: rgba(255, 255, 255, 0.3);
// }
// .ant-row-rtl #components-layout-demo-top .logo {
//   float: right;
//   margin: 16px 0 16px 24px;
// }