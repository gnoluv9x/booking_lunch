import { Form, Select, Typography } from "antd";
import React from "react";
import "./FilterByStatus.scss";

const { Option } = Select;
const { Text } = Typography;

function FilterByStatus({ onChangeStatus }) {
    function handleChange(value) {
        if (!onChangeStatus) return;

        onChangeStatus(value === "active");
    }

    return (
        <>
            <Text strong className="filterByStatus__title">
                Trạng thái
            </Text>
            <Select
                showSearch
                style={{ fontWeight: 400 }}
                placeholder="Chọn một hoạt động"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="active">Hoạt động</Option>
                <Option value="locking">Tạm khoá</Option>
            </Select>
        </>
    );
}

export default FilterByStatus;
