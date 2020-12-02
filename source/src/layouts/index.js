import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, navigate, StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Swipeable from 'react-swipeable';
import Transition from '../components/transition';
import Logo from '../assets/imsheth.svg';

import './index.css';

const Header = ({ alt, link }) => (
  <header>
    <a target="_blank" rel="noreferrer" href={link}><img alt={alt} style={{height: '24.5px', width: '100px'}} src={Logo} /></a>
  </header>
);

const Footer = ({ title, date }) => (
  <footer>
    <Link to="/1">
     {title}
    </Link>
    <time>{date}</time>
  </footer>
);

class TemplateWrapper extends Component {
  NEXT = [13, 32, 39];
  PREV = 37;

  swipeLeft = () => {
    this.navigate({ keyCode: this.NEXT[0] });
  };

  swipeRight = () => {
    this.navigate({ keyCode: this.PREV });
  };

  navigate = ({ keyCode }) => {
    const now = this.props.data.slide.index;
    const slidesLength = this.props.slidesLength;

    if (now) {
      if (keyCode === this.PREV && now === 1) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1 && now === slidesLength) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1) {
        navigate(`/${now + 1}`);
      } else if (keyCode === this.PREV) {
        navigate(`/${now - 1}`);
      }
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.navigate);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.navigate);
  }

  render() {
    const { location, children, site } = this.props;

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{`${site.siteMetadata.title} - ${site.siteMetadata.description} | ${site.siteMetadata.itemName}`}</title>
          <meta name="description" content={`${site.siteMetadata.itemName}`} />
          <meta property="og:site_name" content={`${site.siteMetadata.title} - ${site.siteMetadata.description} | ${site.siteMetadata.itemName}`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${site.siteMetadata.title} - ${site.siteMetadata.description} | ${site.siteMetadata.itemName}`} />
          <meta property="og:description" content={`${site.siteMetadata.itemName}`} />
          <meta property="og:url" content={`${site.siteMetadata.siteUrl}`} />
          {/* <meta
            property="og:image"
            content={`${`${site.siteMetadata.siteUrl}`}${props.data.header.childImageSharp.fixed.src}`}
          /> */}
          {site.siteMetadata.facebook && <meta property="article:publisher" content={`${site.siteMetadata.facebook}`} />}
          <meta name="twitter:card" content="summary" />
          {site.siteMetadata.twitter && (
            <meta
              name="twitter:site"
              content={`@${site.siteMetadata.twitter.split('https://twitter.com/')[1]}`}
            />
          )}
          <meta name="twitter:title" content={`${site.siteMetadata.title} - ${site.siteMetadata.description} | ${site.siteMetadata.itemName}`} />
          <meta name="twitter:description" content={`${site.siteMetadata.itemName}`} />
          <meta name="twitter:url" content={`${site.siteMetadata.siteUrl}`} />
          {/* <meta
            name="twitter:image"
            content={`${`${site.siteMetadata.siteUrl}`}${props.data.header.childImageSharp.fixed.src}`}
          /> */}
          
          {/* <meta property="og:image:width" content={width.toString()} />
          <meta property="og:image:height" content={height.toString()} /> */}
        </Helmet>        
        <Header
          alt={site.siteMetadata.title}
          link={site.siteMetadata.siteUrl}
        />
        <Swipeable
          onSwipedLeft={this.swipeLeft}
          onSwipedRight={this.swipeRight}
        >
          <Transition location={location}>
            <div id="slide" style={{'width': '100%'}}>{children}</div>
          </Transition>
        </Swipeable>
        <Footer
          title={site.siteMetadata.itemName}
          date={site.siteMetadata.itemDate}
        />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
};

export default props => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            title
            description
            itemName
            itemDate
            siteUrl
            facebook
            twitter
            linkedIn
            github
            stackoverflow
            instagram
          }
        }
        allSlide {
          edges {
            node {
              id
            }
          }
        }
      }
    `}
    render={data => (
      <TemplateWrapper
        site={data.site}
        slidesLength={data.allSlide.edges.length}
        {...props}
      />
    )}
  />
);
