import React from "react";
import StarRatings from "react-star-ratings";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 36px;
  margin-bottom: -10px;
  font-family: Helvetica, Arial, sans-serif;
`;
const Average = styled.div`
  margin: 0 7.5px;
  float: right;
  height: 36px;
  width: 36px;
  border-style: solid;
  border-width: 1px;
  border-color: #666666;
  text-align: center;
  line-height: 36px;
  color: #666666;
  align-self: flex-end;
  font-family: Helvetica, Arial, sans-serif;
`;
const ReviewsTotal = styled.div`
  color: #666666;
  font-size: 13px;
  padding: 7.5px;
  text-align: middle;
  align-self: flex-end;
  font-family: Helvetica, Arial, sans-serif;
`;
const PercentRecommend = styled.div`
  font-size: 24px;
  line-height: 27px;
  margin-left: auto;
  color: #666;
  order: 1;
  align-self: flex-end;
  font-family: Helvetica, Arial, sans-serif;
`;
const RecommendStatement = styled.div`
  font-size: 10px;
  max-width: 145px;
  margin-left: 7.5px;
  color: #666;
  order: 2;
  align-self: flex-end;
  font-family: Helvetica, Arial, sans-serif;
`;
const AddReview = styled.p`
  font-weight: 500;
  color: #0b7bc1;
  &:hover {
    text-decoration: underline;
  }
`;
const StarRating = props => {
  return (
    <div>
      <Wrapper>
        {" "}
        <StarRatings
          rating={props.rating}
          starRatedColor="#46B931"
          starDimension="25px"
          numberOfStars={5}
          starSpacing="0px"
          name="rating"
        />
        <Average>{props.rating.toFixed(1)}</Average>
        <ReviewsTotal>{props.total} Reviews</ReviewsTotal>
        <AddReview onClick={props.toggle}>Write a Review</AddReview>
        <PercentRecommend>{props.recommended}%</PercentRecommend>
        <RecommendStatement>
          of respondents would recommend this to a friend
        </RecommendStatement>
      </Wrapper>
    </div>
  );
};

export default StarRating;