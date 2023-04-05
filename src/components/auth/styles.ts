import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  p {
    font-size: 24px;
  }
  p:not(.error) {
    margin-bottom: 20px;
    color: blue;
  }
`;

export const AuthForm = styled.form``;

export const LoginPageTitle = styled.p``;

export const AuthWrapper = styled.div`
  margin-bottom: 10px;
`;

export const AuthTitle = styled.span`
  font-size: 20px;
`;

export const LoginInput = styled.input`
  font-size: 20px;
`;

export const PassInput = styled(LoginInput)`
  margin-left: 9px;
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  background-color: #e1e8ee;
  border-radius: 6px;
  font-size: 24px;
  :hover {
    background-color: cyan;
  }
`;

export const ErrorMsg = styled.p.attrs({className: 'error'})`
  font-size: 20px;
  margin-top: 10px;
  color: darkred;
`;

export const SuccessAuthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SuccessImg = styled.img`
  height: 70px;
`;

export const SuccessMsg = styled.p`
  text-align: center;
  font-size: 24px;
  margin: 40px 0;
`;
