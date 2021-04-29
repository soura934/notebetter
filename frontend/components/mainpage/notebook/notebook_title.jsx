import React from "react";
import { useSelector } from "react-redux";
import {useRouteMatch} from 'react-router-dom';

const NotebookTitle = () => {
    const notebooks = useSelector(state => state.entities.notebooks);
    console.log(notebooks);
    const match = useRouteMatch();
    let notebook = notebooks[match.params.notebookId];
    let NotebookTitle = "";
    if(notebook) {
        NotebookTitle = notebook.title;
    }
    return (
        <div className="instruction">
                <h1 className=".instruction-text">{NotebookTitle}</h1>
        </div>
    );
}

export default NotebookTitle;