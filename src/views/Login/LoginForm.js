import React, { Component,Fragment } from 'react'
import { Form, Input, Button, Row, Col,message } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import {Login,GetCode} from "../../api/account";
import {validate_email} from '../../utils/validate';

class LoginForm extends Component{
    constructor() {
        super()
        this.state = {
            username:"",
            codeValue:"",
            code_button_state:false,
            code_button_loading:false,
            code_button_text:"获取验证码"
        }
    }

    //获取验证码
    getCode = () => {
        if(!this.state.username){
            message.warning('用户名不能为空！',1);
            return false;
        }
        this.setState({
            code_button_loading:true,
            code_button_text:"发送中"
        })
        const requestData = {
            username:this.state.username,
            module:"login",
        }
        GetCode(requestData).then(response =>{
            //执行倒计时
            this.getCount()
        }).catch(error=>{
            this.setState({
                code_button_loading:true,
                code_button_text:"重新获取"
            })
        })
    }

    /**倒计时 */
    getCount = () => {
        let sec = 60;
        let timer = null;
        
        this.setState({
            code_button_state:true,
            code_button_loading:false,
            code_button_text:`${sec}S`
        })
        timer = setInterval(()=>{
            sec--;
            if(sec<=0){
                this.setState({
                    code_button_text:`重新获取`,
                    code_button_state:false
                })
                clearInterval(timer);
                return false; 
            }
            this.setState({
                code_button_text:`${sec}S`
            })
        },1000)
    }


    getNameValue = (e) =>{
        let nameValue = e.target.value;
        this.setState({
            username:nameValue
        })
    }

    //登录
    onFinish = (value) => {
        Login().then(response => {
            console.log(response)
        }).catch(error =>{
            console.log(error)
        })
        console.log('this.value' + value)
    }

    toggleForm = () => {
        this.props.switchForm("register")
    }

    render(){
        const {username,code_button_state,code_button_loading,code_button_text} = this.state;
        const _this = this;
        return (
            <Fragment>
                <div>
                    <div className="form-header">
                        <h4 className="column">登录</h4>
                        <span onClick={this.toggleForm}>账号注册</span>
                    </div>
                    <div className="form-content">
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                        >
                            <Form.Item name="username" rules={
                                    [
                                        { required: true, message: '邮箱不能为空！' },
                                        {type:"email",message:"邮箱格式不正确"}
                                        // ( {getFieldValue} ) => ({
                                        //     validator(rule,value){
                                        //         if(validate_email(value)){
                                        //             return Promise.resolve()
                                        //         }
                                        //         return Promise.reject("邮箱格式不正确！");
                                        //     }
                                        // })
                                    ]
                                }>
                                <Input value={username} onChange={this.getNameValue} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: '请输入你的密码!' }]}>
                                <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Password" />
                            </Form.Item>
                            <Form.Item name="code" rules={[{ required: true, message: '请输入你的验证码!' }]}>
                                <Row gutter={13}>
                                    <Col span={15}>
                                        <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Code" />
                                    </Col>
                                    <Col span={9}>
                                        <Button type="danger" block loading={code_button_loading} onClick={this.getCode} disabled={code_button_state}>{code_button_text}</Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" block >登录</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default LoginForm