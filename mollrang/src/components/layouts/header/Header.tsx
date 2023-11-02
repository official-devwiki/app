import {Logo} from '@components/common/Logo';
import {ReactElement} from 'react';
import {styled} from 'styled-components';
import useTheme from '@hooks/useTheme';
import {BulbIcon} from '@components/common/icons/BulbIcon';
import Link from 'next/link';
import {HamburgerIcon} from "@components/common/icons/HamburgerIcon";

const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({theme}) => theme.media.tablet} {
    display: none;
  }
`;
const FlexBox = styled.div`
  display: flex;
`
export const Header = (): ReactElement => {
  const {toggleTheme, isDarkMode} = useTheme();

  return (
    <HeaderContainer>
      <HeaderBox>
        <Link href={'/'}>
          <Logo mode={isDarkMode} />
        </Link>
        <FlexBox>
          <button type='button' onClick={toggleTheme}>
            <BulbIcon />
          </button>
          <HamburgerButton type='button'>
            <HamburgerIcon />
          </HamburgerButton>
        </FlexBox>
      </HeaderBox>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  min-width: 300px;
  height: 66px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: var(--bg);
  transition: background 0.2s ease-in, color 0.2s ease-in;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  align-items: center;
`;
