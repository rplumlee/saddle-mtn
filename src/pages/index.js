import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Services from '../components/home/Services'
import HomeAbout from '../components/HomeAbout'
import Assessment from '../components/home/Assessment'
import Strategy from '../components/home/Strategy'
import Scalability from '../components/home/Scalability'
import HomeKPIs from '../components/home/KPIs'
import HomeMessage from '../components/HomeMessage'
import HomeTop from '../components/home/Top'
import HomeContact from '../components/HomeContact'
import { rhythm } from '../utils/typography'
import BackgroundImage from 'gatsby-background-image'
import '../styles.scss'
import { useCycle } from 'framer-motion'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(
      this,
      'props.data.cosmicjsSettings.metadata.site_title'
    )
    const author = get(this, 'props.data.cosmicjsSettings.metadata')
    const location = get(this, 'props.location')

    return (
      <Layout location={location}>
        <Helmet title={siteTitle} />
        <HomeTop />

        <Services />
        <Assessment />
        <Strategy />
        <Scalability />
        <HomeKPIs />
        <HomeAbout />
        <HomeContact />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        author_name
        author_bio
        author_avatar {
          imgix_url
        }
      }
    }
  }
`
