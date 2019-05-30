import "@babel/polyfill/noConflict";
import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import styled from "styled-components";
import ReviewsCharts from "./ReviewsCharts.jsx";
import ReviewForm from "./AddReviewForm.jsx";

const backgroundImage =
  "https://loading.io/spinners/rolling/lg.curve-bars-loading-indicator.gif";

const BigWrapper = styled.div`
  position: relative;
  max-width: 1050px;
  min-width: 970px;
  left: 50%;
  transform: translate(-50%);
`;
const ReviewWrapper = styled.div`
// visibility:visible;
//   &:active{
//     visibility:visible;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      product: this.props.id,
      rating: 0,
      isHidden: true,
      isFiltered: false,
      filteredStar: null
    };
    this.addReview = this.addReview.bind(this);
    this.toggleReviewWindow = this.toggleReviewWindow.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
  }

  componentDidMount() {
    this.getAverage();
  }
  getAverage() {
    let total = 0,
      average;
    this.state.reviews.forEach(rev => {
      total += rev.stars;
    });
    average = total / this.state.reviews.length;
    this.setState({ rating: average });
  }
  addReview(data) {
    for (var i in data) {
      if (
        i !== "pros" &&
        i !== "cons" &&
        i !== "describe_yourself" &&
        i !== "best_uses" &&
        data[i] === null
      ) {
        alert(`${i} Cannot Be Left Blank`);
        return;
      }
    }
    $.post(`/${data.product_Id}`, data)
      .done(location.reload())
      .catch(err => {
        alert("Review NOT Posted! : ", err);
      });
  }
  toggleReviewWindow() {
    this.setState({ isHidden: !this.state.isHidden });
  }
  filterReviews(star) {
    if (this.state.isFiltered === true && this.state.filteredStar === star) {
      this.setState({ isFiltered: false, filteredStar: null });
    } else {
      this.setState({ isFiltered: true, filteredStar: star });
    }
  }

  render() {
    return (
      <div>
        {!this.state.isHidden ? (
          <ReviewWrapper ref="ReviewForm">
            <ReviewForm
              product_Id={this.state.product}
              toggle={this.toggleReviewWindow}
              post={this.addReview}
            />
          </ReviewWrapper>
        ) : null}
        {this.state && this.state.reviews ? (
          <BigWrapper>
            <p
              style={{ fontSize: 30, fontWeight: 800, fontFamily: "Helvetica" }}
            >
              Reviews
            </p>
            <ReviewsCharts
              filteredBy={this.state.filteredStar}
              isFiltered={this.state.isFiltered}
              barClick={this.filterReviews}
              reviews={this.state.reviews}
              rating={this.state.rating}
              toggle={this.toggleReviewWindow}
            />
          </BigWrapper>
        ) : (
          <div style={{ backgroundImage: `url(${backgroundImage})` }} />
        )}
      </div>
    );
  }
}

export default App;
