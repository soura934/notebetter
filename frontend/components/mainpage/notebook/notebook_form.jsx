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
        return ( <div>
            <form className="notebook-form" onSubmit={this.handleSubmit}>
                <label for="name">
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
                <button>Save</button>
            </form>
        </div> );
    }
}
 
export default NotebookForm;