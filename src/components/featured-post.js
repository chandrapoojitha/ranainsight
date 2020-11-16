import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from "gatsby-image"
import styled from "styled-components"
import styles from '../components/featured.module.css'
import { useStaticQuery } from "gatsby"

const PostImage = styled(Image)`
  width: 100%;
  height:100%;
`

export default function FeaturedPost() {
    const data = useStaticQuery(graphql`
      query SITE_INDEX_QUERY_2 {
        allMdx(
            limit: 1,
            sort: {fields: [frontmatter___date], order: ASC},
            filter: {frontmatter: {published: {eq: true}, featured: {eq: true}}}
        ){
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date
                    postimage {
                        childImageSharp {
                            fluid(maxWidth: 300) {
                                base64
                                aspectRatio
                                src
                                srcSet
                                sizes
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
    `)

    return (
      <header>
        <div className={styles.featureblog}>
            {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
                <div className={styles.featurepost}>
                    <div className={styles.featuretitle}>
                      <div className={styles.featureimage}>
                        {frontmatter.postimage && (
                          <PostImage
                          fluid={frontmatter.postimage.childImageSharp.fluid}
                          alt="Banner Image"
                        />
                        )}
                      </div>
                    </div>
                    <div className={styles.featuretext}>
                      
                      <Link to={fields.slug} style={{textDecoration:`none`,paddingTop:10}}>
                          <h1>{frontmatter.title} </h1>
                      </Link>
                      <p>{excerpt}</p>
                    </div>
                  </div>
            ))}
        </div>
      </header>
    )
  }


