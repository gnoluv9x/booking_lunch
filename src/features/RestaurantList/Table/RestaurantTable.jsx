import { Row, Space, Table, Tag } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";

function removeKeyObj(obj, old_key, new_key) {
    if (old_key !== new_key) {
        Object.defineProperty(obj, new_key, Object.getOwnPropertyDescriptor(obj, old_key));
        delete obj[old_key];
    }
    return obj;
}

function RestaurantTable({ listRestaurant }) {
    console.log("Restaurant from : ", listRestaurant);
    const columns = [
        {
            title: "Tên quán ăn",
            dataIndex: "restaurantName",
            key: "restaurantName",
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

    const data = [
        {
            restaurantName: "restaurantName 1",
            phoneNumber: 43,
            status: false,
            address: "address 1",
            setName: ["bún bò", "cơm rang", "rau muống", "cơm"],
            restaurantId: "1",
        },
        {
            restaurantId: "1",
            restaurantName: "Long Vu",
            address: "Quán 1",
            setName: ["Bún bò", "Rau muống", "Cơm", "Thịt kho tàu", "Cá tầm sốt thái"],
            address: "New York No. 1 Lake Park",
            status: true,
            phoneNumber: "0977984535",
        },
        {
            restaurantId: "2",
            name: "Manh Kien",
            restaurant: "Quán 4",
            menu: ["Bún bò", "Rau muống"],
            quantity: 32,
            address: "New York No. 1 Lake Park",
            status: "Hoạt động",
            contact: "0977984535",
        },
        {
            restaurantId: "3",
            name: "Van Hoc",
            restaurant: "Quán 3",
            menu: ["Bún bò", "Rau muống", "Cơm"],
            quantity: 32,
            address: "New York No. 1 Lake Park",
            status: "Tạm khoá",
            contact: "0977984535",
        },
        {
            restaurantId: "4",
            name: "La Duc",
            restaurant: "Quán 2",
            menu: ["Cơm", "Thịt kho tàu", "Cá tầm sốt thái"],
            quantity: 32,
            address: "New York No. 1 Lake Park",
            status: "Tạm khoá",
            contact: "0977984535",
        },
    ];

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
                pagination={false}
            />
        </Row>
    );
}

export default RestaurantTable;
