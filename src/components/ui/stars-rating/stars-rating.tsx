import { FC } from 'react';

import emptyStar from '../../../assets/icon/icon__empty_star.svg';
import fullStar from '../../../assets/icon/icon__full_star.svg';
import { Text } from '../text';

import styled from './stars-rating.module.scss';

interface StarsRatingProps {
  rating?: number,
}

export const StarsRating: FC<StarsRatingProps> = ({ rating }) => {

  const ratingDefault = () => (
    <p>
      <Text>
        еще нет оценок
      </Text>
    </p>
  )

  const ratingHandler = () => (
      [...Array(5)].map((item, index) => {
        if (rating) {
          if (index < rating) {
            return (<img src={fullStar} alt="Rating star" width='20px' height='19px' key={Math.random()} />)
          }

          return <img src={emptyStar} alt="Rating star" width='20px' height='19px' key={Math.random()} />
        }

        return null
      })
    )
    

  return (
          <div className={styled.rating}>
            {rating ? ratingHandler() : ratingDefault()}
          </div>
  )
}