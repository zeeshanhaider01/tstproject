import { Alert, Breadcrumb, Layout, Menu, theme } from 'antd';
import headerstyle from '../styles/1stnavbar.module.css'
import styl from '../styles/Home.module.css';
import {UnorderedListOutlined} from '@ant-design/icons';
// import MainMenu from './Menu';

const { Header, Content, Footer } = Layout;
const headersection = () => {
  let clickhandler=()=>{console.log("button clicked")}
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    
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
      
  );
};
export default headersection;

{/* <div className={headerstyle.mainnavbardiv}>
        <div  style={{display:'flex',position:'absolute',width:'86.11vw',height: '54px',top: '33px',left: '6.94vw',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',width: '68.54vw',height: 'auto',justifyContent: 'space-between'}}>
            <div style={{position: 'relative',width: '11.5vw',height: '54px',left: '0',top: '0',display: 'flex',flexdirection: 'row'}}>
              <div className={headerstyle.imgcontainer}> 
                <img className={headerstyle.logoimg} src='/inEle1.svg'/>
              </div>
              
              <div className={headerstyle.imgcontainer2}> 
                <img className={headerstyle.logoimg} src='/Vector13Stroke.svg' />
              </div>
              <div className={headerstyle.imgcontainer3}> 
                <img className={headerstyle.logoimg} src='/en1.svg'/>
              </div>
            </div>        
            <MainNavbar/> 
          </div>
          <div style={{position: 'relative'}}>
            <div className={headerstyle.button}>
              <text className={headerstyle.text}>Create Account</text>
            </div>
          </div>
        </div>
      </div> */}