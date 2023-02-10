import { FC } from 'react';

import facebookIcon from '../../assets/icon/Icon_facebook.svg';
import LinkedInIcon from '../../assets/icon/Icon_LinkedIn.svg';
import vkIcon from '../../assets/icon/Icon_vk.svg';
import instagramIcon from '../../assets/icon/icon-instagram.svg';
import { Text } from '../ui/text';

import styled from './footer.module.scss';

export const Footer:FC = () => (
    <footer className={styled.footer}>
      <div className={styled.wrapper}>
        <div className={styled.text}>
          <Text largeSize={true}>
            © 2020-2023 Cleverland. Все права защищены.
          </Text>
        </div>
        <div className={styled.iconBlock}>
          <img src={facebookIcon} alt='Facebook icon' />
          <img src={instagramIcon} alt='Instagram icon' />
          <img src={vkIcon} alt='Vk icon' />
          <img src={LinkedInIcon} alt='LinkedIn icon' />
        </div>
      </div>
    </footer>
  )