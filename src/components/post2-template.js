import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

export const query = graphql
    `
    query PostsByID_2($slug: String!) {
        articles:mdx(
            fields: { slug: { eq: $slug } }
        ){
            body
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
            }
        }
    }
`

export default function ({words}) {
    const { frontmatter, body } = words.mdx
    return (
        <div>
            <a href="/">Back to Posts</a>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <MDXRenderer>{body}</MDXRenderer>
        </div>
    )
}