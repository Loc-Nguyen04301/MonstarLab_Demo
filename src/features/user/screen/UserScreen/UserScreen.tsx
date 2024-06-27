import { Space, TableProps } from 'antd'
import React, { useEffect, useState } from 'react'

interface DataType {
    id: number
    email: string
    name: {
        firstname: string,
        lastname: string
    }
    address: {
        city: string
        street: string
    }
    phone: string
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: (text, record) => <a>{text}</a>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: (text, record) => <a>{text}</a>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <a>{record.name.firstname + record.name.lastname}</a>,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (text, record) => <a>{record.address.city + record.address.street}</a>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Update</a>
                <a>Delete</a>
            </Space>
        ),
    },
]

const UserScreen = () => {
    const [dataSource, setDataSource] = useState<DataType[]>([])

    // useEffect(() => {
    //     setDataSource()
    // }, [])

    return (
        <div>UserScreen</div>
    )
}

export default UserScreen