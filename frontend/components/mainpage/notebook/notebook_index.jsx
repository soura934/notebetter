import React from "react";
import { format } from 'timeago.js';
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
    count(){
        if (this.props.notebooks.length > 1){
            return <h2>{this.props.notebooks.length} notebook</h2>
        } else {
            return <h2>{this.props.notebooks.length} notebooks</h2>
        }

    }
    createNotebookModal(){
        if (this.state.openModal) {
            return (
                <div className="modal">
                    <i 
                    className="fa fa-window-close"
                    onClick={() => this.setState({openModal: false})}></i>
                    <div><NotebookForm /></div>
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

        const notebookLi = this.props.notebooks.map(notebook => {
            return      <tr key={notebook.id}>
                            <td className="notebook-title">
                                {notebook.title}
                            </td>
                            <td className="notebook-createdby">
                                {this.props.user.email}
                            </td>
                            <td className="notebook-updated">
                                {format(notebook.updated_at)}
                            </td>
                            <td className="notebook-action">
                            <i className="fas fa-trash"></i>
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
                                <button onClick={()=>this.setState({openModal: true})}>New Notebook</button>
                            </div>
                            <div className={this.state.openModal ? 'open-modal' : 'none-modal'}>{this.createNotebookModal()}</div>
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