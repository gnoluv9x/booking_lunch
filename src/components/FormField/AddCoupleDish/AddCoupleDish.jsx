import { PlusOutlined } from "@ant-design/icons";
import { Button, Row, Table } from "antd";
import React, { useState } from "react";
import SelecMulti from "../../Select/SelecMulti";
import SelectOption from "../../Select/SelectOpTion";
import "./AddCoupleDish.scss";

function AddCoupleDish(props) {
    const data = [
        {
            key: "1",
            main: ["Cá", "Thịt", "Trứng", "Rau"],
            sub: ["item1", "item2", "item3", "item4", "item5", "item6"],
        },
        {
            key: "2",
            main: ["Cá", "Thịt", "Trứng", "Rau"],
            sub: ["item1", "item2", "item3", "item4", "item5", "item6"],
        },
        {
            key: "3",
            main: ["Cá", "Thịt", "Trứng", "Rau"],
            sub: ["item1", "item2", "item3", "item4", "item5", "item6"],
        },
    ];

    const [listDish, setListDish] = useState(data);

    const handleRemoveCoupleDish = payload => {
        setListDish(prev => {
            return prev.filter(item => item.key !== payload.key);
        });
    };
    const handleAddCoupleDish = () => {
        setListDish(prev => {
            const newList = [...prev];
            const lastItem = prev[prev.length - 1];
            const newItem = {
                ...lastItem,
                key: String(parseInt(listDish.length) + 1),
            };
            newList.push(newItem);
            return newList;
        });
    };
    const columns = [
        {
            title: "Món chính",
            dataIndex: "main",
            key: "main",
            width: "20%",
            render: main => <SelectOption listData={main} placeholder={"Món chính"} />,
        },
        {
            title: "Món phụ",
            dataIndex: "sub",
            key: "sub",
            width: "60%",
            render: sub => (
                <SelecMulti span={10} listData={sub} placeholder={"Vui lòng chọn món phụ"} />
            ),
        },
        {
            title: "Hành động",
            width: "20%",
            render: payload => (
                <a span={4} href="#!">
                    <Button onClick={() => handleRemoveCoupleDish(payload)} type="default">
                        Huỷ
                    </Button>
                </a>
            ),
        },
    ];

    return (
        <Row className="couple__dish">
            <Table
                className="couple__dish--table"
                columns={columns}
                dataSource={listDish}
                style={{ width: "100%", marginBottom: "10px" }}
                pagination={false}
            />
            <Button onClick={handleAddCoupleDish} icon={<PlusOutlined />}>
                Thêm cặp món mới
            </Button>
        </Row>
    );
}

export default AddCoupleDish;
