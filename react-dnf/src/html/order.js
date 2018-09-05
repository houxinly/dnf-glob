import React,{Component} from 'react';
import App from '../App';
import Footer from './fooetr';
import { Modal, Input } from 'antd';
require('../css/order.css');
class order extends Component{
    state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
    render(){
        return(
            <div>
                <App></App>
                <div className="order">
                    <div className="tisi">
                    <img src="./images/tishi_new.png"/>
                        <p>1.邮寄发货,游戏官方默认收取5%邮寄手续费，将由您承担。</p>
                        <p>2.如您的角色带有特殊符号，请务必复制输入. <span type="primary" onClick={this.showModal} className="bangzhu">如何复制DNF角色名</span>
                        <Modal title="如何复制DNF角色名" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                            <p>第一步：打开游戏人生主页<a href="http://igame.qq.com/login.php?u1=http%3A%2F%2Figame.qq.com%2Fcenter%2Findex.php" target="_back">igame.qq.com</a>,登录后选择角色管理</p>
                            <p>第二步：复制昵称，填写到订单确定页(收货角色名)</p>
                            <p>第三步：粘贴昵称至收货角色名</p>
                        </Modal></p>
                        <p>3.非高峰期，金币将在5-20分钟内发送至您的邮箱,请耐心等待.如有问题，可随时联系订单客服.</p>
                    </div>
                    <div className="merchandise">
                        <img src="./images/提交订单 拷贝.png"/><span>商品信息</span>
                        <div className="merch">
                        
                        </div>
                        
                    </div>
                    <div className="order-info">
                        <img src="./images/填写.png"/><span>订单信息</span>
                        <div className="order-infotell">
                            <label>手机号码：</label>
                            <input  id="tell" placeholder="请输入电话号码"/>
                            <label>收货角色：</label>
                            <input placeholder="请输入收货角色名"/>
                            <img src="./images/问号.png"/><span type="primary" onClick={this.showModal} className="bangzhu">如何复制DNF角色名</span>
                        </div>
                    <div className="pay-way">
                        <img src="./images/付款.png"/><span>支付方式</span>
                        <img src="./images/微信.png" className="pay pay-1"/>
                        <img src="./images/支付宝.png " className="pay"/>
                        <label className="pay-2">应付金额：</label>
                        <button className="pay-3">立即付款</button>
                    </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default order;