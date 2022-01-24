import React from 'react'
import {
  Space,
  Button,
} from "antd";
import {PlusOutlined, DownloadOutlined} from "@ant-design/icons";
/**
* @author
* @function BtnOrderExprtImprt
**/

export const BtnOrderExprtImprt = (props) => {
  const {showDrawerAdd} = props
  return(
    <Space size={"small"} wrap>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{minWidth: "142px"}}
          onClick={showDrawerAdd}
        >
          Thêm yêu cầu
        </Button>
        <Button
          type="primary"
          ghost
          icon={<DownloadOutlined />}
          style={{minWidth: "142px"}}
        >
          Xuất yêu cầu
        </Button>
      </Space>
   )
  }
