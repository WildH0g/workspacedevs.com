import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const IndexPage = ({data}) => {
  return (
    <Layout>
      <div>
        <h1>Directory of Google Workspace Developers!</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Intro</th>
            </tr>
          </thead>
          <tbody>
            {data.allMdx.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.frontmatter.name}</td>
                <td>{node.frontmatter.location}</td>
                <td>{node.frontmatter.intro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
query peopleQuery {
  allMdx {
    edges {
      node {
        frontmatter {
          description
          intro
          location
          name
          slug
          title
        }
        id
      }
    }
  }
}
`

export default IndexPage