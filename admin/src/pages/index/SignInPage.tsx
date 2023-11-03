import {SignIn} from 'components/users/SignIn';
import {ReactElement} from 'react';
import styled from 'styled-components';

const SignInPageLayout = styled.div`
  width: 100%;
  height: 100%;
`;
const SignInContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: 600px;
  padding: 0 0.5em;
`;
const SignInBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const SignInFormContainer = styled.fieldset`
  background-color: #161a20;
  border-radius: 4px;
  padding: 1em;
  width: 100%;
  height: 40vh;
  box-shadow: 0 1px 10px black;
`;

export const SignInPage = (): ReactElement => {
  return (
    <SignInPageLayout>
      <SignInContainer>
        <SignInBox>
          <SignInFormContainer>
            <SignIn />
          </SignInFormContainer>
        </SignInBox>
      </SignInContainer>
    </SignInPageLayout>
  );
};
