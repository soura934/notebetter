import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
         };
         this.handleSubmit = this.handleSubmit.bind(this);
         this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user);
      }

      update(field) {
          return e => this.setState({
              [field]: e.currentTarget.value
          })
      }
      demoLogin(e) {
          e.preventDefault();
          const demo = {
              email: 'email@email.com',
              password: 'password'
          }
          this.props.login(demo);
      }

      renderErrors(){
          return(
              <ul>
                {
                this.props.errors.map((error , idx) => (
                   <li key={idx}>
                        {error}
                    </li>
                ))}
              </ul>
            
          )
      }

    render() { 
        
        return ( 
        <div className="screen">
            <form className="form" onSubmit={this.handleSubmit}>

            <h1 className="header">Notebetter</h1>
            <ul>{this.renderErrors()}</ul>
            <div>
                <button className="demo" 
                onClick={this.demoLogin}>Demo Login
                </button>
                <p className="or">or</p>
            </div>
            <div className="input">
                    <input id="form-email"
                    type="text" 
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="Email"
                    />
            </div>
                <br />
                <div className="input">
                    <input className="input-form" 
                    type="text" 
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                    />
                </div>
                <br />
                <input className="submit-form" 
                type="submit" 
                value={this.props.formType}/>
            </form>
            
        </div>
         );
    }
}
 
export default SessionForm;