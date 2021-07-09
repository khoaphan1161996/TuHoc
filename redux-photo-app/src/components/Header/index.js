import React from 'react';

import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import './style.scss';

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://www.youtube.com/watch?v=1NywJvNpgAI&list=RD1NywJvNpgAI&start_radio=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Music
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header