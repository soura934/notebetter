import React from "react";
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import NotebookForm from './notebook_form_container';

class NotebookIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openModal: false};

        this.count = this.count.bind(this);
        this.createNotebookModal = this.createNotebookModal.bind(this);
    }
    componentDidMount(){
        this.props.fetchNotebooks();
    }
    // componentDidUpdate(prevProps){
    //     console.log(this.props.notebooks)
    //     console.log(prevProps)
    //     if(prevProps.notebooks.length !== this.props.notebooks.length) {
    //         this.props.fetchNotebooks();
    //     }
    // }
    count(){
        if (this.props.notebooks.length > 1){
            return <h2>{this.props.notebooks.length} notebooks</h2>
        } else {
            return <h2>{this.props.notebooks.length} notebook</h2>
        }

    }

    createNotebookModal(){
        if (this.state.openModal) {
            return (
                <div className="modal">
                    <div className="modal-child">
                        <div className="modal-info">
                            <h2>Create new notebook</h2>
                            <button onClick={() => this.setState({openModal: false})}>
                                <i className="fa fa-window-close"></i>
                            </button>
                        </div>
                        <p>Notebooks are useful for grouping notes around a common topic. They can be private or shared.</p>
                        <div><NotebookForm /></div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    render() { 
        if (this.props.notebooks === {}){
            return <p>No notebooks yet!</p>;
        }
        const sortedNotebooks = this.props.notebooks.sort(function (a, b) {
            return new Date(b.updated_at) - new Date(a.updated_at);
        });
        const notebookLi = sortedNotebooks.map(notebook => {
            return      <tr key={notebook.id}>
                            <td className="notebook-title">
                                <Link to={`/app/notebooks/${notebook.id}/notes`}>
                                {notebook.title}
                                </Link>
                            </td>
                            <td className="notebook-createdby">
                                {this.props.user.email}
                            </td>
                            <td className="notebook-updated">
                                {format(notebook.updated_at)}
                            </td>
                            <td className="notebook-action">
                                {/* <button onClick={
                                    () => this.props.deleteNotebook(notebook.id).
                                    then(() => this.props.fetchNotebooks())}> */}
                                        <i className="fas fa-ellipsis-h" ></i>
                                {/* </button> */}
                            </td>
                        </tr>
        })
        
        return ( <>
                <div className="notebook_index">
                    <div className="notebook-header">
                        <div className="notebook-header-top">
                            <h1>Notebooks</h1>
                        </div>
                        <div className="notebook-header-bottom">
                            <div className="notebook-header-count">
                                {this.count()}
                            </div>
                            <div className="new-notebook">
                                <button className="new-notebook-button"
                                onClick={()=>this.setState({openModal: true})}>New Notebook</button>
                                <div className={this.state.openModal ? 'open-modal' : 'none-modal'}>{this.createNotebookModal()}</div>
                            </div>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="title">Title</th>
                                <th className="created">Created by</th>
                                <th className="updated">Updated</th>
                                <th className="action">Action</th>                            
                            </tr>
                        </thead>
                        <tbody>
                            {notebookLi}
                        </tbody>
                    </table>
                </div>
            </>
         );
    }
}
 
export default NotebookIndex;