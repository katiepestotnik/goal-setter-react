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
  return (
    <div>
      <h1>All Goals</h1>
      <div className="caroStyle">
      <MDBCarousel showControls showIndicators fade>
          <MDBCarouselInner>
            <MDBCarouselItem className='active'>
              <MDBCarouselElement src="https://i.pinimg.com/564x/ca/e2/6f/cae26fdc102447ac04426eb14098caf7.jpg" alt="Steve Jobs Quote" width="300" height="400" />
            </MDBCarouselItem>
            <MDBCarouselItem>
            <MDBCarouselElement src="https://cdn.graciousquotes.com/wp-content/uploads/2020/08/Without-ambition-one-starts-nothing.-Without-work-one-finishes-nothing.-The-prize-will-not-be-sent-to-you.-You-have-to-win-it.-Ralph-Waldo-Emerson.jpg" alt="Ralph Waldo Emerson Quote" width="300" height="400" />
            </MDBCarouselItem>
            <MDBCarouselItem>
            <MDBCarouselElement src="https://cdn.graciousquotes.com/wp-content/uploads/2020/08/Ambition-is-the-path-to-success.-Persistence-is-the-vehicle-you-arrive-in.-Bill-Bradley.jpg" alt="Bill Bradley Quote" width="300" height="400" />
            <MDBCarouselCaption>
            <h5>Pointing</h5>
            </MDBCarouselCaption>
            </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>
        </div>
      {props.goals.map((goal) => <Goal goal={goal} key={goal.id} />)}
      <Link to="/main/new"><button>Create New Goal</button></Link>
    </div>);
};

export default AllGoals;