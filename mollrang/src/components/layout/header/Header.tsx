import {Logo} from '@components/common/Logo';
import {ReactElement} from 'react';
import {styled} from 'styled-components';
import useTheme from '@hooks/useTheme';
import {BulbIcon} from '@components/common/icons/BulbIcon';

export const Header = (): ReactElement => {
  const {toggleTheme, isDarkMode} = useTheme();

  return (
    <HeaderContainer>
      <HeaderBox>
        <Logo mode={isDarkMode} />
        <button type='button' onClick={toggleTheme}>
          <BulbIcon />
        </button>
      </HeaderBox>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 66px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $white;
  z-index: 1;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  align-items: center;
`;
