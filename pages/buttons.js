import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space } from 'antd';
import { useState } from 'react';
const Button = () => {
  const [size, setSize] = useState('large'); // default is 'middle'

  return (
    <>
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
            Create Account
        </Button>
          
      
    </>
  );
};
export default Button;