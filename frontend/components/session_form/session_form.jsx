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
        <div>
            <form onSubmit={this.handleSubmit}>
            <h1>{this.props.formType}</h1>
            <ul>{this.renderErrors()}</ul>
            <div>
                <button onClick={this.demoLogin}>Demo Login</button>
                <p>or</p>
            </div>
                <label>Email
                    <input type="text" 
                    value={this.state.email}
                    onChange={this.update('email')}
                    />
                </label>
                <br />
                <label>Password
                    <input type="text" 
                    value={this.state.password}
                    onChange={this.update('password')}
                    />
                </label>
                <br />
                <input type="submit" value={this.props.formType}/>
            </form>
        </div>
         );
    }
}
 
export default SessionForm;