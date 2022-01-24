import React from 'react'
import {
    Space,
    Button,
    Drawer,
    Radio,
    Form,
    InputNumber,
  } from "antd";
  import {Select} from "antd";
/**
* @author
* @function DrawerOrder
**/

export const DrawerOrder = (props) => {
    const {Option} = Select
    const {isEditting, onDrawerClose, visibleDrawer, onSubmit ,onSubmitFailed, form} = props
  return(
    <Drawer
        title={isEditting ? "Chỉnh sửa yêu cầu" : "Thêm yêu cầu"}
        placement={"left"}
        width={"300px"}
        onClose={onDrawerClose}
        visible={visibleDrawer}
        closable={false}
        className="order-drawer"
      >
        <Form
          name="control-hooks"
          layout="vertical"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 24,
          }}
          onFinish={onSubmit}
          onFinishFailed={onSubmitFailed}
          style={{padding: "18px"}}
          form={form}
        >
          <Form.Item label="Thành viên" name="user">
            <Select mode="multiple" allowClear placeholder="Thêm thành viên">
              <Option value={"test1"}>test1</Option>
              <Option value={"test2"}>test2</Option>
              <Option value={"test3"}>test3</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Quán ăn" name="restaurant">
            <Select allowClear placeholder="Lựa chọn quán ăn">
              <Option value={"res1"}>Quán 1</Option>
              <Option value={"test2"}>Quán 3</Option>
              <Option value={"test3"}>Quán 2</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Món chính" name="mainOrder">
            <Select allowClear placeholder="Lựa chọn món chính">
              <Option value={"res1"}>Cá</Option>
              <Option value={"test2"}>Trứng chiên</Option>
              <Option value={"test3"}>Thịt kho</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Món phụ" name="subOrder">
            <Select mode="multiple" allowClear placeholder="Thêm món phụ">
              <Option value={"test1"}>Món phụ 1</Option>
              <Option value={"test2"}>Món phụ 2</Option>
              <Option value={"test3"}>Món phụ 3</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Số lượng" name="quantity">
            <InputNumber min={1} keyboard={true}/>
          </Form.Item>
          <Form.Item label="Trạng thái" name="status">
            <Radio.Group name="radiogroup">
              <Radio value={"Đã đặt"}>Đã đặt</Radio>
              <Radio value={"Chưa đặt"}>Chưa đặt</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Space direction="horizontal" style={{marginTop: "75px", marginLeft:"80px"}}>
              <Button onClick={onDrawerClose}>Hủy bỏ</Button>
              <Button htmlType="submit" type="primary">
                Xác nhận
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Drawer>
   )
  }
