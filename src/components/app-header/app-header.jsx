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
            <div className={`${headerStyle.item} pl-5 pr-5 pt-4 pb-4`}>
              <BurgerIcon />
              Конструктор
            </div>
            <div className={`${headerStyle.item}`}>
              <ListIcon />
              Лента заказов
            </div>
          </div>
        </nav>
        <Logo />
        <div className={`${headerStyle.cabinet}`}>
          <div className={`${headerStyle.item} pl-5 pr-5 pt-4 pb-4`}>
            <ProfileIcon />
            Личный Кабинет
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
