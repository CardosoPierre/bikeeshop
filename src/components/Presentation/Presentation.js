import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Presentation.css';

const presentation = () => {
    return(
        <Container className="Presentation">
            <Row>
                <Col>
                    <img src="http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/11/2017/06/Genius-900-Tuned_SCOTT-Sports_bike_Close-Up_2018_22-e1517576991890.jpg" />
                    <p>Does your heart start pounding on Monday in anticipation of Saturday’s snowboard outing? Do you dream of Fat Bikes instead of sandy beaches? Would you rather climb Everest than the corporate ladder? Since 1982, The House has been passionate about equipping everyone from weekend warriors to sherpas with the best outdoor gear on the planet. Gear is an extension of who we are and what we value, so it must enrich the experiences that keep our active lives moving forward.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default presentation;