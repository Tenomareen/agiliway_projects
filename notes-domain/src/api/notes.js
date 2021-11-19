import client from "./client";

export const getNotes = () => {
    return client.get("/notes");
}

export const postNote = (note) => {
    return client.post("/notes", note);
}

export const deleteNote = (id) => {
    return client.delete(`/notes/${id}`);
}

export const getNoteById = (id) => {
    return client.get(`/notes/${id}`);
}

export const putNote = (note, id) => {
    return client.put(`/notes/${id}`, note);
}