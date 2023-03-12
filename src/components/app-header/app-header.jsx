import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import {
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import headerStyle from './app-header.module.css';

const AppHeader = () => {
  return (
    <header className={headerStyle.header}>
      <div className={`${headerStyle.content} pb-4 pt-4`}>
        <nav className={`${headerStyle.navbar} `}>
          <div className={`${headerStyle.blockItem} `}>
            <a
              href="/some/valid/uri"
              className={`${headerStyle.item} pl-5 pr-5 pt-4 pb-4`}
            >
              <BurgerIcon />
              Конструктор
            </a>
            <a href="/some/valid/uri" className={`${headerStyle.item}`}>
              <ListIcon />
              Лента заказов
            </a>
          </div>
        </nav>
        <Logo />

        <div className={`${headerStyle.cabinet}`}>
          <a
            href="/some/valid/uri"
            className={`${headerStyle.item} pl-5 pr-5 pt-4 pb-4`}
          >
            <ProfileIcon />
            Личный Кабинет
          </a>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
