import React from 'react';
import {Col, Row} from "antd";
import styles from './styles.module.scss'

const LowerPart = () => {

    const data = [
        {
            filter: 'city',
            desc: 'Name of the city',
            example: 'Devices in San Diego'
        },
        {
            filter: 'country',
            desc: '2-letter Country code',
            example: 'Open ports in the United States'
        }
    ]

    const apiKeyText = 'dm1lc3M6Ly9leUoySWpvaU1pSXNJbkJ6SWpvaVhIVXdOakkzWEhVd05qTXpYSFV3TmpReFhIVXdOalEyWEhVd05qSm1JREk0SUh3Z1hIVXdOak14WEhVd05qUTRYSFV3TmpNeUlGeDFNRFkwTlZ4MU1EWXlOMXgxTURZME5seDFNRFl5Wmx4MU1EWTBOem9nTXpJaUxDSmhaR1FpT2lKY2RUQTJOREpjZFR'


    return (
        <Row style={{width: '90%', margin: '0 auto 20px auto'}}>
            <Col
                xl={{span: 5, offset: 0}}
                lg={{span: 7, offset: 0}}
                style={{
                backgroundColor: '#0060FE',
                color: 'white',
                padding: '20px',
                borderRadius: '15px',
                fontFamily: 'Inter'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '90%'
                }}>
                    <p style={{fontSize: '18px'}}>API Key</p>
                    <span style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: 'white',
                        borderRadius: '50%'
                    }}></span>
                </div>
                <div style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}>
                    <p style={{
                        width: '90%',
                        wordBreak: 'break-all',
                        margin: '0',
                        fontSize: '13px',
                        letterSpacing: '1px',
                        lineHeight: 1.5,
                        fontWeight: 300
                    }}>{apiKeyText}</p>
                    <p style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        letterSpacing: '1px'
                    }}>Generated 03.08.2023</p>
                </div>
                <div style={{
                    background: '#074FC6',
                    padding: '10px 5px',
                    textAlign: 'center',
                    borderRadius: '10px',
                    marginTop: '100px',
                    cursor: 'pointer'
                }}
                     onClick={() => navigator.clipboard.writeText(apiKeyText)}
                >
                    Copy to clipboard
                </div>
            </Col>
            <Col
                xl={{span:18, offset: 1}}
                lg={{span:16, offset: 1}}
                md={{span: 24}}
                sm={{span: 24}}
                className={styles.md_margin}
                style={{backgroundColor: 'white', borderRadius: '15px', padding: '20px'}}
            >
                <div style={{fontFamily: 'Inter'}}>
                    <p style={{fontSize: '25px', fontWeight: '300', margin: '0'}}>
                        <span style={{fontWeight: '600', marginRight: '10px'}}>Filters</span>
                        Cheat Sheet
                    </p>
                    <span style={{
                        fontSize: '12px',
                        color: '#898989',
                        letterSpacing: '1px',
                        fontWeight: 100
                    }}>
                        Here are a few of the most commonly-used search filters to get started.
                    </span>
                    <span></span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#898989',
                    borderBottom: '1px solid #DCDCDC',
                    fontWeight: '500'
                }}>
                    <p style={{width: '33%'}}>Filter’s name</p>
                    <p style={{width: '33%'}}>Description</p>
                    <p style={{width: '33%'}}>Example</p>
                </div>
                {data.map((item, index) => (<div
                    style={
                    index % 2 === 0 ? {
                        padding: '0 10px',
                        background: '#F9F9F9',
                        display: 'flex',
                        alignItems: 'center'
                    } : {
                        padding: '0 10px',
                        background: 'white',
                        display: 'flex',
                        alignItems: 'center',
                    }
                }
                    key={item.filter}>
                    <p style={{width: '33%'}}>{item.filter}</p>
                    <p style={{width: '33%'}}>{item.desc}</p>
                    <p style={{width: '33%'}}>{item.example}</p>
                </div>))}
            </Col>
        </Row>
    );
};

export default LowerPart;