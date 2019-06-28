import React, {Component} from 'react';
import { Menu } from 'antd';


export default class Navigation extends Component{
    render(){
        return(
            <div className="container mt-5 pt-5">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </div>
        );
    }
}