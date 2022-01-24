import { Row, Space, Table, Tag } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";
import { DEFAULT_PAGE, LIMIT_PAGE } from "../../../common/paginate";

function removeKeyObj(obj, old_key, new_key) {
    if (old_key !== new_key) {
        Object.defineProperty(obj, new_key, Object.getOwnPropertyDescriptor(obj, old_key));
        delete obj[old_key];
    }
    return obj;
}

function RestaurantTable({ listRestaurant, onChange }) {
    const columns = [
        {
            title: "Tên quán ăn",
            dataIndex: "restaurantName",
            key: "restaurantName",
            width: "10%",
            render: text => <a href="#!">{text}</a>,
        },
        {
            title: "Địa chỉ",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Liên hệ",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
            width: "12%",
        },
        {
            title: "Thực đơn",
            dataIndex: "setName",
            key: "setName",
            render: listMenu => (
                <>
                    {listMenu.map(tag => {
                        return <Tag key={tag}>{tag}</Tag>;
                    })}
                </>
            ),
        },
        {
            title: "Trạng thái",
            key: "status",
            dataIndex: "status",
            render: status => (
                <Tag color={status ? "blue" : "error"}>{status ? "Hoạt động " : "Trạng thái"}</Tag>
            ),
        },
        {
            title: "Hành động",
            key: "action",
            render: payload => (
                <Space size="middle">
                    <a href="#!">{payload.status ? "Khoá" : "Mở"}</a>
                    <a href="#!">Chi tiết</a>
                    <a href="#!">
                        <Text type="danger">Xoá</Text>
                    </a>
                </Space>
            ),
        },
    ];

    // const data = [
    //     {
    //         restaurantName: "restaurantName 1",
    //         phoneNumber: 43,
    //         status: false,
    //         address: "address 1",
    //         setName: ["bún bò", "cơm rang", "rau muống", "cơm"],
    //         restaurantId: "1",
    //     },
    // ];

    let newData = [];
    if (listRestaurant.length > 0) {
        newData = listRestaurant.map(item => {
            const newItem = { ...item };
            return removeKeyObj(newItem, "restaurantId", "key");
        });
    }

    return (
        <Row style={{ width: "100%", marginTop: -16 }}>
            <Table
                columns={columns}
                dataSource={newData}
                style={{ width: "100%" }}
                pagination={{
                    showQuickJumper: true,
                    defaultCurrent: DEFAULT_PAGE,
                    total: 40,
                    pageSize: LIMIT_PAGE,
                    // showSizeChanger: true,
                    // pageSizeOptions: ["10", "15"],
                    onChange: onChange,
                    hideOnSinglePage: true,
                }}
            />
        </Row>
    );
}

export default RestaurantTable;
