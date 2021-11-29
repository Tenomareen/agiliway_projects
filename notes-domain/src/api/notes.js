import client from './client';

export const getNotes = () => client.get('/notes');
// export const getNotes = () => { client.get('/notes').then((response) => response.data).catch((error) => { throw error; }) };

export const postNote = (note) => client.post('/notes', note);

export const deleteNote = (id) => client.delete(`/notes/${id}`);

export const getNoteById = (id) => client.get(`/notes/${id}`);

export const putNote = (note, id) => client.put(`/notes/${id}`, note);
