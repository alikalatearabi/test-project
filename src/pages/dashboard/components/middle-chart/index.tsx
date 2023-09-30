import React, {useEffect, useState} from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';

import styles from './styles.module.scss'
import {Col, Row} from "antd";

const MiddleChart = () => {

    const [chartSize, setChartSize] = useState(window.innerWidth)

    useEffect(() =>{
        const handleWindowResize = () => {
            setChartSize(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);
    },[])

    const data = [
        { year: 2016, month: 'Jan', profit: 2 },
        { year: 2016, month: 'Feb', profit: 18 },
        { year: 2016, month: 'Mar', profit: 10 },
        { year: 2016, month: 'Apr', profit: 9 },
        { year: 2016, month: 'May', profit: 5 },
        { year: 2016, month: 'Jun', profit: 15 },
        { year: 2016, month: 'Jul', profit: 19 },
        { year: 2016, month: 'Aug', profit: 15 },
        { year: 2016, month: 'Sep', profit: 5 },
        { year: 2016, month: 'Oct', profit: 18 },
        { year: 2016, month: 'Nov', profit: 15 },
        { year: 2016, month: 'Dec', profit: 19 },
        { year: 2017, month: 'Jan', profit: 30 },
        { year: 2017, month: 'Feb', profit: 29 },
        { year: 2017, month: 'Mar', profit: 31 },
        { year: 2017, month: 'Apr', profit: 33 },
        { year: 2017, month: 'May', profit: 34 },
        { year: 2017, month: 'Jun', profit: 35 },
        { year: 2017, month: 'Jul', profit: 37 },
        { year: 2017, month: 'Aug', profit: 29 },
        { year: 2017, month: 'Sep', profit: 30 },
        { year: 2017, month: 'Oct', profit: 34 },
        { year: 2017, month: 'Nov', profit: 33 },
        { year: 2017, month: 'Dec', profit: 35 },
    ];

    const lineData = data.reduce((r, v) => {
        r.year.push(v.year);
        r.profit += v.profit;
        return r;
    }, {
        year: [],
        month: 'Total',
        profit: 0
    });

    const cols = {
        profit: {alias: 'profits'}
    };

    return (
        <Row className={styles.middle_chart_wrapper}>
            <Col className={styles.chart_info} span={24}>
                <div className={styles.info_wrapper}>
                    <p style={{fontSize: '24px', color: '#202020', marginRight: '15px'}}>Daily Usage</p>
                    <span style={{fontSize: '24px', color: 'rgba(32,32,32,0.2)', fontWeight: '100'}}>Monthly Usage</span>
                </div>
                <div className={styles.info_wrapper}>
                    <span style={{
                        fontFamily: 'Inter',
                        fontSize: '13px',
                        color: '#23262F',
                        marginRight: '10px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            width:'10px',
                            height: '10px',
                            backgroundColor: '#0060FE',
                            borderRadius: '50%',
                            marginRight: '5px'
                        }}></span>
                        Searches
                    </span>
                    <span style={{
                        fontFamily: 'Inter',
                        fontSize: '13px',
                        color: '#23262F',
                        marginRight: '10px',
                        display: 'flex',
                        alignItems: 'center'}}>
                        <span style={{
                            width:'10px',
                            height: '10px',
                            backgroundColor: '#EF466F',
                            borderRadius: '50%',
                            marginRight: '5px'
                        }}></span>
                        Domain searches
                    </span>
                </div>
            </Col>
            <Col span={24} className={styles.chart}>
                <Chart height={200} width={chartSize * 0.8} data={data} scale={cols} padding="auto">
                    <Axis name="year" />
                    <Axis name="profit" />

                    <Tooltip />

                    <Geom
                        type="interval"
                        position="month*profit"
                        color="#1890FF"
                        size={20}
                        shape='rect'
                        style={{
                            lineWidth: 1,
                            stroke: '#fff',
                            radius: [5, 5, 5, 5],
                        }}
                    />

                    <Geom
                        data={[lineData]}
                        type="line"
                        position="year*profit"
                        size={2}
                        color={'#EF466F'}
                        shape={'smooth'}
                    />
                </Chart>
            </Col>
        </Row>
    );
};

export default MiddleChart;