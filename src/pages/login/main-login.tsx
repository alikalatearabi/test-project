import React from 'react';
import {Button, Checkbox, Col, Form, Input} from "antd";
import {BiLogoGoogle} from "react-icons/bi";
import {AiFillGithub} from "react-icons/ai";
import {FiSmartphone} from "react-icons/fi";
import {useNavigate} from 'react-router-dom'

const MainLogin = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()

    return (
        <div>
            <div style={{
                background: 'white',
                padding: '35px',
                borderRadius: '10px',
                fontFamily: 'Inter',
                height: '80%'
            }}>
                <div>
                    <p style={{fontSize: '30px', margin: '0 0 10px 0'}}>Login</p>
                    <span style={{color: '#4E5D78'}}>Welcome back! Please enter your details.</span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #F3F3F3',
                    padding: '10px 25px',
                    borderRadius: '5px',
                    marginTop: '10px',

                }}>
                    <BiLogoGoogle style={{color: '#377DFF', fontSize: '20px', marginRight: '5px'}}/>
                    <span style={{fontSize: '14px'}}>Sign in with Google</span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #F3F3F3',
                    padding: '10px 25px',
                    borderRadius: '5px',
                    marginTop: '10px',

                }}>
                    <AiFillGithub style={{color: '#377DFF', fontSize: '20px', marginRight: '5px'}}/>
                    <span style={{fontSize: '14px'}}>Sign in with Github</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <span style={{
                                width: '50px',
                                height: '1px',
                                background: '#F3F3F3',
                                marginRight: '5px'
                            }}></span>
                    <p>or Sign in with Email</p>
                    <span
                        style={{width: '50px', height: '1px', background: '#F3F3F3', marginLeft: '5px'}}></span>
                </div>
                <div style={{fontFamily: 'Inter'}}>
                    <Form
                        form={form}
                        layout={'vertical'}
                    >
                        <Form.Item label={'Email'} name={'email'}>
                            <Input placeholder="Enter your email"/>
                        </Form.Item>
                        <Form.Item label={'Password'} name={'password'}>
                            <Input
                                placeholder="Enter your password"
                                type="password"
                            />
                        </Form.Item>
                    </Form>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Checkbox>Remember me</Checkbox>
                    <p style={{color: '#377DFF', fontWeight: '700', cursor: 'pointer'}}>Forgot Password </p>
                </div>
                <Button
                    onClick={() => navigate('/twostep')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#3671FE',
                        color: 'white',
                        borderRadius: '10px',
                        width: '100%'
                    }}>
                    <p>Login</p>
                </Button>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }}
                     onClick={() => navigate('/signin')}
                >
                    <p>Not registered yet? <span style={{color: '#377DFF'}}>Create an Account</span></p>
                </div>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px',
                border: '1px solid #B0B7C3',
                borderRadius: '10px',
                padding: '10px'
            }}
                 onClick={() => navigate('/single')}
            >
                <FiSmartphone style={{fontSize: '20px'}}/>
                <span style={{marginLeft: '10px', fontWeight: '500'}}>Single Sign-On (SSO)</span>
            </div>
        </div>
    )
        ;
};

export default MainLogin;