import { FC } from 'react';

import avatarIcon from '../../assets/icon/icon-avatar-reviews.svg';
import { StarsRating } from '../ui/stars-rating';
import { Text } from '../ui/text';

import styled from './review.module.scss';

interface ReviewProps {
  name: string,
  date: string,
  rating: number,
  text?: string,
}

export const Review:FC<ReviewProps> = ({ name, date, rating, text }) => (
  <div className={styled.review}>
    <div className={styled.reviewsTitle}>
        <img src={avatarIcon} alt="Avatar" />
        <div className={styled.reviewsName}>
            <Text span={true} largeSize={true}>
                {name}
            </Text>
            <Text span={true} largeSize={true}>
                {date}
            </Text>
        </div>
    </div>
    <StarsRating rating={rating} />
    <div className={styled.reviewsText}>
        <Text largeSize={true}>
            {text}
        </Text>
    </div>
  </div>
  )