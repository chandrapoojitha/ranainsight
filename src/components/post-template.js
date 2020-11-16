import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Image from "gatsby-image"
import styled from "styled-components"
import React from 'react'
import Layout from '../components/layout'
import styles from '../components/post.module.css'

export const query = graphql
    `
    query PostsByID($slug: String!) {
        mdx(
            fields: { slug: { eq: $slug } }
        ){
            body
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY ")
                postimage {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid_noBase64
                        }
                    }  
                }
            }
        }
    }
`

const PostImage = styled(Image)`
  width: 100%;
  height:100%;
`

export default function ({ data}) {
    const { frontmatter, body } = data.mdx
    return (
        <Layout>
        <div className={styles.backtoposts}>
            <a href="/blog">Back to Posts</a>
        </div>
        <div className={styles.blogpostreview}>
            {frontmatter.postimage && (
                <PostImage
                fluid={frontmatter.postimage.childImageSharp.fluid}
                alt="Banner Image"
            />
            )}
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <MDXRenderer>{body}</MDXRenderer>
        </div>
        </Layout>
    )
}