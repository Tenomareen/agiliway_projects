import { Card } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getNoteDetails } from './thunks/noteThunk';
import { getNoteStartAction } from './actions/actions';

class NoteDetails extends Component {
  componentDidMount() {
    const { getNoteStart, match: { params } } = this.props;
    getNoteStart(params.id);
  }

  render() {
    const { noteDetails } = this.props;
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
      >
        <Card
          title={noteDetails.name}
          extra={<NavLink to="/notes">Back</NavLink>}
          style={{ width: 500, fontSize: 'large' }}
        >
          <div>
            <div style={{ fontWeight: 'bold' }}>Author : </div>
            {noteDetails.author}
          </div>
          <div>
            <div style={{ fontWeight: 'bold' }}>Description : </div>
            {noteDetails.description}
          </div>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  noteDetails: state.noteDetails.note,
});
const mapDispatchToProps = {
  getNoteStart: getNoteStartAction,
  getNoteById: getNoteDetails,
};

NoteDetails.propTypes = {
  noteDetails: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    createDate: PropTypes.string,
  }),
  getNoteStart: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

NoteDetails.defaultProps = {
  noteDetails: {},
  getNoteStart: () => {},
  match: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetails);
