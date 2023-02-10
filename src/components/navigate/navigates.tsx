import { FC, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useBurgerMenuContext } from '../../context/burger-menu';
import categoriesData from '../../data/category.json'
import { useWindowSize } from '../../hooks/use-window-size';
import { Text } from '../ui/text';
import { Title } from '../ui/title';

import styled from './navigates.module.scss';

const BooksCategoryArrowDownBlack = () => (
  <svg width="14" height="8" viewBox="0 0 14 8" fill='transparent' xmlns="http://www.w3.org/2000/svg">
    <path d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"/>
      <defs>
        <linearGradient id="paint0_linear" x1="6.74785" y1="-14.875" x2="-23.3724" y2="26.9297" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F83600"/>
          <stop offset="1" stopColor="#F9D423"/>
        </linearGradient>
    </defs>
  </svg>
)

const BooksCategoryArrowUp = () => (
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893L13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711C13.3166 8.09763 12.6834 8.09763 12.2929 7.70711L7 2.41421L1.70711 7.70711C1.31658 8.09763 0.683417 8.09763 0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893Z" fill="url(#paint0_linear_13904_5908)"/>
    <defs>
      <linearGradient id="paint0_linear_13904_5908" x1="6.74785" y1="-14.875" x2="-23.3724" y2="26.9297" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F83600"/>
        <stop offset="1" stopColor="#F9D423"/>
      </linearGradient>
    </defs>
  </svg>
)

export const Navigates:FC = () => {
  const { isActiveBurgerMenu: menuIsActive, setIsActiveBurgerMenu, burgerMenuHandler, ref: buttonMenuRef} = useBurgerMenuContext();
  const [isOpenCategory, setIsOpenCategory] = useState(true);
  const [refButtonMenu, setRefButtonMenu] = useState<React.Ref<HTMLButtonElement> | null>(null);
  const navRef = useRef<HTMLInputElement>(null);

  const windowSize = useWindowSize()

  const NavLinkStyles = ({isActive}:  {isActive: boolean} ) => isActive ? styled.active : styled.noActive;
  const NavSubLinkStyles = ({isActive}:  {isActive: boolean}) => isActive ? styled.subActive : styled.subNoActive;

  const booksCategoryToggle = () => {
    setIsOpenCategory(!isOpenCategory);
  }

  const booksCategoryHide = () => {
    setIsOpenCategory(false);
  }

  useEffect(() => {
    setRefButtonMenu(buttonMenuRef)
  }, [buttonMenuRef])

  useEffect(()=> {
    if (windowSize.width && (windowSize.width <= 900)) {
      if (menuIsActive) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'visible'
      }
    } else {
      document.body.style.overflowY = 'visible'
    }
  },[menuIsActive, windowSize.width, setIsActiveBurgerMenu])

  useEffect(()=> {
    const closeMenu = (event: any) => {
        if (navRef.current && !navRef.current.contains(event.target) && buttonMenuRef?.current && !buttonMenuRef.current.contains(event.target)) {
          setIsActiveBurgerMenu(false)
        }
    };

    document.body.addEventListener('click', closeMenu)

    return (() => document.body.removeEventListener('click', closeMenu) )
  }, [buttonMenuRef, refButtonMenu, setIsActiveBurgerMenu])

  return (
    <nav ref={navRef} className={`${styled.nav} ${menuIsActive ? styled.menuActive : null}`} data-test-id='burger-navigation'>
      <div className={styled.category}>
        <div className={styled.block}>
          <NavLink to="/books" className={NavLinkStyles} onClick={booksCategoryToggle}>
            <div className={styled.navTitle} data-test-id={windowSize.width && windowSize.width <= 900 ? 'burger-showcase' :'navigation-showcase'} >
              <Title tag='h5'>
                Витрина книг
                <span className={styled.booksCategoryArrow}>
                  {isOpenCategory ?  <BooksCategoryArrowUp /> : <BooksCategoryArrowDownBlack />}
                </span>
              </Title>
            </div>
          </NavLink>
          <div className={`${styled.bookCategory} ${isOpenCategory ? null : styled.bookCategoryClose}`}>
            <ul className={styled.list}>
              <li>
                <NavLink to="/books/all" className={NavSubLinkStyles} onClick={burgerMenuHandler}>
                  <div className={styled.categoryTitle} data-test-id={windowSize.width && windowSize.width <= 900 ? 'burger-books' :'navigation-books'}>
                    <Text largeSize={true} span={true}>
                      Все книги
                    </Text>
                  </div>
                </NavLink>
              </li>
              {categoriesData.categories.map(item => (
                <li key={item.id}>
                  <NavLink to={`/books/${item.category}`} className={NavSubLinkStyles} onClick={burgerMenuHandler}>
                      <div className={styled.categoryBlock}>
                        <div className={styled.categoryTitle}>
                          <Text largeSize={true} span={true}>
                            {item.name}
                          </Text>
                        </div>
                        <div className={styled.categoryAmount}>
                          <Text span={true}>
                            {item.bookAmount}
                          </Text>
                        </div>
                      </div>
                  </NavLink> 
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styled.block}>
          <NavLink to="/contract" className={NavLinkStyles} onClick={() => {burgerMenuHandler(); booksCategoryHide();}}>
            <div className={styled.navTitleOther} data-test-id={windowSize.width && windowSize.width <= 900 ? 'burger-terms' :'navigation-terms'}>
              <Title tag='h5'>
                Правила пользования
              </Title>
            </div>
          </NavLink>
        </div>
        <div className={styled.block}>
          <NavLink to="/terms" className={NavLinkStyles} onClick={() => {burgerMenuHandler(); booksCategoryHide();}}>
            <div className={styled.navTitleOther} data-test-id={windowSize.width && windowSize.width <= 900 ? 'burger-contract' :'navigation-contract'}>
              <Title tag='h5'>
                Договор оферты
              </Title>
            </div>
          </NavLink>
        </div>
      </div>
      <div className={`${styled.category} ${styled.loginBlock}`}>
        <div className={styled.block}>
          <Title tag='h5'>
            Профиль
          </Title>
        </div>
        <div className={styled.block}>
          <Title tag='h5'>
            Выход
          </Title>
        </div>
      </div>
    </nav>
  )
}