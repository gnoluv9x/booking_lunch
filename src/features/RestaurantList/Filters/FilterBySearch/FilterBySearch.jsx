import { Input, Typography } from "antd";
import React from "react";
import "./FilterBySearch.scss";

const { Text } = Typography;

function FilterBySearch({ onChangeSearch }) {
    let filterTimeout;

    const onFinish = e => {
        clearTimeout(filterTimeout);

        filterTimeout = setTimeout(() => {
            const searchValue = e.target.value;
            onChangeSearch(searchValue);
        }, 500);
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
