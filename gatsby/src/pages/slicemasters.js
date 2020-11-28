import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';

const SliceMasterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const PersonGrid = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 400px;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--yellow);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    z-index: 2;
    position: relative;
    transform: rotate(1deg);
    text-align: center;
  }
`;

export default function SlicemastersPage({ data, pageContext }) {
  const sliceMasters = data.sliceMasters.nodes;
  return (
    <>
      <Pagination
        base="/slicemasters"
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.sliceMasters.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
      />
      <SliceMasterGrid>
        {sliceMasters.map((person) => (
          <PersonGrid key={person.id}>
            <Link to={`slicemaster/${person.slug.current}`}>
              <h2>
                <span className="mark">{person.name}</span>
              </h2>
            </Link>
            <Img fluid={person.image.asset.fluid} />
            <p className="description">{person.description}</p>
          </PersonGrid>
        ))}
      </SliceMasterGrid>
    </>
  );
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 2) {
    sliceMasters: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        name
        id
        description
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
            id
          }
        }
        slug {
          current
        }
      }
    }
  }
`;
