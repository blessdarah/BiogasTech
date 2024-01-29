import React from 'react';
import {  Dropdown } from 'antd';


import '../assets/index.css'
import { DownOutlined } from '@ant-design/icons';

export const Navbar = () => {

    
const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
];



  return (   <>
        
        <span className='active' style={{marginLeft:'8px', marginRight:'8px'}}>Home</span>
        <Dropdown
            menu={{
                items,
            }}
            placement="bottom"
            arrow={{
                pointAtCenter: true,
            }}
        >
           
            <span className='default' style={{marginLeft:'12px', marginRight:'12px'}}>Products</span>
            
        </Dropdown>
            <DownOutlined style={{width:'9px',marginLeft:'-8px',marginTop:'18px',display:'absolute',marginRight:'4px'}}  />



     
            <span className='default' style={{marginLeft:'12px', marginRight:'12px'}}>About</span>
            

        
            

        
            <span className='default' style={{marginLeft:'12px', marginRight:'12px'}}>Support</span>
            
    </>)
};