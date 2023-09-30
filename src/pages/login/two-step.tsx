import React from 'react';
import {Button, Form, Input, InputNumber} from "antd";
import styles from './styles.module.scss'


const TwoStep = () => {

    const [form] = Form.useForm()

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <div style={{
                background: 'white',
                padding: '35px',
                borderRadius: '10px',
                fontFamily: 'Inter',
            }}>
                <div style={{display: 'flex', alignItems: 'start', justifyContent: 'center', flexDirection: 'column'}}>
                    <span style={{fontWeight: '500', fontSize: '28px'}}>2-step Verification</span>
                    <span
                        style={{
                            marginTop: '5px',
                            fontSize: '12px',
                            color: '#8A94A6',
                            letterSpacing: '1px',
                            fontWeight: '300'
                        }}
                    >
                        We sent a verification code to your email. Enter the code from the email in the field below.
                    </span>
                </div>
                <div style={{margin: '10px 0',display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                    <InputNumber controls={false} className={styles.inputNumber} style={{width: '70px', height: '50px'}}/>
                    <InputNumber controls={false} className={styles.inputNumber} style={{width: '70px', height: '50px'}}/>
                    <InputNumber controls={false} className={styles.inputNumber} style={{width: '70px', height: '50px'}}/>
                    <InputNumber controls={false} className={styles.inputNumber} style={{width: '70px', height: '50px'}}/>
                </div>
                <Button style={{
                    background: '#3671FE',
                    color: 'white',
                    width: '100%'
                }}>Login</Button>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <p>Want to use another account? <span
                        style={{color: '#377DFF', cursor: 'pointer'}}>Login Here</span>
                    </p>
                </div>
            </div>
        </div>
    )
        ;
};

export default TwoStep;