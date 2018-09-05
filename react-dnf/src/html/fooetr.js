import React,{Component} from 'react';
require("../css/footer.css");
class Footer extends Component{
    render(){
        return(
            <div id="footer">
                <div className="baozheng">
                    <div className="footer-1 f1">
                        <img src="./images/f1.png"/>
                        <h2>诚信安全</h2>
                        <span>权威认证，安全便捷</span>
                    </div>
                    <div className="footer-1 f2">
                        <img src="./images/f2.png"/>
                        <h2>无货赔付</h2>
                        <span>真实商品，无货包赔</span>
                    </div>
                    <div className="f3 footer-1">
                        <img src="./images/f3.png"/>
                        <h2>闪电发货</h2>
                        <span>自动交易，现货妙发</span>
                    </div>
                    <div className="f4 footer-1">
                        <img src="./images/f4.png"/>
                        <h2>商城品质</h2>
                        <span>按需购买，自由灵活</span>
                    </div>
                    <div className="f4 footer-1">
                        <img src="./images/f5.png"/>
                        <h2>7X24小时</h2>
                        <span>专属客服，贴心服务</span>
                    </div>
                </div>
                <div className="footer-2">
                    
                    <ul className="lianjie">
                        <li>友情链接：</li>
                        <li><a href="">人人捕鱼</a></li>
                        <li>|</li>
                        <li><a href="">9891游戏币销售</a></li>
                        <li>|</li>
                        <li><a href="">游戏达人</a></li>
                        <li>|</li>
                        <li><a href="">iPad游戏网</a></li>
                        <li>|</li>
                        <li><a href="">比武招亲官网</a></li>
                        <li>|</li>
                        <li><a href="">纯情游戏</a></li>
                        <li>|</li>
                        <li><a href="">Legames</a></li>
                        <li>|</li>
                        <li><a href="">灵魂回响</a></li>
                        <li>|</li>
                        <li><a href="">卡牌游戏</a></li>
                        <li>|</li>
                        <li><a href="">专业玩家网</a></li>
                        
                    </ul>
                    <ul className="footer-about">                       
                        <li><a href="">关于我们</a></li>
                        <li>|</li>
                        <li><a href="">联系我们</a></li>
                        <li>|</li>
                        <li><a href="">人才招聘</a></li>
                        <li>|</li>
                        <li><a href="">帮助中心</a></li>
                    </ul>
                    <p>Copyright  © 9891游戏交易平台  备案号 : 豫ICP备17016426号-1  网络文化经营许可证 : 豫网文[2017]3486-067号  联系邮箱 : 9891@9891.com</p>
                    <div className="footer-3">
                        <img src="../images/foot_01.png"/> 
                        <img src="../images/foot_02.png"/>
                        <img src="../images/foot_03.png"/>
                        <img src="../images/foot_04.png"/>
                        <img src="../images/foot_05.png"/>
                    </div>
                </div>
            </div>
        )
            
        
    }
}{}
export default Footer;