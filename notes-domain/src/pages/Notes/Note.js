import {
  Col, Card, Menu, Dropdown,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

const Note = ({ note, showModal, getNoteForEdit }) => {
  const menu = (
    <Menu destroyPopupOnHide>
      <Menu.Item
        key="0"
        onClick={() => {
          showModal('edit')
          getNoteForEdit(note.uuid);
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
        onClick={() => showModal('delete', note.uuid)}
      >
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <Col span={8}>
      <Card
        title={note.name}
        bordered
        style={{ marginBottom: '5px' }}
      >
        <div className="description">{note.description}</div>
        <div className="date">{moment(note.createDate).format('MMMM Do YYYY')}</div>
        {/* <div> */}
        <Dropdown overlay={menu} trigger={['click']} destroyPopupOnHide>
          <a
            href="#/"
            className="ant-dropdown-link"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Click me
            {' '}
            <DownOutlined />
          </a>
        </Dropdown>
        {/* </div> */}
      </Card>
    </Col>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    createDate: PropTypes.string,
  }),
  showModal: PropTypes.func,
  getNoteForEdit: PropTypes.func,
};

Note.defaultProps = {
  note: {},
  showModal: () => {},
  getNoteForEdit: () => {},
};

export default Note;
