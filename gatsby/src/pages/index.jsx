import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const listingQuery = useStaticQuery(graphql`
    {
      allSanityListing {
        edges {
          node {
            title
            isListed
            description
            itemImage {
              asset {
                fluid(maxWidth: 400) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            listedAt
          }
        }
      }
    }
  `)

  const listings = listingQuery.allSanityListing.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Reddit Yardsale Listings</h1>

      <ListingWrap>
        {listings.map((listing, i) => (
            <ListingCard key={i}>
            <h2>{listing.node.title}</h2>
            <p>{listing.node.description}</p>
            <Img fluid={listing.node.itemImage.asset.fluid} />
            <cite>Listed At: {listing.node.listedAt}</cite>
          </ListingCard>
        ))}
      </ListingWrap>
    </Layout>
  )
}

const ListingWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: wrap;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`

const ListingCard = styled.div`
  position: relative;
  display: inline-block;
  background: #eaeaea;
  margin: 15px;
  width: 33%;
`

export default IndexPage
