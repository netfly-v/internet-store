import React from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';
import {authSelector, errorSelector} from '../../store/state/auth/selectors';
import {loginThunk} from '../../store/thunks/authThunk';
import successImage from '../../images/success.png';
import {
  LoginPageWrapper,
  LoginPageTitle,
  AuthWrapper,
  AuthTitle,
  LoginInput,
  PassInput,
  SubmitButton,
  ErrorMsg,
  AuthForm,
  SuccessAuthWrapper,
  SuccessImg,
  SuccessMsg,
} from './styles';

type LoginPageProps = {
  authUser: {username: string; password: string; userId: number};
  authenticate: (login: string, password: string) => void;
  error: string;
};
const LoginPage: React.FC<LoginPageProps> = ({authUser, authenticate, error}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [clientError, setClientError] = useState('');

  const submitLogin = (e: {preventDefault: () => void}) => {
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
    <AuthForm onSubmit={submitLogin}>
      <LoginPageWrapper>
        <LoginPageTitle>User log in:</LoginPageTitle>
        <AuthWrapper>
          <AuthTitle>Login: </AuthTitle>
          <LoginInput
            onChange={({target}) => {
              setLogin(target.value);
            }}
          />
        </AuthWrapper>

        <AuthWrapper>
          <AuthTitle>Pass: </AuthTitle>
          <PassInput
            type="password"
            onChange={({target}) => {
              setPassword(target.value);
            }}
          />
        </AuthWrapper>

        <SubmitButton type="submit">Sign in</SubmitButton>
        {clientError ? <ErrorMsg>{clientError}</ErrorMsg> : null}
        {error ? <ErrorMsg>{error}</ErrorMsg> : null}
      </LoginPageWrapper>
    </AuthForm>
  ) : (
    <SuccessAuthWrapper>
      <SuccessImg src={successImage} alt="success img" />
      <SuccessMsg>User {authUser.username} successfully logged in</SuccessMsg>
    </SuccessAuthWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  authUser: authSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = {
  authenticate: loginThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
