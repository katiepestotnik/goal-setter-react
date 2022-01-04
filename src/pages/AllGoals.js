import React from "react";
import Goal from '../components/Goal'
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

const AllGoals = (props) => {
  console.log(props.goals)
  return (
    <div>
      <h1>All Goals</h1>
      <MDBCarousel showControls showIndicators fade>
          <MDBCarouselInner>
            <MDBCarouselItem className='active'>
            <MDBCarouselElement src="https://images.squarespace-cdn.com/content/v1/58fe2baeb8a79beb24af1b45/1513183011041-YKTLSDZT6HYOJXUL3NPZ/Goal+Setting" alt="Product" />
            <MDBCarouselCaption>
            <h5>Success</h5>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem>
            <MDBCarouselElement src="https://cdn-images-1.medium.com/max/3200/0*3tsM0Ft8x_e8mfJf" alt="Product" />
            <MDBCarouselCaption>
            <h5>Flag</h5>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem>
            <MDBCarouselElement src="https://www.jax.org/-/media/9662db4519f94cba8f417e2eeb0e623e.jpg" alt="Product" />
            <MDBCarouselCaption>
            <h5>Pointing</h5>
            </MDBCarouselCaption>
            </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>
      {props.goals.map((goal) => <Goal goal={goal} key={goal.id} />)}
      <Link to="/main/new"><button>Create New Goal</button></Link>
    </div>);
};

export default AllGoals;