import React from 'react';
import {Col, Row} from "antd";
import MainLogin from "./main-login";
import {useLocation} from 'react-router-dom'
import SingleSignOn from "./single-sign-on";
import SignIn from "./sign-in";
import styles from './styles.module.scss'
import TwoStep from "./two-step";

const Login = () => {

    const location = useLocation()

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            background: '#F4F5F6',
            margin: 'auto',
            overflowX: 'hidden',
            overflowY: 'hidden'
        }}>
            <Row style={{height: '90%'}}>
                <Col
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'white',
                        height: '100%',
                        borderRadius: '15px',
                        margin: '20px'
                    }}
                    className={styles.md_hidden}
                    xl={{span: 11}}
                    lg={{span: 11}}

                >
                    <div>Logo</div>
                </Col>
                <Col
                    style={{
                        padding: '40px 50px 50px 50px'
                    }}
                    xl={{span: 9, offset: '2'}}
                    lg={{span: 11, offset: '1'}}
                    md={{span: 22, offset: '1'}}
                    sm={{span: 22, offset: '1'}}
                    xs={{span: 22, offset: '1'}}
                >
                    {location.pathname === '/Login' && <MainLogin/>}
                    {location.pathname === '/single' && <SingleSignOn />}
                    {location.pathname === '/signin' && <SignIn />}
                    {location.pathname === '/twostep' && <TwoStep />}
                </Col>
            </Row>
        </div>
    );
};

export default Login;