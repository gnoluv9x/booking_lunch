import { BellOutlined, QuestionCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React from "react";
import Avatar from "../../assets/images/Setting.svg";

HeaderIcons.propTypes = {};

function HeaderIcons(props) {
    return (
        <article className="header__icons" style={{ padding: "0 24px" }}>
            <div className="header__icons__list list">
                <SearchOutlined />
                <QuestionCircleOutlined />
                <Badge size="default" count={11} offset={[5, -5]}>
                    <BellOutlined />
                </Badge>
            </div>
            <div className="header__icons__user user">
                <div className="user__avatar">
                    <img src={Avatar} alt="avatar" />
                </div>
                <div className="user__name">Serati Ma</div>
            </div>
        </article>
    );
}

export default HeaderIcons;
