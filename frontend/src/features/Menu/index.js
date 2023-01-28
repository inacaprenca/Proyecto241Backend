import React from 'react'
import { MenuOutlined } from '@ant-design/icons';
import './menu.css'
import MenuList from './menuList'
import { Popover } from 'antd';
export const App = () => {
    const [showDrawer, setShowDrawer] = React.useState(false);
    const menuHandler = () => {
        setShowDrawer(!showDrawer)
        console.log(showDrawer)
    }
    return (
        <>
       
             <div className="btn-menu" onClick={menuHandler}>
                <div className='btn-menu-circle'>
                    <MenuOutlined />
                </div>
                MENU
            </div>
            <MenuList showDrawer={showDrawer} />

        </>
    )
}

export default App;