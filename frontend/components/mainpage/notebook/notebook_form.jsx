import React from "react";

class NotebookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            user_id: this.props.user.id,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createNotebook(this.state);
        this.setState({ title: ''});
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }
    
    render() { 
        return ( <div className="notebook-form-parent">
            <form className="notebook-form" onSubmit={this.handleSubmit}>
                <label className="name">
                    <h3>Name</h3>
                    <input
                        name="name"
                        type="text"
                        id="notebook-title"
                        onChange={this.handleChange('title')}
                        placeholder='Notebook name'
                        value={this.state.title}
                    />
                </label>
                <div className="notebook-form-button-parent">
                    <button type="submit" className="notebook-form-button" >Save</button>
                </div>
            </form>
        </div> );
    }
}
 
export default NotebookForm;