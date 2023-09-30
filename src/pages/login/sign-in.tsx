import React from 'react';
import {Button, Checkbox, Col, Form, Input} from "antd";
import {BiLogoGoogle} from "react-icons/bi";
import {AiFillGithub} from "react-icons/ai";
import {FiSmartphone} from "react-icons/fi";
import {useNavigate} from 'react-router-dom'

const SignIn = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()

    return (
        <div style={{height: '100%'}}>
            <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '10px',
                fontFamily: 'Inter',
                height: '88%'
            }}>
                <div>
                    <p style={{fontSize: '30px', margin: '0 0 10px 0'}}>Getting Started</p>
                    <span style={{color: '#4E5D78'}}>Create an account to continue!</span>
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
                    <span style={{fontSize: '14px'}}>Sign up with Google</span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #F3F3F3',
                    padding: '10px 25px',
                    borderRadius: '5px',
                    marginTop: '3px',

                }}>
                    <AiFillGithub style={{color: '#377DFF', fontSize: '20px', marginRight: '5px'}}/>
                    <span style={{fontSize: '14px'}}>Sign up with Github</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <span style={{
                                width: '50px',
                                height: '1px',
                                background: '#F3F3F3',
                                marginRight: '5px'
                            }}></span>
                    <p>or Sign up with Email</p>
                    <span
                        style={{width: '50px', height: '1px', background: '#F3F3F3', marginLeft: '5px'}}></span>
                </div>
                <div style={{fontFamily: 'Inter'}}>
                    <Form
                        form={form}
                        layout={'vertical'}
                    >
                        <Form.Item label={'Email'} name={'email'} style={{marginBottom: '5px'}}>
                            <Input placeholder="Enter your email"/>
                        </Form.Item>
                        <Form.Item label={'Name'} name={'name'} style={{marginBottom: '5px'}}>
                            <Input placeholder="Enter your name"/>
                        </Form.Item>
                        <Form.Item label={'Password'} name={'password'} style={{marginBottom: '5px'}}>
                            <Input
                                placeholder="Enter your password"
                                type="password"
                            />
                        </Form.Item>
                        <Form.Item label={'Re-enter Password '} name={'password-repeat'} style={{marginBottom: '5px'}}>
                            <Input
                                placeholder="Enter your password again"
                                type="password"
                            />
                        </Form.Item>
                    </Form>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '5px'
                }}>
                    <Checkbox style={{color: '#B0B7C3'}}>I agree to the Terms & Conditions</Checkbox>
                    <p style={{color: '#38CB89', fontWeight: '700', cursor: 'pointer'}}>Strong </p>
                </div>
                <Button style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#3671FE',
                    color: 'white',
                    borderRadius: '10px',
                    width: '100%'
                }}>
                    <p>Sign up</p>
                </Button>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }}
                     onClick={() => navigate('/signin')}
                >
                    <p>Already have an account <span style={{color: '#377DFF'}}>Sign In</span></p>
                </div>
            </div>
        </div>

    );
};

export default SignIn;