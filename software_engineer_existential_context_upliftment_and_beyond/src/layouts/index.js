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
          
          <title>{`${site.siteMetadata.itemName} | ${site.siteMetadata.title}`}</title>

          <link rel="icon" href={`${site.siteMetadata.favIcon}`} type="image/png"/>
          <link rel="apple-touch-icon" sizes="48x48" href={`${site.siteMetadata.icons.i48}`} />
          <link rel="apple-touch-icon" sizes="72x72" href={`${site.siteMetadata.icons.i72}`} />
          <link rel="apple-touch-icon" sizes="96x96" href={`${site.siteMetadata.icons.i96}`} />
          <link rel="apple-touch-icon" sizes="144x144" href={`${site.siteMetadata.icons.i144}`} />
          <link rel="apple-touch-icon" sizes="192x192" href={`${site.siteMetadata.icons.i192}`} />
          <link rel="apple-touch-icon" sizes="256x256" href={`${site.siteMetadata.icons.i256}`} />
          <link rel="apple-touch-icon" sizes="384x384" href={`${site.siteMetadata.icons.i384}`} />
          <link rel="apple-touch-icon" sizes="512x512" href={`${site.siteMetadata.icons.i512}`} />

          <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
          <link rel="canonical" href={`${site.siteMetadata.itemUrl}`} data-baseprotocol="https:" data-basehost="imsheth.com"/>

          <meta name="description" content={`${site.siteMetadata.description}`} />
          <meta name="image" content={`${site.siteMetadata.coverImage}`} />
          
          <meta property="og:url" content={`${site.siteMetadata.itemUrl}`} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={`${site.siteMetadata.title}`} />
          <meta property="og:title" content={`${site.siteMetadata.itemName} | ${site.siteMetadata.title}`} />
          <meta property="og:description" content={`${site.siteMetadata.description}`} />
          
          <meta property="og:image" content={`${site.siteMetadata.coverImage}`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content="en" />
          <meta property="og:image:alt" content="Banner" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:secure_url" content={`${site.siteMetadata.coverImage}`} />
          {site.siteMetadata.facebook && <meta property="article:publisher" content={`${site.siteMetadata.facebook}`} />}

          <meta name="twitter:card" content="summary_large_image" />
          {site.siteMetadata.twitter && (<meta name="twitter:site" content={`@${site.siteMetadata.twitter.split('https://twitter.com/')[1]}`} /> )}
          {site.siteMetadata.twitter && (<meta name="twitter:creator" content={`@${site.siteMetadata.twitter.split('https://twitter.com/')[1]}`} /> )}
          <meta name="twitter:title" content={`${site.siteMetadata.itemName} | ${site.siteMetadata.title}`} />
          <meta name="twitter:description" content={`${site.siteMetadata.description}`} />
          <meta name="twitter:url" content={`${site.siteMetadata.itemUrl}`} />
          <meta name="twitter:image" content={`${site.siteMetadata.coverImage}`} />
          <meta name="twitter:image:src" content={`${site.siteMetadata.coverImage}`} />
          <meta name="twitter:image:alt" content="Banner" />
          <meta name="twitter:image:width" content="1200" />
          <meta name="twitter:image:height" content="630" />

          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="google" content="notranslate" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
          <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
          
          
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
            itemUrl
            itemDate
            siteUrl
            facebook
            twitter
            coverImage
            favIcon
            icons {
              i48
              i72
              i96
              i144
              i192
              i256
              i384
              i512
            }
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