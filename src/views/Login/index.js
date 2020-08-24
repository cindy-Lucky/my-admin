import React from 'react';
import './index.scss';
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'



class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            formType:'login'
        }
    }

    switchForm = (value)=>{
        console.log(value)
        this.setState({
            formType:value
        })
    }

    render() {
        return (
            <div className="form-wrap">
                <div>
                    {
                    this.state.formType === 'login' 
                    ? <LoginForm switchForm={this.switchForm}></LoginForm> 
                    : <RegisterForm switchForm={this.switchForm}></RegisterForm>
                    }
                </div>
            </div>
        )
    }
}
export default Index