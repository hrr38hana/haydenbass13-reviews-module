import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInRight, zoomIn, fadeIn } from "react-animations";

const fader = keyframes`${fadeIn}`;
const zoom = keyframes`${slideInRight}`;

const TitleInput = styled.input`
  width: 99%;
  height: 30px;
`;
const Body = styled.input`
  width: 99%;
  height: 150px;
`;
const Location = styled.input`
  width: 99%;
  height: 30px;
`;
const Email = styled.input`
  width: 99%;
  height: 30px;
`;
const Pros = styled.input`
  width: 99%;
  height: 30px;
`;
const Cons = styled.input`
  width: 99%;
  height: 30px;
`;
const DescribeYourself = styled.input`
  width: 99%;
  height: 30px;
`;
const BestUses = styled.input`
  width: 99%;
  height: 30px;
`;
const SubmitButton = styled.button`
padding: 12px 15px;
    font-size: 14px;
    line-height: 1;
    border-radius: 2px;
    color: #fff;
    background-color: #0b7bc1;
    font-weight: 700;
    border: none;
    border-bottom: 2px solid #085c91;
    margin-top: 15px;
}
`;
const Cancel = styled.button`
padding: 12px 15px;
    font-size: 14px;
    line-height: 1;
    border-radius: 2px;
    color: #fff;
    background-color: #0b7bc1;
    font-weight: 700;
    border: none;
    border-bottom: 2px solid #085c91;
    margin-top: 15px;
}
`;
const ReviewLabel = styled.p`
  font-size: 14px;
  font-family: Helvetica;
  font-weight: 700;
`;
const Nickname = styled.input`
  width: 99%;
  height: 30px;
`;

const Wrapper = styled.div`
  z-index: 1050;
  position: absolute;
  border: 1px solid lightgray;
  border-radius: 6px;
  background: white;
  width: 800px;
  min-height: 300px;
  left: 42%;
  top: 5%;
  transform: translate(0 -20%);
  margin-left: -300px;
  display: flex;
  flex-direction: column;
  padding: 60px;
  margin-bottom: 40px;
  box-shadow: 0 0 20px 2px rgb(0, 0, 0, 0.7);
  animation: 0.5s ${zoom};
`;
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1040;
  display: block;
  animation: 0.8s ${fader};
`;

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_ID: this.props.product_Id,
      title: null,
      body: null,
      recommend: null,
      location: null,
      gift: null,
      email: null,
      pros: null,
      cons: null,
      describe_yourself: null,
      best_uses: null,
      stars: null,
      nickname: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let name = target.name;
    this.setState({ [name]: target.value });
  }
  render() {
    return (
      <div>
        <Container onClick={() => this.props.toggle()} />
        <Wrapper>
          <h1 style={{ fontFamily: "Helvetica", fontWeight: 800 }}>
            Write a review
          </h1>
          <a>
            <p style={{ fontWeight: 900 }}>Overall Rating: </p>
            <select name="stars" onChange={this.handleChange}>
              <option value="null">Select One</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </a>
          <ReviewLabel>Review Headline*</ReviewLabel>
          <TitleInput
            placeholder="I would buy this product again and again"
            name="title"
            onChange={this.handleChange}
          />
          <ReviewLabel>Pros</ReviewLabel>
          <Pros placeholder="Pros" name="pros" onChange={this.handleChange} />
          <ReviewLabel>Cons</ReviewLabel>
          <Cons placeholder="Cons" name="cons" onChange={this.handleChange} />
          <ReviewLabel>Describe Yourself</ReviewLabel>
          <DescribeYourself
            placeholder="Describe Yourself"
            name="describe_yourself"
            onChange={this.handleChange}
          />
          <ReviewLabel>Best Uses</ReviewLabel>
          <BestUses
            placeholder="Best Uses"
            name="best_uses"
            onChange={this.handleChange}
          />
          <ReviewLabel>Comments*</ReviewLabel>
          <Body
            placeholder="How you use the product. Things that are great about it. Things that arent great about it."
            name="body"
            onChange={this.handleChange}
          />
          <ReviewLabel>Bottom Line*</ReviewLabel>
          <a style={{ fontFamily: "Helvetica", fontWeight: 300 }}>
            <input
              type="radio"
              value="1"
              name="recommend"
              onChange={this.handleChange}
            />{" "}
            Yes, I would recommend this to a friend
          </a>
          <br />
          <a style={{ fontFamily: "Helvetica", fontWeight: 300 }}>
            <input
              type="radio"
              value="0"
              name="recommend"
              onChange={this.handleChange}
            />{" "}
            No, I would not recommend this to a friend
          </a>
          <ReviewLabel>Nickname*</ReviewLabel>
          <Nickname
            placeholder="Ex: Sarah"
            name="nickname"
            onChange={this.handleChange}
          />
          <ReviewLabel>Your Location*</ReviewLabel>
          <Location
            placeholder="Ex: San Jose, CA"
            name="location"
            onChange={this.handleChange}
          />
          <ReviewLabel>Was This a Gift?*</ReviewLabel>
          <a style={{ fontFamily: "Helvetica", fontWeight: 300 }}>
            <input
              type="radio"
              value="1"
              name="gift"
              onChange={this.handleChange}
            />{" "}
            Yes
          </a>
          <br />
          <a style={{ fontFamily: "Helvetica", fontWeight: 300 }}>
            <input
              type="radio"
              value="0"
              name="gift"
              onChange={this.handleChange}
            />{" "}
            No
          </a>
          <br />
          <ReviewLabel>Email*</ReviewLabel>
          <Email
            placeholder="Enter your email in case we need to get in tough, and to verify your review"
            name="email"
            onChange={this.handleChange}
          />
          <br />
          <Cancel onClick={() => this.props.toggle()}>Cancel</Cancel>
          <SubmitButton
            type="submit"
            onClick={() => this.props.post(this.state)}
          >
            Submit Review
          </SubmitButton>
        </Wrapper>
      </div>
    );
  }
}

export default ReviewForm;
