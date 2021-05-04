import React from "react";
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import NotebookForm from './notebook_form_container';

class NotebookIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: null,
            title: "",
            openModal: false,
            openUpdateModal: false,
            dropdown: {},
        };

        this.count = this.count.bind(this);
        this.createNotebookModal = this.createNotebookModal.bind(this);
        this.dropdownDiv = this.dropdownDiv.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.updateNotebook = this.updateNotebook.bind(this);
    }
    componentDidMount(){
        this.props.fetchNotebooks();
    }

    count(){
        if (this.props.notebooks.length > 1){
            return <h2>{this.props.notebooks.length} notebooks</h2>
        } else {
            return <h2>{this.props.notebooks.length} notebook</h2>
        }

    }
    handleDelete(notebookId, title){
        if (title !== 'Quotes'){
            this.props.deleteNotebook(notebookId).
                then(() => this.props.fetchNotebooks())
        } else {
            alert("Quotes can't be deleted...try another");
        }
    }
    handleTitle(field){
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }
    updateNotebook(e){
        e.preventDefault();
        const {id, title} = this.state;
        this.props.updateNotebook({id, title}).then(() => this.props.fetchNotebooks());
        this.setState({openUpdateModal: false});
        this.dropdownAction(this.state.id);

   }
    updateForm(){
        if (this.state.openUpdateModal) {
            return (
                <div className="modal">
                    <div className="modal-child">
                        <div className="modal-info">
                            <h2>Rename Notebook</h2>
                            <button onClick={() => this.setState({openUpdateModal: false})}>
                                <i className="fa fa-window-close"></i>
                            </button>
                        </div>
                        <p></p>
                        <div>
                        <div className="notebook-form-parent">
                            <form className="notebook-form" onSubmit={this.updateNotebook}>
                                <label className="name">
                                    <h3>Name</h3>
                                    <input
                                        name="name"
                                        type="text"
                                        id="notebook-title"
                                        onChange={this.handleTitle('title')}
                                        placeholder='notebook name'
                                        value={this.state.title}
                                    />
                                </label>
                                <div className="notebook-form-button-parent">
                                    <button type="submit" className="notebook-form-button" >Save</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
    dropdownAction(notebookId){
        this.setState({id: notebookId})
        this.state.dropdown[notebookId] === true ?
            this.setState({dropdown: Object.assign({}, this.state.dropdown, {[notebookId]: false })}) :
            this.setState({dropdown: Object.assign({}, {[notebookId]: true })})
    }
   
    dropdownDiv(notebookId, title){
        if (this.state.dropdown) {
            return (
                <div className="action-li">
                    <li>
                        <button onClick={()=> {
                            this.setState({openUpdateModal: true});
                        }}>
                            Rename Notebook
                        </button>
                        <div className={this.state.openUpdateModal ? 'open-modal' : 'none-modal'}>{this.updateForm(notebookId)}</div>
                    </li>
                    <li>
                        <button onClick={() => this.handleDelete(notebookId, title)}>
                                Delete Notebook
                        </button>
                    </li>
                </div>
            )
        }else {
            return null
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
            const notebookActionsDropdown = this.state.dropdown[notebook.id];
            return (     <tr key={notebook.id}>
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
                                <button onClick={() => this.dropdownAction(notebook.id)}>
                                    <i className="fas fa-ellipsis-h" ></i>
                                </button>
                                <div className={notebookActionsDropdown ? 'action-li' : 'hidden'}>
                                    {this.dropdownDiv(notebook.id, notebook.title)}
                                </div>
                            </td>
                        </tr>
            )
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
                                    onClick={()=>this.setState({openModal: true})}>
                                    New Notebook
                                </button>
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