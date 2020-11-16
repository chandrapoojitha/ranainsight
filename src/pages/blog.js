import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import Image from "gatsby-image"
import styled from "styled-components"
import styles from '../components/blog.module.css'
import FeaturedPost from '../components/featured-post'

export const query = graphql
`
    query SITE_INDEX_QUERY {
        site {
            siteMetadata {
               title
               description
            }
        }
        allMdx(
            sort: {fields: [frontmatter___date], order: DESC},
            filter: {frontmatter: {published: {eq: true}, featured: {eq: false}}}
        ){
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date
                    postimage {
                        childImageSharp {
                            fluid(maxWidth: 800) {
                              ...GatsbyImageSharpFluid_noBase64
                            }
                        }  
                    }
                }
                fields {
                    slug
                }
            }
        }
    }
`
const BannerImage = styled(Image)`
  width:100%;
  height:100%;
`
const blog = ({ data }) => {
  return (
      <Layout>
        <SEO title="Blog" />
        <div className={styles.intro}>
          <div className={styles.introheader}>
            <p>
               Make your life a Masterpiece: Ignore no limitations on what can you be,
               have or do
            </p>
          </div>
        </div>
        <div className={styles.allposts}>
            <a href="/blog">All Posts</a>
        </div>
        <FeaturedPost />
        <div className={styles.blog}>
            <div className={styles.blogs}>
              {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
                <div className={styles.blogpost}>
                  <div className={styles.postblog}>
                    <div className={styles.blogtitle}>
                      <div className={styles.image}>
                        {frontmatter.postimage && (
                          <BannerImage
                          fluid={frontmatter.postimage.childImageSharp.fluid}
                          alt="Banner Image"
                        />
                        )}
                      </div>
                    </div>
                    <div className={styles.blogtext}>
                      <Link to={fields.slug} style={{textDecoration:`none`,paddingTop:10}}>
                          <h1>{frontmatter.title} </h1>
                      </Link>
                      <p>{excerpt}</p>
                    </div>
                  </div>
                </div>
                ))}
            </div>
        </div>
      </Layout>
  )
}

export default blog