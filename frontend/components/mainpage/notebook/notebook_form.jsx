import React from "react";

class NotebookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            user_id: this.props.user,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createNotebook(this.state);
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }
    
    render() { 
        return ( null );
    }
}
 
export default NotebookForm;