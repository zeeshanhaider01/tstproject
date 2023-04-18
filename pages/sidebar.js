import styles from '../styles/sidebar.module.css';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;
const Sidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        theme='light'
        breakpoint="lg"
        collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
        width={150}
        style={{background:'blue'}}
      >
        {/* <div className="logo" /> */}
        <Menu className={styles.Menu}
          theme="light"
          mode="inline"
        //   defaultSelectedKeys={['0']}
          items={['Home','Series','Ranking','Blogs','News','How to Play'].map(
            (item, index) => ({
              key: index+1,
              label: item,
            }),
          )}
        />
      </Sider>
      
    </Layout>
  );
};
export default Sidebar;