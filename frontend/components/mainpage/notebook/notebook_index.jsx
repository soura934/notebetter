import React from "react";

class NotebookIndex extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        this.props.fetchNotebooks();
    }
    render() { 
        if (this.props.notebooks === {}){
            return <p>No notebooks yet!</p>;
        }
        const notebookLi = this.props.notebooks.map(notebook => {
            return <li key={notebook.id}>
                {notebook.title}
            </li>
        })
        return ( <>
                {notebookLi}
            </>
         );
    }
}
 
export default NotebookIndex;