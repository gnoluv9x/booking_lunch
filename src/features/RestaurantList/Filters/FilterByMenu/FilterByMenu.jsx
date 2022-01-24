import { Form, Select, Typography } from "antd";
import React from "react";
import { useGlobalContext } from "../../../../Context/ListDishContext";
import "./FilterByMenu.scss";

const { Option } = Select;
const { Text } = Typography;

const FilterByMenu = ({ onChangeMenu }) => {
    const { listDish } = useGlobalContext();

    const handleChange = value => {
        const listChoosedDish = [];
        Object.keys(value).forEach(item => {
            listChoosedDish.push(listDish[item]);
        });
        onChangeMenu(listChoosedDish);
    };

    return (
        <>
            <Text strong className="filterByStatus__title">
                Thực đơn
            </Text>
            <Select
                mode="tags"
                style={{ width: "100%", fontWeight: 400 }}
                placeholder="Chọn món ăn"
                onChange={handleChange}
                maxTagCount={3}
            >
                {listDish.map((menu, idx) => (
                    <Option key={idx} style={{ fontWeight: 400 }}>
                        {menu}
                    </Option>
                ))}
            </Select>
        </>
    );
};

export default FilterByMenu;
