import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useAuth } from '../contexts/firebase/auth.context';
import { BaseLayout } from '../layouts';
import styled from 'styled-components';
import SignInBtn from '../components/Button/SignInBtn';
import { device } from '../deviceQuerys';

const AccountContainer = styled.div `
  margin: 1rem 2rem;

  @media ${device.tablet}{
    margin: 2rem 4rem;
  }
`

const SignOutContainer = styled.div`

  div {
    display: flex;
  }

  img {
    width: 20vw;
    border: 1px solid #FF0033;
    margin-top: 1rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
    border-radius: 50%;
  }

  h2 {
    margin-bottom: 1rem;
  }
`

const Settings = styled.div`
  display: flex;
  flex-direction: column;
`

const SignInForm = styled.form `

`

const SignInFormGroup = styled.div `
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  input {
    border: 1px solid #fff;
    padding: 0.2rem;
    margin-bottom: 0.5rem;
  }
`

const SignOutBtn = styled.button `
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #FF0033;
  color: #fff;
  border: none;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 18rem;

  :hover {
    opacity: 0.75;
  }
`

const AccountPage = ({children}) => {
  const history = useHistory();
  const [signInForm, setSignInForm] = useState({
    txtEmail: '',
    txtPassword: ''
  });
  const {currentUser,signInWithEmailAndPassword,signOut} = useAuth();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const result = await signInWithEmailAndPassword(signInForm.txtEmail, signInForm.txtPassword);
    if (result) {
      history.goBack();
    }    
  };

  const handleInputChange = async (ev) => {
    setSignInForm({
      ...signInForm,
      [ev.target.name]: ev.target.value
    })
  };

  console.log(currentUser);

  return (
    <BaseLayout>
      <AccountContainer>
        <div>
          {!!currentUser === false &&
          <SignInForm onSubmit={(ev) => handleSubmit(ev)}>
            <SignInFormGroup>
              <label htmlFor="txtEmail">Email address</label>
              <input type="email" className="form-control" id="txtEmail" name="txtEmail"  aria-describedby="emailHelp" onChange={handleInputChange} value={signInForm.txtEmail} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </SignInFormGroup>

            <SignInFormGroup>
              <label htmlFor="txtPassword">Password</label>
              <input type="password" className="form-control" id="txtPassword" name="txtPassword" onChange={handleInputChange} value={signInForm.txtPassword} />
            </SignInFormGroup>

            <SignInBtn type="submit"/>
          </SignInForm>
          }

          {!!currentUser === true && 
            <SignOutContainer>
              <h2>Welcome back!</h2>
              <div>
                <img src={currentUser.photoURL} alt={currentUser.email} />
                <Settings>
                  <h4>Settings</h4>
                  <p>Your e-mail: {currentUser.email}</p>
                  <p>Your unique id: {currentUser.uid}</p>
                </Settings>
              </div>
              <SignOutBtn onClick={() => signOut()}>Sign out</SignOutBtn>
            </SignOutContainer>
          }
        </div>
      </AccountContainer>      

    </BaseLayout>
  )
}

export default AccountPage;
