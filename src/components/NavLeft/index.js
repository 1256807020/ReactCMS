import React from 'react'
import { Menu, Icon } from 'antd';
// import { NavLink } from 'react-router-dom'
import './index.less'
import MenuConfig from '../../config/menuConfig'
// 注意MenuConfig的位置
const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount () {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    })
  }
  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      console.log(item)
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
      {item.title}
        {/* <NavLink to={item.key}>{item.title}</NavLink> */}
      </Menu.Item>
    })
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
          {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu> */}
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}
export default NavLeft