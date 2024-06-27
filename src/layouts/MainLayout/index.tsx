import React, { memo, useEffect, useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, theme } from 'antd';
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { HomePathsEnum } from '@/features/home/constants/home.paths';
import { UserPathsEnum } from '@/features/user/constants/user.paths';
const { Header, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

interface MainLayoutProps {
    children?: React.ReactElement
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const location = useLocation()
    const [selectedKeys, setSelectedKeys] = useState<string>(HomePathsEnum.HOME)
    const [collapsed, setCollapsed] = useState(false)
    const navigate = useNavigate();
    
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
        navigate(e.key)
    };

    useEffect(() => {
        const pathName = location.pathname;
        setSelectedKeys(pathName);
    }, [location.pathname]);

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
                        {children ?? <Outlet />}
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default memo(MainLayout)