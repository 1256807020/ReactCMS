import React from 'react'
import Child from './Child'
import { Button, Input } from 'antd'
import './index.less'
class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '生命周期函数',
      count: 0
    }
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    return (
      < div className='content'>
        <Input></Input>
        <Button onClick={this.handleAdd} type="primary">AntD点击一下</Button>
        <button onClick={this.handleAdd}>点击一下</button>
        <p>{this.state.title}</p>
        <p>{this.state.count}</p>
        <Child name={this.state.count}></Child>
      </div >
    )
  }
}
export default Life