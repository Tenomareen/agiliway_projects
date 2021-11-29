/* eslint-disable no-undef */
import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { deepEqual } from 'assert';
import * as api from '../../../api/notes';

import {
  // getNotesStartAction,
  getNotesSuccessAction,
  getNotesErrorAction,
} from '../../Notes/actions/actions';

import { getNotesSaga } from '../notesSagas';

describe('Saga test', () => {
  const generator = cloneableGenerator(getNotesSaga)();
  test('Positive Saga call test', () => {
    const clone = generator.clone();
    // expect(clone.next().value).toEqual(put(getNotesStartAction()));
    // deepEqual(
    //   clone.next().value,
    //   put(getNotesStartAction()),
    //   'should add inProgress action first',
    // );
    deepEqual(
      clone.next().value.type,
      call(api.getNotes).type,
      'should call getNotes fetch',
    );
    deepEqual(
      clone.next().value.type,
      put(getNotesSuccessAction()).type,
      'should add Success action',
    );
    const result = clone.next().done;
    deepEqual(
      result,
      true,
      'should be done after end',
    );
  });
  test('Negative Saga call test', () => {
    const clone = generator.clone();
    deepEqual(
      clone.next().value.type,
      call(api.getNotes).type,
      'should call getNotes fetch',
    );
    deepEqual(
      clone.throw().value.type,
      put(getNotesErrorAction()).type,
      'should add Error action on error',
    );
  });
});
