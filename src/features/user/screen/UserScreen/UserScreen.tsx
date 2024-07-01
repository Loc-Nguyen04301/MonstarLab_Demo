import { Space, Table, TableProps } from 'antd'
import React, { useEffect, useState } from 'react'
import { User } from "@features/user/types/user.types"
import { useAppDispatch } from '@/redux-toolkit/hook'
import { fetchListUsers } from '@/features/user/redux/user.slice'

const columns: TableProps<User>['columns'] = [
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
        render: (text, record) => <a>{record.name.firstname + " " + record.name.lastname}</a>,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (text, record) => <a>{record.address.city + " " + record.address.street}</a>,
    },
    {
        title: 'Phone number',
        dataIndex: 'phone',
        key: 'phone',
        render: (text, record) => <a>{record.phone}</a>,
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
    const [dataSource, setDataSource] = useState<User[]>([])

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchListUsers())
            .then((res) => {
                console.log(res)
                setDataSource(res.payload)
            })
            .catch((e: any) => {
                console.log(e)
            })
    }, [])

    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
            />
        </div>
    )
}

export default UserScreen