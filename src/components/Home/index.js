import React from 'react'
import './index.less'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className='home-wrap'>ReactCMS后台管理系统</div>
    )
  }
}
export default Home