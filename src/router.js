import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './Admin'
import Buttons from './pages/ui/button'
import Modals from './pages/ui/modals'
import NoMatch from './pages/nomatch'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousels from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import City from './pages/city/index'
import Order from './pages/order/index'
import Common from './common'
import OrderDetail from './pages/order/detail'
import Permission from './pages/permission'
import User from './pages/user'
import BikeMap from './pages/map/bikeMap'
import Bar from './pages/echarts/bar/index'
import Pie from './pages/echarts/pie/index'
import Line from './pages/echarts/line/index'
import Rich from './pages/rich'

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
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route path="/admin/ui/modals" component={Modals} />
                <Route path="/admin/ui/loadings" component={Loadings} />
                <Route path="/admin/ui/notification" component={Notice} />
                <Route path="/admin/ui/messages" component={Messages} />
                <Route path="/admin/ui/tabs" component={Tabs} />
                <Route path="/admin/ui/gallery" component={Gallery} />
                <Route path="/admin/ui/carousel" component={Carousels} />
                <Route path="/admin/form/login" component={FormLogin} />
                <Route path="/admin/form/reg" component={FormRegister} />
                <Route path="/admin/table/basic" component={BasicTable} />
                <Route path="/admin/table/high" component={HighTable} />
                <Route path="/admin/city" component={City} />
                <Route path="/admin/order" component={Order} />
                <Route path="/admin/permission" component={Permission} />
                <Route path="/admin/user" component={User} />
                <Route path="/admin/bikemap" component={BikeMap} />
                <Route path="/admin/charts/bar" component={Bar} />
                <Route path="/admin/charts/pie" component={Pie} />
                <Route path="/admin/charts/line" component={Line} />
                <Route path='/admin/rich' component={Rich} />
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          } />
          <Route path="/common" render={() =>
            <Common>
              <Route path="/common/order/detail/:orderId" component={OrderDetail} />
            </Common>} />
          <Route path='/order/detail' component={Login} />

        </App>

      </HashRouter>
    )
  }
}