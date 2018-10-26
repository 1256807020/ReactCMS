import React from 'react'
import { Menu, Icon } from 'antd';
import './index.less'
import MenuConfig from '../../config/menuConfig'
// 注意MenuConfig的位置
const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    // var style = {
    //   backgroundColor: 'red'
    // }
    return (
      // <div style={style}>NavLeft</div>
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>React CMS</h1>
        </div>
        <Menu theme='dark'>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
export default NavLeft