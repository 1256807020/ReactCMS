import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './Admin'
import Buttons from './pages/ui/button'
import NoMatch from './pages/nomatch'
export default class IRouter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <HashRouter>

        <App>
          <Route path="/login" component={Login} />
          {/* 非常奇怪，写成这种<Route path="/admin" component={Admin} ></Route>形式，不报错，但是页面啥也渲染不出来 */}
          {/* 一定要写成上面那种格式 */}
          {/* <Route path="/admin" component={Admin} render={()=>{}}/>写成这种，是返回一个空对象，不对的，不需要大括号 */}
          <Route path="/admin" render={() =>
            // <Admin>
            //   <Route path='/admin/ui/buttons' component={Buttons} />
            //   <Route component={NoMatch} />
            // </Admin>
            <Admin>
              <Route path="/admin/ui/buttons" component={Buttons} />
              <Route component={NoMatch} />
            </Admin>
          } />

          <Route path='/order/detail' component={Login} />
          <Switch></Switch>
        </App>

      </HashRouter>
    )
  }
}