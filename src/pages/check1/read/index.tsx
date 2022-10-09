import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Badge, Card } from 'antd';
import type { FC } from 'react';
import React from 'react';
import { useRequest } from 'umi';
import type { MeasureDetials } from './data.d';
import { queryBasicProfile } from './service';
import styles from './style.less';



const progressColumns: ProColumns<MeasureDetials>[] = [
    {
        title: '测量时间',
        dataIndex: 'time',
        key: 'time',
        render: (text: any) => {
            const date = new Date(text).toLocaleString('fr')
            return <span>{date}</span>;
        },
    },
    {
        title: '应变计位置',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: '应变计编号',
        dataIndex: 'strainGaugeNumber',
        key: 'strainGaugeNumber',
    },
    {
        title: '初始应变(με)',
        dataIndex: 'initialStrain',
        key: 'initialStrain',
    },
    {
        title: '测量应变(με)',
        dataIndex: 'measuredStrain',
        key: 'measuredStrain',
    },
    {
        title: '测量应力(MPa)',
        dataIndex: 'measuredStress',
        key: 'measuredStress',
    },
    {
        title: '计算应力(MPa)',
        dataIndex: 'caculatedStrain',
        key: 'caculatedStrain',
    },
    {
        title: '极限强度(MPa)',
        dataIndex: 'ultimateStrength',
        key: 'ultimateStrength',
    },
    {
        title: '预警强度(MPa)',
        dataIndex: 'warningStrength',
        key: 'warningStrength',
    },
    {
        title: '状态',
        dataIndex: 'safeType',
        key: 'safeType',
        render: (text: React.ReactNode) => {
            if (text === 1) {
                return <Badge status="success" text="安全" />;
            } else if (text == 2) {
                return <Badge status="warning" text="预警" />;
            }
            return <Badge status="error" text="危险" />;
        },
    },
];

const Basic: FC = () => {
    const { data, loading } = useRequest(() => {
        return queryBasicProfile();
    });

    const { MeasureDetials } = data || {
        MeasureDetials: [],
    };

    return (
        <PageContainer>
            <Card bordered={false}>
                <div className={styles.title}>应力检测表</div>
                <ProTable
                    style={{ marginBottom: 6 }}
                    //pagination={true}
                    loading={loading}
                    search={false}
                    options={false}
                    //toolBarRender={false}
                    scroll={{ x: 1300 }}
                    dataSource={MeasureDetials}
                    columns={progressColumns}
                />
            </Card>
        </PageContainer>
    );
};

export default Basic;
