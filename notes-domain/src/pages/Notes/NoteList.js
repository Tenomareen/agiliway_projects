import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row, Button, Empty, Spin,
} from 'antd';
import PropTypes from 'prop-types';
import Note from './Note';
import ModalAdd from './ModalAdd/ModalCreate';
import ModalDelete from './ModalDelete/ModalDelete';
import ModalEdit from './ModalEdit/ModalEdit';
import {
  closeNotes, createNoteStartAction, editNoteStartAction, getNoteForEditNoteStartAction, getNotesStartAction, modalNoteCloseAction, modalNoteDeleteStartAction, modalNoteShowAction,
} from './actions/actions';
import {
  createNote,
  deleteNoteById,
  editNote,
  getNoteForEdit,
  getNoteList,
} from './thunks/notesThunk';
import { loadingSelector, notesSelector } from './selectors/notesSelectors';
import {
  idSelector, modalLoadingSelector, noteEditSelector, typeSelector,
} from './selectors/modalSelectors';

class NoteList extends Component {
  componentDidMount() {
    const { getNotesStart } = this.props;
    getNotesStart();
  }

  componentWillUnmount() {
    const { closeNotes } = this.props;
    closeNotes();
  }

  handleSubmit = (editValues) => {
    const { editNoteStart } = this.props;
    const note = {
      name: editValues.name,
      author: editValues.author,
      description: editValues.description,
    };
    editNoteStart(note, editValues.uuid);
  }

  render() {
    const {
      type, loading, notes, noteEdit, id, loadingModal, showModal, closeModal, deleteNoteStart, createNoteStart, getNoteForEditNoteStart,
    } = this.props;
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>Notes</h1>
          <Button type="primary" onClick={() => showModal('create')}>
            Add New Note
          </Button>
        </div>
        <div className="site-card-wrapper">
          <Row gutter={16} style={{ justifyContent: 'space-around' }}>
            {(!notes.length && !loading) && <Empty />}
            {!loading
              && notes.map((note, index) => (
                <Note
                  key={index}
                  note={note}
                  showModal={showModal}
                  getNoteForEdit={getNoteForEditNoteStart}
                />
              ))}
          </Row>
          {loading && (
          <div>
            <Spin />
            {' '}
            Loading Note List...
          </div>
          )}
          {type === 'create' && (
            <ModalAdd
              visible
              closeModal={closeModal}
              handleSubmitCreate={createNoteStart}
              loading={loadingModal}
            />
          )}
          {type === 'delete' && (
            <ModalDelete
              id={id}
              visible
              handleDelete={deleteNoteStart}
              closeModal={closeModal}
              loading={loadingModal}
            />
          )}
          {type === 'edit' && (
            <ModalEdit
              visible
              closeModal={closeModal}
              noteEdit={noteEdit}
              handleSubmitEdit={this.handleSubmit}
              loading={loadingModal}
            />
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  type: typeSelector(state),
  notes: notesSelector(state),
  loading: loadingSelector(state),
  noteEdit: noteEditSelector(state),
  id: idSelector(state),
  loadingModal: modalLoadingSelector(state),
});

const mapDispatchToProps = {
  getNoteForEditNoteStart: getNoteForEditNoteStartAction,
  editNoteStart: editNoteStartAction,
  createNoteStart: createNoteStartAction,
  getNotesStart: getNotesStartAction,
  getData: getNoteList,
  showModal: modalNoteShowAction,
  handleDelete: deleteNoteById,
  closeModal: modalNoteCloseAction,
  handleSubmitEdit: editNote,
  handleSubmitCreate: createNote,
  getNote: getNoteForEdit,
  closeNotes,
  deleteNoteStart: modalNoteDeleteStartAction,
};

NoteList.propTypes = {
  getNoteForEditNoteStart: PropTypes.func,
  editNoteStart: PropTypes.func,
  createNoteStart: PropTypes.func,
  type: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  notes: PropTypes.array,
  loading: PropTypes.bool,
  noteEdit: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    createDate: PropTypes.string,
  }),
  id: PropTypes.string,
  loadingModal: PropTypes.bool,
  showModal: PropTypes.func,
  closeModal: PropTypes.func,
  closeNotes: PropTypes.func,
  getNotesStart: PropTypes.func,
  deleteNoteStart: PropTypes.func,
};

NoteList.defaultProps = {
  type: '',
  notes: [],
  loading: true,
  noteEdit: {},
  id: '',
  loadingModal: true,
  showModal: () => {},
  closeModal: () => {},
  closeNotes: () => {},
  getNotesStart: () => {},
  deleteNoteStart: () => {},
  createNoteStart: () => {},
  editNoteStart: () => {},
  getNoteForEditNoteStart: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
