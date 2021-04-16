export const fetchNotebook = (notebookId) => {
    return $.ajax({
        url: `/api/notebooks/${notebookId}`
    })
}

export const fetchNotebooks = () => {
    return $.ajax({
        url: '/api/notebooks/',
        // error: (err) => console.log(err)

    })
}

export const createNotebook = (notebook) => {
    return $.ajax({
        method: 'POST',
        url: '/api/notebooks/',
        data: { notebook }
    })
}

export const updateNotebook = (notebook) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/notebooks/${notebook.id}`,
        data: { notebook }
    })
}
export const deleteNotebook = (notebookId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/notebooks/${notebookId}`
    })
}