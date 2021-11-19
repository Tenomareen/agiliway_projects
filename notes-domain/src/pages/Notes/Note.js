import { Col, Card, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import Proptypes from "prop-types";
import moment from "moment";

const Note = ({ note, showModalDelete, getNote}) => {
  const menu = (
    <Menu destroyPopupOnHide>
      <Menu.Item
        key="0"
        onClick={() => {
          getNote(note.uuid);
        }}
      >
        Edit
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={`/note/${note.uuid}`}>Details</NavLink>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="3"
        onClick={() => showModalDelete("delete", note.uuid)}
      >
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <Col span={8}>
      <Card
        title={note.name}
        bordered={true}
        style={{ marginBottom: "5px" }}
      >
        <div>{note.description}</div>
        <div>{moment(note.createDate).format("MMMM Do YYYY")}</div>
        {/* <div> */}
        <Dropdown overlay={menu} trigger={["click"]} destroyPopupOnHide>
          <a
            href="#/"
            className="ant-dropdown-link"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Click me <DownOutlined />
          </a>
        </Dropdown>
        {/* </div> */}
      </Card>
    </Col>
  );
};

Note.propTypes ={
  note: Proptypes.object,
  showModalDelete: Proptypes.func,
  getNote: Proptypes.func,
}

export default Note;
