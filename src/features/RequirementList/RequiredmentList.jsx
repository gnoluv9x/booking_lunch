import { Button, Col, Row } from "antd";
import React from "react";
import FilterByDate from "./Filters/FilterByDate/FilterByDate";
import FilterByRestaurant from "./Filters/FilterByRestaurant/FilterByRestaurant";
import FilterBySearch from "./Filters/FilterBySearch/FilterBySearch";
import FilterByStatus from "./Filters/FilterByStatus/FilterByStatus";

RequiredmentList.propTypes = {};

function RequiredmentList(props) {
    return (
        <Row span={24} gutter={24}>
            <Col span={5}>
                <FilterByDate />
            </Col>
            <Col span={5}>
                <FilterByRestaurant />
            </Col>
            <Col span={5}>
                <FilterByStatus />
            </Col>
            <Col span={5}>
                <FilterBySearch />
            </Col>
            <Col span={4}>
                <Button type="primary">primary</Button>
            </Col>
        </Row>
    );
}

export default RequiredmentList;
