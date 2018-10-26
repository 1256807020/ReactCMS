import React from 'react';
import { Row, Col } from "antd"
import './index.less'
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount () {
    this.setState({
      userName: '河畔一角'
    })
  }
  render () {
    return (
      <div className="header">
        <Row className="header-top">

          <Col span="6" className="logo">
            <img src="/assets/logo-ant.svg" alt="" />
            <span>IMooc 通用管理系统</span>
          </Col>

          <Col span='18'>
            <span>欢迎，{this.state.userName}</span>
            <a href="https://github.com">退出</a>
          </Col>
        </Row>

        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
              </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt="" />
            </span>
            <span className="weather-detail">
              {this.state.weather}
            </span>
          </Col>
        </Row>

      </div>
    )
  }
}
export default Header