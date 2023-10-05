import {ReactElement} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import usePageStore from '@store/page.store';
import {WriteIcon} from "@components/common/icons/WriteIcon";
import useUtilsStore from "@store/util.store";


const SideMenuLayout = styled.aside<{isOpen: boolean;}>`
  background-color: #1f2937;
  width: 256px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 1em;
  animation-duration: 400ms;
  
  @media screen and (max-width: 768px) {
    animation-name: ${(props) => !props.isOpen && 'slideout'};
    animation-fill-mode: both;
  }

  @keyframes slideout {
    from{
      left: 0%;
    }
    to{
      opacity: 0;
      left: -100%;
    }
  }
`;

const SideMenuBox = styled.div`
  width: 100%;
  height: 100%;
`;

const SideMenuLists = styled.ul``;
const SideMenuItem = styled.li`
  .text {
    color: rgb(107 114 128);
  }
`;



export const SideMenu = (): ReactElement => {
  const isOpen = useUtilsStore(state => state.isOpen);

  const setCurrentPageTitle = usePageStore(state => state.setCurrentPageTitle);
  const router = useNavigate();

  const redirectHome = () => {
    setCurrentPageTitle('데브위키');
    router('/');
  };

  const redirectMollrangManagement = () => {
    setCurrentPageTitle('몰랑');
    router('/mollrang');
  };

  return (
    <SideMenuLayout isOpen={isOpen}>
      <SideMenuBox>
        <SideMenuLists>
          <SideMenuItem>
            <button
              onClick={redirectHome}
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
            >
              <svg
                className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 21'
              >
                <path
                  d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                <path
                  d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
              </svg>
              <span className='ml-3 text'>Dashboard</span>
            </button>
          </SideMenuItem>
          <SideMenuItem>
            <button
              onClick={redirectMollrangManagement}
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
            >
              <WriteIcon />
              <span className='flex-1 ml-3 whitespace-nowrap text'>몰랑</span>
            </button>
          </SideMenuItem>
        </SideMenuLists>
      </SideMenuBox>
    </SideMenuLayout>
  );
};
