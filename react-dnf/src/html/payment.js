import React,{Component} from 'react';
import App from '../App';
import Footer from './fooetr';
import { Tooltip, Button } from 'antd';
require('../css/payment.css');
class  Payment extends Component{
    render(){
        return(
            <div>
                <App></App>
                <div className="payment">
                    <img src="./images/right.png" className="payment-1"/>
                    <span className="payment-2">订单支付成功!</span>
                    <div className="payment-3">
                        <p>订单号：88887415GGH555</p>
                        <p>地下城与勇士/广东区/广东一区</p>
                        <p className="payment_1"><img src="./images/问号.png"/>温馨提示：金币将在5-20分钟内发送至<span>我是大魔王</span>邮箱内，
                        高峰期可能会有延迟，请耐心等待!<br/>如有疑问，可联系订单客服。
                        </p>
                    </div>
                    <div className="payment-4">
                    {/* <button>再来一单</button>
                    <button className="payment_4">客服QQ群</button>
                    <button className="payment_4">群二维码</button> */}
                    <Tooltip placement="bottomLeft">
                        <Button>再来一单</Button>
                    </Tooltip>
                    <Tooltip placement="bottomLeft" title="2545568">
                        <Button>客服QQ群</Button>
                    </Tooltip>
                    <Tooltip placement="bottomLeft" title="Prompt Text">
                        <Button>群二维码</Button>
                    </Tooltip>
                    </div>
                    <div className="payment-5">
                        <span>购买流程</span>
                        <img src="./images/流程图.png"/>
                    </div>
                    
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default Payment;