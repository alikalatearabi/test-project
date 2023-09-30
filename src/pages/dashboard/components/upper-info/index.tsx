import React from 'react';
import styles from './styles.module.scss'
import { RingProgress } from '@ant-design/plots';
import {Col, Row} from "antd";

const UpperInfo = () => {

    const firstConfig = {
        height: 100,
        width: 100,
        autoFit: false,
        percent: 0.53,
        progressStyle: {

        },
        color: ['#0060FE', 'white'],
        statistic: false,
    };

    const SecondConfig = {
        height: 100,
        width: 100,
        autoFit: false,
        percent: 0.53,
        color: ['#EF466F', 'white'],
        statistic: false
    };


    return (
        <Row className={styles.upper_info_wrapper} >
            <Col
                className={styles.pie_chart_wrapper}
                xl={{span: 8, offset: 0}}
                lg={{span: 11, offset: 0}}
                md={{span: 11, offset: 0}}
                sm={{span: 11, offset: 0}}
                xs={{span: 24, offset: 0}}
            >
                <div className={styles.chart_section}>
                    <RingProgress {...firstConfig} />
                </div>
                <div className={styles.number_section}>
                    <span className={styles.upper} style={{background: '#0060FE'}}>searches Used</span>
                    <p>5,300 / <span>10,000</span></p>
                    <span className={styles.lower} style={{color: '#0060FE'}}>53%</span>
                </div>
            </Col>
            <Col
                className={styles.pie_chart_wrapper}
                xl={{span: 10, offset: 1}}
                lg={{span: 12, offset: 1}}
                md={{span: 12, offset: 1}}
                sm={{span: 12, offset: 1}}
                xs={{span: 24, offset: 0}}
            >
                <div className={styles.chart_section}>
                    <RingProgress {...SecondConfig} />
                </div>
                <div className={styles.number_section}>
                    <span className={styles.upper} style={{background: '#EF466F'}}>Domain Searches Used</span>
                    <p>7,400 / <span>10,000</span></p>
                    <span className={styles.lower} style={{color: '#EF466F'}}>74%</span>
                </div>
            </Col>
            <Col
                className={styles.days_left_wrapper}
                xl={{span: 4, offset: 1}}
                lg={{span: 6, offset: 0}}
                md={{span: 8, offset: 0}}
                sm={{span: 8, offset: 0}}
                xs={{span: 24, offset: 0}}
            >
                <p>Days Left</p>
                <h1>234 <h3>/ 365</h3></h1>
            </Col>
        </Row>
    );
};

export default UpperInfo;