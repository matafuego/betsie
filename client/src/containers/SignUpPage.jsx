import React, { PropTypes } from 'react';
import SignUpForm from '../components/SignUpForm.jsx';
import Server from '../modules/Server';
import ErrorHandler from '../modules/ErrorHandler.js';

class SignUpPage extends React.Component {

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
        name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
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

  clearErrors() {
    this.setState({
      errors: {}
    });
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    Server.post('/auth/signup', this.state.user)
      .then((response) => {

        this.clearErrors();

        // set a message
        localStorage.setItem('successMessage', response.message);

        // make a redirect
        this.context.router.replace('/login');
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
   * Render the component.
   */
  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;