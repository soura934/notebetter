export const fetchNote = (noteId) => {
    return $.ajax({
        url: `/api/notes/${noteId}`
    })
}

export const fetchNotes = () => {
    return $.ajax({
        url: '/api/notes/',
        // error: (err) => console.log(err)

    })
}

export const createNote = (note) => {
    return $.ajax({
        method: 'POST',
        url: '/api/notes/',
        data: { note }
    })
}

export const updateNote = (note) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/notes/${note.id}`,
        data: { note }
    })
}
export const deleteNote = (noteId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/notes/${noteId}`
    })
}



