
import React from 'react';
import Logo from './icons/Logo';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const getNavLinkClass = (page: Page): string =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      currentPage === page
        ? 'bg-slate-700 text-white'
        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
    }`;

  return (
    <header className="bg-slate-900/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#/home" className="flex-shrink-0 flex items-center gap-2 text-white font-bold text-xl">
              <Logo />
              HOMIGRAD
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#/home" className={getNavLinkClass('home')}>
                Сервера
              </a>
              <a href="#/store" className={getNavLinkClass('store')}>
                Привилегии
              </a>
              <a href="#/donate" className={getNavLinkClass('donate')}>
                Купить монеты
              </a>
              <a href="#/wiki" className={getNavLinkClass('wiki')}>
                Википедия
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
