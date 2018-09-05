import React,{Component} from 'react';
import App from '../App';
import { Select,Radio } from 'antd';
import Footer from './fooetr';
require('../css/indexof.css');

const Option = Select.Option;
const provinceData = ['广东区', '西南区','陕西区','杭州区'];
const cityData = {
    广东区: ['广东一', '广东二', '广东三','广东四','广东五','广2', '广东3', '广东8','广东1'],
    西南区: ['西南一', '西南二', '西南三'],
    陕西区: ['陕西一', '陕西二', '陕西三'],
    杭州区: ['杭州一', '杭州二', '杭州三','杭州四'],
};
class Indexof extends Component{
    state = {
        cities: cityData[provinceData[0]],
        secondCity: cityData[provinceData[0]][0],
      }
    
      handleProvinceChange = (value) => {
        this.setState({
          cities: cityData[value],
          secondCity: cityData[value][0],
        });
      }
    
      onSecondCityChange = (value) => {
        this.setState({
          secondCity: value,
        });
      }
    render(){
        const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
        const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
        return(
            <div id="indexof">
                <App></App>
                <div className="shangping">
                    <div className="shangping-xiangqing">
                        <img src="./images/产品主图 .jpg" className="changping-zhutu"/>
                        <div className="shangping-right">
                            <h4>DNF金币</h4>
                            <span className="span-1">全网最低</span><span className="span-1">自动秒发</span><span className="span-1">安全快捷</span><span className="span-1">24小时发货</span>
                            <div className="price">
                                价格：
                            </div>
                            <div className="daqu">
                            <Select defaultValue={provinceData[0]} style={{ width: 140 }} onChange={this.handleProvinceChange} className="dauq-aid">
                                {provinceOptions}
                            </Select>
                            <Select value={this.state.secondCity} style={{ width: 140 }} onChange={this.onSecondCityChange} className="dauq-aid">
                                {cityOptions}
                            </Select>
                            <Radio.Group defaultValue="a" buttonStyle="solid" className="golb">
                                <Radio.Button value="a" className="golb-1 glob-0">1000万</Radio.Button>
                                <Radio.Button value="b" className="golb-1">2000万</Radio.Button>
                                <Radio.Button value="c" className="golb-1">3000万</Radio.Button>
                                <Radio.Button value="d" className="golb-1">1亿</Radio.Button>
                            </Radio.Group>
                            <button className="liji">立即购买</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="liucheng">
                    <p className="liucheng-1">购买流程</p>
                    <img src="./images/流程图.png" className="liucheng-2"/>
                    <p className="liucheng-1">商品介绍</p>
                    <img src="./images/商品.jpg" className="liucheng-2" alt="详细介绍"/>
                   <div className="wenti">
                    <img src="./images/常见问题.jpg"/>
                   </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
export default Indexof;