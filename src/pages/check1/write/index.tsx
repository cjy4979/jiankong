import { Card, message } from 'antd';
import ProForm, {
    ProFormDateTimePicker,
    ProFormRadio,
    //ProFormSelect,
    ProFormText,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import type { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { fakeSubmitForm } from './service';
//import styles from './index.less';

const BasicForm: FC<Record<string, any>> = () => {
    const { run } = useRequest(fakeSubmitForm, {
        manual: true,
        onSuccess: () => {
            message.success('提交成功');
        },
    });

    const onFinish = async (values: Record<string, any>) => {
        run(values);
    };

    return (
        <PageContainer content="提交测试数据于数据库，测试数据库连通性。">
            <Card bordered={false}>
                <ProForm
                    hideRequiredMark
                    style={{ margin: 'auto', marginTop: 8, maxWidth: 600 }}
                    name="basic"
                    layout="vertical"
                    initialValues={{ public: '1' }}
                    onFinish={onFinish}
                >
                    <ProFormDateTimePicker
                        label="测试时间"
                        width="md"
                        name="time"
                        rules={[
                            {
                                required: true,
                                message: '请选择测试时间',
                            },
                        ]}
                        placeholder='请选择测试时间'
                    />

                    {/* <ProFormSelect
                        width='md'
                        label='立柱编号'
                        name='columnNumber'
                        rules={[
                            {
                                required: true,
                                message: '请选择立柱编号'
                            }
                        ]}
                    /> */}

                    <ProFormText
                        width="md"
                        label="应变计位置"
                        name="position"
                        rules={[
                            {
                                required: true,
                                message: '请输入应变计位置',
                            },
                        ]}
                        placeholder="请输入应变计位置"
                    />


                    <ProFormText
                        width="md"
                        label="应变计编号"
                        name="strainGaugeNumber"
                        rules={[
                            {
                                required: true,
                                message: '请输入应变计编号',
                            },
                        ]}
                        placeholder="请输入应变计编号"
                    />

                    <ProFormText
                        width="md"
                        label="初始应变"
                        name="initialStrain"
                        rules={[
                            {
                                required: true,
                                message: '请输入初始应变',
                            },
                        ]}
                        fieldProps={{
                            style: { width: '60%' },
                            addonAfter: 'με',
                        }}
                        placeholder="请输入初始应变"
                    />

                    <ProFormText
                        width="md"
                        label="测量应变"
                        name="measuredStrain"
                        rules={[
                            {
                                required: true,
                                message: '请输入测量应变',
                            },
                        ]}
                        fieldProps={{
                            style: { width: '60%' },
                            addonAfter: 'με',
                        }}
                        placeholder="请输入测量应变"
                    />

                    <ProFormText
                        width="md"
                        label="测量应力"
                        name="measuredStress"
                        rules={[
                            {
                                required: true,
                                message: '请输入测量应力',
                            },
                        ]}
                        fieldProps={{
                            style: { width: '60%' },
                            addonAfter: 'MPa',
                        }}
                        placeholder="请输入测量应力"
                    />

                    <ProFormText
                        width="md"
                        label="计算应力"
                        name="caculatedStrain"
                        rules={[
                            {
                                required: true,
                                message: '请输入计算应力',
                            },
                        ]}
                        fieldProps={{
                            style: { width: '60%' },
                            addonAfter: 'MPa',
                        }}
                        placeholder="请输入计算应力"
                    />

                    <ProFormText
                        width="md"
                        label="极限强度"
                        name="ultimateStrength"
                        rules={[
                            {
                                required: true,
                                message: '请输入极限强度',
                            },
                        ]}
                        fieldProps={{
                            style: { width: '60%' },
                            addonAfter: 'MPa',
                        }}
                        placeholder="请输入极限强度"
                    />

                    <ProFormText
                        width="md"
                        label="预警强度"
                        name="warningStrength"
                        rules={[
                            {
                                required: true,
                                message: '请输入预警强度',
                            },
                        ]}
                        fieldProps={{
                            style: { width: '60%' },
                            addonAfter: 'MPa',
                        }}
                        placeholder="请输入预警强度"
                    />


                    <ProFormRadio.Group
                        options={[
                            {
                                value: '1',
                                label: '安全',
                            },
                            {
                                value: '2',
                                label: '预警',
                            },
                            {
                                value: '3',
                                label: '危险',
                            },
                        ]}
                        label="状态"
                        name="safeType"
                    />
                </ProForm>
            </Card>
        </PageContainer>
    );
};

export default BasicForm;
