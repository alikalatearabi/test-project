import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Space, Table, Tag } from 'antd';
import styles from './styles.module.scss'

interface DataType {
    key: string;
    Query: string;
    Type: string;
    Results: string;
}

const SearchTable = () => {

    const columns: ColumnsType<DataType> = [
        {
            title: 'Query',
            dataIndex: 'Query',
            key: 'Query',
            render: (text) => <p style={{margin:0}}>{text}</p>,
        },
        {
            title: 'Type',
            dataIndex: 'Type',
            key: 'Type',
        },
        {
            title: 'Results',
            dataIndex: 'Results',
            key: 'Results',
        },
        {
            title: '',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <span>Results</span>
                    <span>View Records</span>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            Query: 'nginxWebUI',
            Type: 'Certificate',
            Results: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            Query: 'nginx-proxy-manager',
            Type: 'Image',
            Results: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            Query: 'neusoft-senginx',
            Type: 'Asset',
            Results: 'Sydney No. 1 Lake Park',
        },
    ];


    return (
        <div style={{width: '90%', margin: 'auto', marginBottom: '20px'}}>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
        </div>
    );
};

export default SearchTable;