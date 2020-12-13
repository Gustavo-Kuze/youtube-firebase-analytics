/* eslint-disable max-len */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import WavySection from 'components/WavySection';
import { useDispatch, useSelector } from 'react-redux';
import { types } from 'redux/ducks/example';
import Footer from 'components/Footer';
import Fade from 'react-reveal/Fade';

import WhatICanDo from './WhatICanDo';

const HomeTitle = styled.h1``;

const Home = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);

  useEffect(() => {
    dispatch({
      type: types.FETCH_EXAMPLE,
    });
  }, []);

  const isDarkTheme = () => theme.themeName === 'dark';

  return (
    <div className="h-screen pt-40">
      <Fade>
        <header className="py-4 px-12 lg:px-64 container">
          <h3
            className={`
              font-bold text-${theme.classes.whiteyPrimary}
              text-md lg:text-2xl
            `}
          >
            Tutorial de como configurar
          </h3>
          <HomeTitle
            className={`
              font-bold text-${theme.classes.whitierPrimary}
              text-4xl lg:text-6xl
            `}
          >
            Firebase Analytics
          </HomeTitle>
          <h2
            className={`
              font-bold text-${theme.classes.whiteyPrimary}
              text-lg lg:text-2xl
            `}
          >
            em um projeto ReactJS
          </h2>

          <Button
            isResponsive={false}
            secondary={isDarkTheme()}
            noShadow
            className="mt-5"
            color={
              !isDarkTheme() &&
              `
              bg-${theme.classes.secondaryStrong}
              hover:bg-${theme.classes.secondary}
              text-${theme.classes.whitierPrimary}
              hover:text-${theme.classes.whiteyPrimary}
              mt-5
              `
            }
          >
            Vamos lá!
          </Button>
        </header>
      </Fade>

      <WavySection>
        <section className={`bg-${theme.classes.panels} py-12`}>
          <div className="container max-w-5xl mx-auto mt-8">
            <h1
              className={`
                w-full my-2 text-5xl
                font-bold leading-tight
                text-center text-${theme.classes.sectionTitle}
                pt-5
              `}
            >
              Projetos
            </h1>
          </div>

          <WhatICanDo />
        </section>
      </WavySection>
      <Footer />
    </div>
  );
};

export default Home;
