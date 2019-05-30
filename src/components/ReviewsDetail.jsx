import React from "react";
import styled from "styled-components";
import IndividualReviewDetail from "./IndividualReviewDetail.jsx";

const Header = styled.div`
  display: flex;
  justify-self: center;
  width: 100%;
  height: 55px;
  background-color: #f6f6f6;
  line-height: 50px;
  font-weight: 700;
  font-size: 18px;
  padding: 5px;
  font-family: Helvetica;
  margin-bottom: 10px;
  margin-top: 15px;
`;

class ReviewsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews.sort((a, b) => a.created - b.created),
      isFiltered: props.isFiltered,
      filteredReviews: props.reviews.sort((a, b) => a.created - b.created),
      filteredBy: this.props.filteredBy
    };
  }
  componentDidMount() {
    console.log(this.state);
  }
  componentDidUpdate() {
    if (this.state.filteredBy !== this.props.filteredBy) {
      this.filterReviews();
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      reviews: props.reviews.sort((a, b) => a.created - b.created),
      isFiltered: props.isFiltered,
      filteredReviews: props.reviews.sort((a, b) => a.created - b.created),
      filteredBy: this.props.filteredBy
    });
  }
  filterReviews() {
    if (this.props.filteredBy === null) {
      this.setState({
        filteredReviews: this.props.reviews,
        filteredBy: this.props.filteredBy
      });
    } else {
      let revArray = [];
      this.state.reviews.map(el => {
        if (el.stars === this.props.filteredBy) {
          revArray.push(el);
        }
      });
      if (revArray.length) {
        revArray = revArray.sort((a, b) => a.created - b.created);
        this.setState({
          filteredReviews: revArray,
          filteredBy: this.props.filteredBy
        });
      }
    }
  }
  render() {
    return this.state.reviews.length !== 0 ? (
      <div>
        <Header>Reviewd by {this.props.reviews.length} Customers </Header>
        {this.state.filteredReviews.map((el, i) => {
          return <IndividualReviewDetail key={i} review={el} />;
        })}
      </div>
    ) : (
      <div />
    );
  }
}

export default ReviewsDetails;