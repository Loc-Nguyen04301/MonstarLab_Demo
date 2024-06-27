import React from 'react'
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { useAppDispatch } from '@/redux-toolkit/hook';
import { loginIn } from '@/features/auth/redux/auth.slice';
import { getBaseUrl } from '@/api';

const { Title, Text } = Typography;

type FieldType = {
    username: string;
    password: string;
    remember?: string;
};

const SignInScreen = () => {

    const dispatch = useAppDispatch()

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        try {
            console.log('Success:', values);
            const { remember, ...rest } = values
            dispatch(loginIn(rest))
                .then(() => { })
                .catch((e) => console.log(e))
        } catch (error: any) {
            console.log(error)
        }
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className='flex'>
                <div className='w-[44px] h-[44px] mr-4'>
                    <img src='https://preview.pro.ant.design/logo.svg' />
                </div>
                <Title className='!mb-0'>Ant Design</Title>
            </div>
            <Text type="secondary" className='mb-10'>Ant Design 是西湖区最具影响力的 Web 设计规范</Text>
            <Form
                wrapperCol={{ span: 24 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className='min-w-[330px]'
            >
                <Form.Item<FieldType>
                    name={"username"}
                    rules={[
                        { required: true, message: 'Please input your username!' },
                        { min: 3, message: "Min length 3 character" }]}
                    wrapperCol={{ span: 24 }}
                >
                    <Input placeholder='Username' />
                </Form.Item>

                <Form.Item<FieldType>
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }, { min: 3, message: "Min length 3 character" }]}
                    wrapperCol={{ span: 24 }}
                >
                    <Input.Password placeholder='Password' />
                </Form.Item>
                <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox>Remember me</Checkbox>
                    <a className='float-right'>Quên mật khẩu?</a>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button type="primary" htmlType="submit" className='w-full'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default SignInScreen