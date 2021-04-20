import React from "react";

class NotebookIndex extends React.Component {
    constructor(props) {
        super(props);
        this.count = this.count.bind(this);
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
    render() { 
        if (this.props.notebooks === {}){
            return <p>No notebooks yet!</p>;
        }

        const notebookLi = this.props.notebooks.map(notebook => {
            return  <li key={notebook.id}>
                        {notebook.title}
                    </li>

        })
        
        return ( <>
                <div className="notebook_index">
                    <div className="notebook-header">
                        <div className="notebook-header-top">
                            <h1>Notebooks</h1>
                        </div>
                        <div className="notebook-header-count">
                            {this.count()}
                        </div>
                        <div className="new-notebook">
                            <h1>New Notebook</h1>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="title">Title</th>
                                <th className="created">Created by</th>
                                <th className="updated">Updated</th>
                                <th className="actions">Actions</th>                            
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