import React, { memo, useEffect, useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, theme } from 'antd';
import { useHistory, useLocation } from "react-router-dom"
import { HomePathsEnum } from '@/features/home/constants/home.paths';
import { UserPathsEnum } from '@/features/user/constants/user.paths';
const { Header, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

interface MainLayoutProps {
    children?: React.ReactElement
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const [selectedKeys, setSelectedKeys] = useState<string>(HomePathsEnum.HOME)
    const [collapsed, setCollapsed] = useState(false)
    const history = useHistory()

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const items: MenuItem[] = [
        {
            key: HomePathsEnum.HOME,
            label: 'Home',
            icon: <HomeOutlined />,
        },
        {
            key: UserPathsEnum.USER,
            icon: <UserOutlined />,
            label: 'User',
        },
    ]

    const onClick: MenuProps['onClick'] = (e) => {
        setSelectedKeys(e.key);
    };

    useEffect(() => {
        history.push(selectedKeys)
    }, [selectedKeys]);

    return (
        <div className='w-full h-full'>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
                    <Menu
                        mode="inline"
                        theme='light'
                        items={items}
                        onClick={onClick}
                        selectedKeys={[selectedKeys]}
                    // defaultOpenKeys={['sub1']}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default memo(MainLayout)