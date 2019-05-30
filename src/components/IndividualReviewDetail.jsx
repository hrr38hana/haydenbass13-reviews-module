import React from "react";
import styled from "styled-components";
import StarRating from "react-star-ratings";

const ReviewWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const Rating = styled.div`
  margin: 0 7.5px;
  height: 20px;
  width: 20px;
  border-width: 1px;
  border-color: #666666;
  text-align: center;
  line-height: 20px;
  color: #666666;
  align-self: flex-end;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 400;
  border-style: solid;
  font-size: 14px;
`;

const ReviewHeader = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 10px;
`;
const ReviewerDetails = styled.div`
width:20%
height:100px;
margin-top: 20px;
font-family: Helvetica, Arial, san-serif;
color: #666666;
font-size:14px;
`;

const ReviewBody = styled.div`
  width: 80%;
  height: auto;
  font-family: Helvetica, Arial, san-serif;
`;

const ReviewComments = styled.p`
  font-family: Helvetica, Arial, san-serif;
  color: #666666;
  font-size: 14px;
`;

const IndividualReviewDetail = ({ review }) => {
  let recommend =
    review.recommended === 1
      ? "Yes, I would recommend to a friend"
      : "No, I would not recommend to a friend";
  return (
    <div>
      <ReviewWrapper>
        <ReviewBody>
          <ReviewHeader>
            <StarRating
              rating={review.stars}
              starRatedColor="#46B931"
              starDimension="20px"
              numberOfStars={5}
              starSpacing="0px"
              name="rating"
            />
            <Rating>{review.stars}</Rating>
            {review.title}
          </ReviewHeader>
          <ReviewComments>{review.body}</ReviewComments>
          <p>
            <a style={{ fontWeight: 700 }}>Bottom Line </a>
            <a style={{ fontWeight: 400, fontSize: 14, fontColor: 666666 }}>
              {recommend}
            </a>
          </p>
        </ReviewBody>
        <ReviewerDetails>
          <p>
            <a style={{ marginLeft: 3, fontWeight: 700 }}>Submitted </a>{" "}
            {review.created} Days Ago
          </p>
          <p>
            <a style={{ marginLeft: 3, fontWeight: 700 }}>By </a>{" "}
            {review.nickname}
          </p>
          <p>
            <a style={{ marginLeft: 3, fontWeight: 700 }}>From </a>{" "}
            {review.location}
          </p>
          <div
            style={{
              color: "#88D633",
              height: 15,
              width: 15,
              display: "inline-block"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19 19"
              version="1.1"
            >
              <title>Verified Buyer</title>
              <desc>Verified Buyer</desc>
              <g
                class="Page-1"
                stroke="none"
                stroke-width="1"
                fill="currentColor"
              >
                <g transform="translate(-76.000000, -467.000000)">
                  <g transform="translate(76.000000, 467.000000)">
                    <circle fill="currentColor" cx="9.5" cy="9.5" r="9.5" />
                    <g
                      transform="translate(6.000000, 7.000000)"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="square"
                    >
                      <path d="M4.4408921e-16,3 L2.5,5.5" class="Line" />
                      <path
                        d="M2.53852003,0.538520034 L7.11945293,5.11945293"
                        class="Line"
                        transform="translate(5.000000, 3.000000) scale(-1, 1) translate(-5.000000, -3.000000) "
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>{" "}
          </div>
          <span style={{ display: "inline-block", marginLeft: 5 }}>
            {" "}
            Verified Buyer
          </span>
        </ReviewerDetails>
      </ReviewWrapper>
    </div>
  );
};

export default IndividualReviewDetail;