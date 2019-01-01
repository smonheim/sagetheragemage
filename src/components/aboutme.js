import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../css/aboutme.css';
import twitchLogo from '../assets/twitchLogo.png';
import caffeineLogo from '../assets/caffeineLogo.png';

class AboutMe extends Component {
  render() { 
    return (
      <div>
        <ListGroup>
          <ListGroupItem>
              <a href="https://twitch.tv/sagetheragemage">
                <img src={twitchLogo} width="1000" height="200" alt="twitch.tv"></img>
              </a>
          </ListGroupItem>
          <ListGroupItem>
              <a href="https://twitch.tv/sagetheragemage">
                <img src={caffeineLogo} alt="caffeine.tv"></img>
              </a>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default AboutMe;