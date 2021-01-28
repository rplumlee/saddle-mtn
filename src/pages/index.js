import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import HomeHero from '../components/HomeHero'
import HomeAbout from '../components/HomeAbout'
import HomePhilosophy from '../components/HomePhilosophy'
import HomeStrategy from '../components/HomeStrategy'
import HomeScalability from '../components/HomeScalability'
import HomeKPIs from '../components/HomeKPIs'
import HomeMessage from '../components/HomeMessage'
import HomeParticles from '../components/HomeParticles'
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
        <HomeParticles />

        <HomeHero />
        <HomePhilosophy />
        <HomeStrategy />
        <HomeScalability />
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
