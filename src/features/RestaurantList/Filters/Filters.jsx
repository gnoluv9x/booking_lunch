import { Col, Row } from "antd";
import React from "react";
import FilterByMenu from "./FilterByMenu/FilterByMenu";
import FilterBySearch from "./FilterBySearch/FilterBySearch";
import FilterByStatus from "./FilterByStatus/FilterByStatus";

function Filters({ onFilterChange, filters }) {
    const handleFiltersStatus = values => {
        if (!onFilterChange) return;

        onFilterChange({
            ...filters,
            status: values,
        });
    };
    const handleFiltersMenu = values => {
        if (!onFilterChange) return;

        onFilterChange({
            ...filters,
            listmenu: [...values],
        });
    };

    const handleFiltersSearch = values => {
        if (!onFilterChange) return;

        onFilterChange({
            ...filters,
            q: values,
        });
    };

    console.log("filters : ", filters);
    return (
        <Row span={24} gutter={24}>
            <Col span={8}>
                <FilterByStatus onChangeStatus={handleFiltersStatus} />
            </Col>
            <Col span={8}>
                <FilterByMenu onChangeMenu={handleFiltersMenu} />
            </Col>
            <Col span={8}>
                <FilterBySearch onChangeSearch={handleFiltersSearch} />
            </Col>
        </Row>
    );
}

export default Filters;
