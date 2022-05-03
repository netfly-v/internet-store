import { useState } from 'react';
import { connect } from 'react-redux';
import { authSelector, errorSelector } from '../../store/state/auth/selectors';
import { loginThunk } from '../../store/thunks/authThunk';
import styles from './LoginPage.module.css';
import successImage from '../../images/success.png';

const LoginPage = ({ authUser, authenticate, error }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [clientError, setClientError] = useState('');

  const submitLogin = e => {
    e.preventDefault();

    if (login === '') {
      setClientError('Login required');
      if (password === '') {
        setClientError('Pass required');
      }
      return;
    }

    authenticate(login, password);
  };

  return !authUser.username ? (
    <form onSubmit={submitLogin}>
      <div className={styles.loginPage}>
        <p>User log in:</p>
        <div className={styles.auth}>
          <span>Login: </span>
          <input
            className={styles.loginInput}
            onChange={({ target }) => {
              setLogin(target.value);
            }}
          />
        </div>

        <div className={styles.auth}>
          <span>Pass: </span>
          <input
            className={styles.passInput}
            type="password"
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        </div>

        <button type="submit" className={styles.loginButton}>
          Sign in
        </button>
        {clientError ? <p className={styles.error}>{clientError}</p> : null}
        {error ? <p className={styles.error}>{error}</p> : null}
      </div>
    </form>
  ) : (
    <div className={styles.success}>
      <img src={successImage} className={styles.successImage} alt="success img" />
      <p className={styles.successMessage}>User {authUser.username} successfully logged in</p>
    </div>
  );
};

const mapStateToProps = state => ({
  authUser: authSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = {
  authenticate: loginThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
