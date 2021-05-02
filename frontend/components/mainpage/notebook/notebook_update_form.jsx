handleUpdat
updateForm(){
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