import styled from "styled-components";
import BarGraph from "./BarGraph.jsx";
import React from "react";
import StarRating from "./StarRating.jsx";
import Pros from "./Pros.jsx";
import Cons from "./Cons.jsx";
import ReviewsDetails from "./ReviewsDetail.jsx";

const ChartsWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
`;

const ReviewsCharts = props => {
  let recommended = 0;
  let total = 0;
  if (props) {
    for (var i in props.reviews) {
      recommended += props.reviews[i].recommended;
      total++;
    }
  }
  let recommendedPercent = Math.ceil((recommended / total) * 100);
  return (
    <div>
      <StarRating
        total={props.reviews.length}
        rating={props.rating}
        recommended={recommendedPercent}
        toggle={props.toggle}
      />
      <br />
      <ChartsWrapper>
        <BarGraph barClick={props.barClick} reviews={props.reviews} />
        <Pros reviews={props.reviews} />
        <Cons reviews={props.reviews} />
      </ChartsWrapper>

      <ReviewsDetails
        filteredBy={props.filteredBy}
        isFiltered={props.isFiltered}
        reviews={props.reviews}
      />
    </div>
  );
};

export default ReviewsCharts;