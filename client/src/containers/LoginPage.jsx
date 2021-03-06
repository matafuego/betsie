import React, { PropTypes } from 'react';
import Auth from '../modules/Auth';
import Server from '../modules/Server';
import LoginForm from '../components/LoginForm.jsx';
import ErrorHandler from '../modules/ErrorHandler.js';


class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  clearErrors() {
    this.setState({
      errors: {}
    });
  }

  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    Server.post('/auth/login', this.state.user)
      .then((response) => {

        console.log(response);
        this.clearErrors();

        Auth.authenticateUser(response.token);

        // change the current URL to /
        this.context.router.replace('/');
      })
      .catch((error) => {
        ErrorHandler.handle(error, (errors) => {
          this.setState({
            errors: errors
          });
        })
      });
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LoginPage;