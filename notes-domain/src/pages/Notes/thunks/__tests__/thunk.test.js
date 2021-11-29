/* eslint-disable no-undef */
import thunk from 'redux-thunk';
// import '../../setupTests';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import { getNoteList } from '../notesThunk';
import { client } from '../../../../api/client';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const initialState = {
  data: [],
  loading: false,
};

describe('Test note Actions', () => {
  let store;
  beforeEach(() => {
    moxios.install(client);
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Loads all notes correctly', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: [
            {
              uuid: '98f89493-d557-4624-8cf6-005b0ae92895',
              name: 'string',
              author: 'string',
              description: 'string',
              createDate: '2021-11-26T09:55:07.213Z',
            }],
        },
      });
    });

    const expectedActions = [
      {
        type: 'GET_ALL_NOTES_IN_PROGRESS',
      },
      {
        payload: [
          {
            uuid: '98f89493-d557-4624-8cf6-005b0ae92895',
            name: 'string',
            author: 'string',
            description: 'string',
            createDate: '2021-11-26T09:55:07.213Z',
          }],

        type: 'GET_ALL_NOTES',
      },
    ];
    store.dispatch(getNoteList()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  // it('Returns error action when no notes found', (done) => {
  //   moxios.wait(() => {
  //     const request = moxios.requests.mostRecent();
  //     request.respondWith({
  //       status: 200,
  //       response: [],
  //     });
  //   });

  //   const expectedActions = [
  //     {
  //       type: 'GET_ALL_NOTES_ERROR',
  //     },
  //   ];
  //   return store.dispatch(getNoteList()).then(() => {
  //     const actualAction = store.getActions();
  //     expect(actualAction).toEqual(expectedActions);
  //     done();
  //   });
  // });
});
