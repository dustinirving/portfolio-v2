import React from 'react';
import { Button, Navbar } from 'tailwind-component-library';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiFileDocument, mdiEmail } from '@mdi/js';

const navItems = [
  { text: 'About', href: '#about', active: true },
  { text: 'Experience', href: '#experience' },
  { text: 'Projects', href: '#projects' },
  { text: 'Education', href: '#education' },
];

interface HeaderProps {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
}

const icons = [
  { path: mdiGithub },
  { path: mdiLinkedin },
  { path: mdiFileDocument },
  { path: mdiEmail },
];

const Header: React.FC<HeaderProps> = (props) => {
  const { setIsDarkMode, isDarkMode } = props;
  return (
    <div className="flex-initial">
      <Navbar navItems={navItems} position="left">
        <div className="flex items-center">
          {/* <button className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button> */}
          {/* <h2 className="self-center text-xl  ml-6 text-gray-700 font-semibold whitespace-nowrap dark:text-white">
            Dustin Irving
          </h2> */}
          {/* <button> */}
          {icons.map(({ path }) => (
            <Button className="flex items-center mr-3" key={path} type="icon">
              <Icon path={path} color="currentColor" size={0.75} />
            </Button>
          ))}
          <Button
            className="flex items-center"
            onClick={() => setIsDarkMode(!isDarkMode)}
            type="icon"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          </Button>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
