import React, { Dispatch, FC, ReactNode, SetStateAction, useContext, useMemo, useRef, useState } from 'react';

interface BurgerMenuContextProps {
  children: ReactNode,
}

interface BurgerMenuContextType {
  isActiveBurgerMenu: boolean,
  setIsActiveBurgerMenu: Dispatch<SetStateAction<boolean>>,
  ref: React.RefObject<HTMLButtonElement> | null,
}

const BurgerMenuContext = React.createContext<BurgerMenuContextType>({
  isActiveBurgerMenu: false,
  setIsActiveBurgerMenu: () => undefined,
  ref: null
});

export const BurgerMenuContextProvider:FC<BurgerMenuContextProps> = ({ children }) => {
  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false); 
  const ref = useRef<HTMLButtonElement>(null);

  const value = useMemo(
    () => ({
      isActiveBurgerMenu,
      setIsActiveBurgerMenu,
      ref,
    }),
    [isActiveBurgerMenu, ref]
  );

  return (
    <BurgerMenuContext.Provider value={value}>
      {children}
    </BurgerMenuContext.Provider>
  )
}

export function useBurgerMenuContext() {
  const {isActiveBurgerMenu, setIsActiveBurgerMenu, ref} = useContext(BurgerMenuContext);

  const burgerMenuHandler = () => {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
}

  return {isActiveBurgerMenu, setIsActiveBurgerMenu, burgerMenuHandler, ref}
}


