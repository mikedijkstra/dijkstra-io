import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import {Page, PageTitle} from '../components/Page';
import Close from '../components/Close';
import {AsidePrimary, AsideSecondary} from '../components/Aside';
import {Container, Row} from '../components/Layout';

import {media} from '../utils/style';

const PageGames = Page.extend`
  background-color: ${props => props.theme.colors.quaternary};
  color: ${props => props.theme.colors.onDark};
`;

const GameContainer = Container.extend`
  position: relative;
`;

const Game = styled.iframe`
  border: none;
  display: none;
  height: 400px;
  left: 50%;
  margin-top: -150px;
  margin-left: -320px;
  position: absolute;
  top: 50%;
  width: 640px;

  ${media.sm`
    display: block;
  `};
`;

const NoGame = styled.div`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onDark};
  padding: ${props => props.theme.spacing.sm};
  text-align: center;
  position: absolute;
  top: 50%;
  width: 100%;

  ${media.sm`
    display: none;
  `};
`;

const GamesPage = ({transition}) => (
  <div style={transition && transition.style}>
    <PageGames>
      <Helmet>
        <title>What is this Michael Dijkstra?</title>
      </Helmet>
      <Close />
      <GameContainer>
        <NoGame>Load this page on your computer to play games!</NoGame>
        <Game src="https://wolf3d.dijkstra.io" />
        <PageTitle>
          games<br />games<br />games
        </PageTitle>
      </GameContainer>
      <Container>
        <Row>
          <div>
            <AsidePrimary>
              <div>&nbsp;</div>
              <div>move</div>
              <div>run</div>
              <div>open</div>
              <div>fire</div>
              <div>strafe</div>
            </AsidePrimary>
            <AsideSecondary>
              <div>buttons</div>
              <div>arrow keys</div>
              <div>shift</div>
              <div>space</div>
              <div>x</div>
              <div>z</div>
            </AsideSecondary>
          </div>
        </Row>
      </Container>
    </PageGames>
  </div>
);

GamesPage.propTypes = {
  transition: PropTypes.object,
};

export default GamesPage;
