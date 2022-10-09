import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable, } from '@ant-design/pro-table';
//import { useRequest } from 'umi';

import React, { useEffect, useState } from 'react';
import {
    setParams,
    //getParams 
} from '../service'

const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

type DataSourceType = {
    id: React.Key;
    index?: number;
    title?: string;
    readonly?: string;
    decs?: string;
    state?: string;
    serialNumber?: string;
    baud?: number;
    name?: string;
    created_at?: string;
    update_at?: string;
    children?: DataSourceType[];
};

// const defaultData: DataSourceType[] = [
//     {
//         id: 624748504,
//         title: '活动名称一',
//         readonly: '活动名称一',
//         decs: '这个活动真好玩',
//         state: 'open',
//         created_at: '1590486176000',
//         update_at: '1590486176000',
//     },
//     {
//         id: 624691229,
//         title: '活动名称二',
//         readonly: '活动名称二',
//         decs: '这个活动真好玩',
//         state: 'closed',
//         created_at: '1590481162000',
//         update_at: '1590481162000',
//     },
// ];

export default () => {
    const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
    const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
    //const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>('bottom');

    const columns: ProColumns<DataSourceType>[] = [
        {
            title: '硬件编号/名称',
            dataIndex: 'name',
            formItemProps: (form, { rowIndex }) => {
                return {
                    rules: rowIndex > 1 ? [{ required: true, message: '此项为必填项' }] : [],
                };
            },
            width: '20%',
        },
        {
            title: '串口号',
            dataIndex: 'serialNumber',
            width: '20%',
        },
        {
            title: '波特率（Bd）',
            dataIndex: 'baud',
            width: '20%',
        },
        {
            title: '状态',
            key: 'state',
            dataIndex: 'state',
            valueType: 'select',
            valueEnum: {
                all: { text: '正常运行', status: 'Success' },
                open: {
                    text: '挂起/关闭',
                    status: 'Default',
                },
                closed: {
                    text: '存在故障',
                    status: 'Error',
                },
            },
        },
        {
            title: '操作',
            valueType: 'option',
            width: 200,
            render: (text, record, _, action) => [
                <a
                    key="editable"
                    onClick={() => {
                        action?.startEditable?.(record.id);
                    }}
                >
                    编辑
                </a>,
                <a
                    key="delete"
                    onClick={() => {
                        fetch('/api/delparams', {
                            method: "post",
                            body: JSON.stringify({
                                id: record.id
                            }),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        setDataSource(dataSource.filter((item) => item.id !== record.id));
                    }}
                >
                    删除
                </a>,
            ],
        },
    ];

    useEffect(() => {
        fetch("/api/getparams").then(
            response => response.json()
        ).then(
            data => {
                console.log(data);
                setDataSource(data.msg)
            }
        )
    })


    return (
        <>
            <EditableProTable<DataSourceType>
                rowKey="id"
                headerTitle="参数设置"
                maxLength={5}
                scroll={{
                    x: 960,
                }}
                recordCreatorProps={
                    {
                        position: 'bottom',
                        record: (index) => {
                            return { id: index + 1 };
                        },
                        creatorButtonText: '新增一行',
                    }
                }
                loading={false}
                columns={columns}
                // request={async () => ({
                //     data: defaultData,
                //     total: 3,
                //     success: true,
                // })}
                value={dataSource}
                onChange={setDataSource}
                editable={{
                    type: 'multiple',
                    editableKeys,
                    onSave: async (rowKey, data) => {
                        setParams(data).then()
                        //run(rowKey, data, row)
                        await waitTime(2000);
                    },
                    onChange: setEditableRowKeys,
                }}
            />
        </>
    );
};