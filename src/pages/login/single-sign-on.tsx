import React from 'react';
import {FiSmartphone} from "react-icons/fi";
import {Button, Form, Input} from "antd";


const SingleSignOn = () => {

    const [form] = Form.useForm()

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <div style={{
                background: 'white',
                padding: '35px',
                borderRadius: '10px',
                fontFamily: 'Inter',
            }}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <FiSmartphone style={{fontSize: '35px'}}/>
                    <span style={{marginLeft: '10px', fontWeight: '500', fontSize: '28px'}}>Single Sign-On (SSO)</span>
                </div>
                <div style={{marginTop: '20px'}}>
                    <Form form={form} layout={'vertical'}>
                        <Form.Item label={'Organization’s name'}>
                            <Input placeholder="Enter your organization" />
                        </Form.Item>
                        <Button style={{
                            background: '#3671FE',
                            color: 'white',
                            width: '100%'
                        }}>Login</Button>
                    </Form>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <p>Want to use another account? <span style={{color: '#377DFF', cursor: 'pointer'}}>Login Here</span></p>
                </div>
            </div>
        </div>
    );
};

export default SingleSignOn;