import {ReactElement} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {Typography} from "../common/typography/Typography";
import usePageStore from "../../store/page.store";

interface Props {
  height: number;
}

const HeaderMenu = styled.nav`
  width: 100%;
  padding-left: 256px;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
`;
const MenuItem = styled.li``;

const HeaderLayout = styled.header<{height: number}>`
    width: 100%;
    height: ${(props) => props.height}px;
    padding-right: 1em;
    display: flex;
    align-items: center;
`;

export const Header = (props: Props): ReactElement => {
  const {pageTitle} = usePageStore();
  const {height} = props;
  const router = useNavigate();

  const signOut = async (): Promise<void> => {
    try {
      await router('/sign-in');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <HeaderLayout height={height}>
      <HeaderMenu>
        <MenuList>
          <MenuItem>
            <Typography variant={'h1'} color={'black'} weight={'bold'}>
              {pageTitle}
            </Typography>
          </MenuItem>
          <MenuItem>
            <button
              type={'button'}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={signOut}
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
            </button>
          </MenuItem>
        </MenuList>
      </HeaderMenu>
    </HeaderLayout>
  )
}