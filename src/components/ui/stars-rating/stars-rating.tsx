import React, { FC } from 'react';

import emptyStar from '../../../assets/icon/icon__empty_star.svg';
import fullStar from '../../../assets/icon/icon__full_star.svg';
import { Text } from '../text';
import { Title } from '../title';

import styled from './stars-rating.module.scss';

interface StarsRatingProps {
  rating?: number,
  full?: boolean,
}

export const StarsRating: FC<StarsRatingProps> = ({ rating, full=false }) => {

  const ratingDefault = () => (
    <div className={full ? styled.fullText : undefined}>
      <Text>
        еще нет оценок
      </Text>
    </div>
  )

  const ratingText = () => (
    <div className={`${styled.fullTextColor} ${full ? styled.fullText : undefined}`}>
      <Title tag='h5'>
        {rating}
      </Title>
    </div>
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

    const ratingZeroStar = () => (
      [...Array(5)].map(() => <img src={emptyStar} alt="Rating star" width='20px' height='19px' key={Math.random()} />)
    )

    const fullHandler = () => {
      if (full) {
        if (rating) {
          return (
            <React.Fragment>
              {ratingHandler()}
              {ratingText()}
            </React.Fragment>
          )
        }
 
        return (
          <React.Fragment>
            {ratingZeroStar()}
            {ratingDefault()}
          </React.Fragment>
        )
      }

      return rating ? ratingHandler() : ratingDefault()
    }

  return (
    <div className={styled.rating}>
      {fullHandler()}
    </div>
  )
}