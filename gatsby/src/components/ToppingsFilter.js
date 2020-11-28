import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;
  }
  .count {
    background: white;
    padding: 2px 5px;
  }
  [aria-current='page'] {
    background: var(--yellow);
  }
`;

function countPizzasInToppings(pizzas) {
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, top) => {
      const existingTopping = acc[top.id];
      if (existingTopping) {
        existingTopping.count += 1;
        return acc;
      }
      acc[top.id] = {
        id: top.id,
        name: top.name,
        count: 1,
      };
      return acc;
    }, {});
  const sortedCounts = Object.values(counts).sort((a, b) => b.count - a.count);
  return sortedCounts;
}

export default function ToppingsFilter({ activeTopping }) {
  // Get list of all Toppings
  // Get list of all Pizzas and their toppings
  const { toppings, pizzas } = useStaticQuery(graphql`
    query MyQuery {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          name
          toppings {
            id
            name
          }
        }
      }
    }
  `);
  // count how many pizzas are in each topping
  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
  return (
    <ToppingsStyles>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
      </Link>
      {toppingsWithCounts.map((topping) => (
        <Link to={`/topping/${topping.name}`} key={topping.id}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingsStyles>
  );
}
