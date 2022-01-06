import React from "react";
import Goal from '../components/Goal'
import { Link } from 'react-router-dom';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

const AllGoals = (props) => {
  return (
    <div className="full-body">
      <div className="caroStyle">
        <MDBCarousel
          fade
          showIndicators={true}
          slide="true">
          <MDBCarouselInner>
            <MDBCarouselItem className='active'>
              <MDBCarouselElement src="https://i.pinimg.com/564x/ca/e2/6f/cae26fdc102447ac04426eb14098caf7.jpg" alt="Steve Jobs Quote" width="300" height="400" />
            </MDBCarouselItem>
            <MDBCarouselItem>
            <MDBCarouselElement src="https://i.pinimg.com/564x/9a/0c/60/9a0c60025fe7517a0e4d569160b31fea.jpg" alt="make it happen" width="300" height="400" />
            </MDBCarouselItem>
            <MDBCarouselItem>
            <MDBCarouselElement src="https://i.pinimg.com/564x/70/7b/92/707b9285535f819c9ca65f6e4dec49f2.jpg" alt="Richard Branson Quote" width="300" height="400" />
            </MDBCarouselItem>
            <MDBCarouselItem>
            <MDBCarouselElement src="https://i.pinimg.com/564x/95/a8/29/95a8294f16e941ae4a0d9424fe56b308.jpg" alt="action to goals" width="300" height="400" />
            </MDBCarouselItem>
            <MDBCarouselItem>
            <MDBCarouselElement src="https://i.pinimg.com/564x/d2/75/4a/d2754ae23a1bfbb0fbc585b7666d62a7.jpg" alt="Challenge to change" width="300" height="400" />
            </MDBCarouselItem>
            <MDBCarouselItem>
            <MDBCarouselElement src="https://i.pinimg.com/564x/b8/21/92/b8219296cc34c39b0fa297889448ac1c.jpg" alt="You will thank yourself" width="300" height="400" />
            </MDBCarouselItem>
            <MDBCarouselItem>
            <MDBCarouselElement src="https://i.pinimg.com/564x/17/3f/f3/173ff3f9b21f6446baeff99dd59d951e.jpg" alt="Create Opportunity" width="300" height="400" />
            </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>
      </div>
      <Link to="/main/new"><button className="button-style move">NEW GOAL</button></Link>
      <div className='blurb'>Start creating goals or select a goal below to view the details and make progress updates.</div>
      <div className="full-body">
        {props.goals.map((goal) => <Goal goal={goal} key={goal.id} />)}</div>
      <div className="foot">Footer</div>
    </div>);
};

export default AllGoals;