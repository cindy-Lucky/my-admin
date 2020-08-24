import React,{Fragment} from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';


class RegisterForm extends React.Component{
    constructor(){
        super()
        this.state={
            
        }
    }

    onFinish = (values) => {
        console.log('this.value' + values)
    }

    toggleForm = ()=>{
        this.props.switchForm('login')
    }


    render(){
        return(
            <Fragment>
            <div>
                <div className="form-header">
                    <h4 className="column">注册</h4>
                    <span onClick={this.toggleForm}>登录账号</span>
                </div>
                <div className="form-content">
                        <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item name="username"
                                   rules={[
                                       {required: true, message: '请输入你的用户名!' },
                                       {type:'email',message:'邮箱格式不正确！'}]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: '请输入你的密码!' }]}>
                            <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Password" />
                        </Form.Item>
                        <Form.Item name="btnPassword" rules={[{ required: true, message: '请再次输入你的密码!' }]}>
                            <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Password" />
                        </Form.Item>
                        <Form.Item name="code" rules={[{ required: true, message: '请输入你的验证码!' }]}>
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Code" />
                                </Col>
                                <Col span={9}>
                                    <Button type="danger" block>获取验证码</Button>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>注册</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Fragment>
        )
    }

}

export default RegisterForm