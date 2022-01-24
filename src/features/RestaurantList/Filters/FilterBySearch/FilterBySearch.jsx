import { Button, Form, Input, Select, Typography } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";
import "./FilterBySearch.scss";

const { Text } = Typography;

function FilterBySearch({ onChangeSearch }) {
    const onFinish = e => {
        const searchValue = e.target.value;
        onChangeSearch(searchValue);
    };

    return (
        <>
            <Text strong className="filterByStatus__title">
                Tìm kiếm
            </Text>
            <Input onChange={onFinish} placeholder="Tên, địa chỉ, số điện thoại" />
        </>
    );
}

export default FilterBySearch;
