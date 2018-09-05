import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import './App.css';
class App extends Component {
	state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
  	const { visible, loading } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src="./images/logo.png" className="logo"/>
          <span className="logo-title">游戏交易平台</span>
          <span type="primary" onClick={this.showModal} className="login">立即登录</span>
        <Modal visible={visible} title="登录" onOk={this.handleOk} onCancel={this.handleCancel}
          footer={[
            // <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
             登录
            </Button>,
          ]}
        >
          用户名:<input type="text" name="username"/>
          
         密码:<input type="password" name="pwd"/>
        </Modal>
        </header>
      </div>
    );
  }
}

export default App;
