import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import FAQ from 'react-faq-component';
import Img from 'gatsby-image';
import { ToastProvider } from 'react-toast-notifications';

import Layout from '../components/layout';
import Container from '../components/container';
import Navbar from '../components/navbar';
import SEO from '../components/seo';
import EventList from '../components/event-list';
import InviteForm from '../components/invite-form';
import Sponsors from '../components/sponsors';
import Talks from '../components/talks';
import Fireside from '../components/fireside';

import faqData from '../../data/faq';

import styles from './index.module.css';
import Videos from '../components/videos';
// 4;
import Slides from '../components/slides';

const Grid = ({ children }) => <div className={styles.grid}> {children} </div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const Header = () => (
  <header
    style={
      {
        // borderBottom: '1px solid #eaeaef',
      }
    }
    className={styles.header}
  >
    <Container>
      <Navbar />
      {/*
 <div style={{ padding: '10rem 0 4rem', color: 'green' }}>
     <div
        style={{
          padding: '10rem 0 4rem',
        }}
        >
        <h2
        style={{
          color: '#456484',
        }}
        >
        19 - 20 October
        </h2>
        <h1
        style={{
          marginTop: '-1rem',
          color: '#298bf5',
        }}
        className={styles.heading}
        >
        Exun 2019
        </h1>
        <p
        style={{
          color: '#7c828a',
          maxWidth: 600,
        }}
        >
        Exun 2019 was the 24th edition of Exun’s annual event. <br />
        Enter your email to stay tuned for updates.
        </p>
        <ToastProvider>
        <InviteForm />
      </ToastProvider>
      </div>
      </div>
      */}
    </Container>
    <div className={styles.landingContainer}>
      <Container style={{ padding: '0' }}>
        <div className={styles.contentContainer}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <video
              playsInline
              autoPlay
              loop
              muted
              aria-controls="false"
              className={styles.gif}
            >
              <source
                src="https://cdn.discordapp.com/attachments/918142261693399081/924294738947997756/transparent-4.webm"
                type="video/mp4"
              />
            </video>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div className={styles.date}>14 - 21 January 2022</div>
            <div className={styles.name}>Exun 2021-22</div>
            <div className={styles.emphasized}>
              Celebrating 26 years of Exun.
            </div>
            <div
              className={styles.name}
              style={{ fontSize: '25px', marginTop: '25px' }}
            >
              Register
            </div>
            <div className={styles.registerButtons}>
              <a href="//exun.co/schoolreg" target="_blank">
                <div className={styles.register}>School</div>
              </a>
              <a href="//exun.co/independentreg" target="_blank">
                <div className={styles.register}>Independent</div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </header>
);

const Splash = ({ fluid }) => (
  <div
    style={{
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    {/*<Img
      objectFit="cover"
      fluid={fluid}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: -1,
      }}
    />*/}
    <div
      style={{
        padding: '5rem 0',
      }}
    >
      <Container>
        <h1> Bigger and better than ever before. </h1>
        <div style={{ maxWidth: 600 }}>
          Exun 2021-22 is the largest student-run event of its kind, being the
          latest iteration in our series of flagship technology symposiums going
          back two decades. With Exun 2021, we're international
          again—participants from all around the globe are coming together to
          deeply investigate and celebrate the essence of technology.
        </div>
      </Container>
    </div>
  </div>
);
Splash.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fluid: PropTypes.object.isRequired,
};

const quickLinkStyle = {
  color: '#298bf5',
};

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Sponsors />
      <Splash fluid={data.file.childImageSharp.fluid} />
      <Container>
        <div style={{ marginTop: '6rem' }}>
          <h1 style={{ marginBottom: '2rem' }}> Quick Links </h1>
          <ul>
            <li>
              <a
                style={quickLinkStyle}
                href="https://reg.exun.co/invite"
                target="_blank"
              >
                Invite
              </a>
            </li>
            {/*<li>
              <a
                style={quickLinkStyle}
                href="//exun.co/schedule"
                target="_blank"
              >
                Schedule
              </a>
      </li>*/}
            <li>
              <a style={quickLinkStyle} href="//sudocrypt.com" target="_blank">
                Sudocrypt
              </a>
            </li>
            <li>
              <a
                style={quickLinkStyle}
                href="//exun.co/discord"
                target="_blank"
              >
                Discord Server
              </a>
            </li>
            <li>
              <a
                style={quickLinkStyle}
                href="//facebook.com/ExunClan"
                target="_blank"
              >
                Facebook Page
              </a>
            </li>
            <li>
              <a style={quickLinkStyle} href="//exun.co/code" target="_blank">
                Code of Conduct
              </a>
            </li>
          </ul>
        </div>
        <div style={{ marginTop: '6rem' }}>
          {/*<Fireside />*/}
          <Videos />
          {/*<Slides />*/}
          {/*<Talks />*/}
          {/*<EventList />*/}
        </div>
        <div style={{ marginTop: '6rem' }}>
          <FAQ data={faqData} />
        </div>
      </Container>
    </Layout>
  );
};
IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query IndexQuery {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(duotone: { highlight: "#298bf5", shadow: "#192550" }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
