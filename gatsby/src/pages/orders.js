import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import useForm from '../utils/useForm';
import pizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';
import OrderStyles from '../styles/OrderStyles';
import MenuItemStyles from '../styles/MenuItemStyles';

export default function OrderPage({ data }) {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
  });
  const pizzas = data.pizzas.nodes;
  return (
    <OrderStyles>
      <fieldset>
        <legend>Your Info</legend>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={updateValue}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={updateValue}
        />
      </fieldset>
      <fieldset className="menu">
        <legend>Menu</legend>
        {pizzas.map((pizza) => (
          <MenuItemStyles key={pizza.id}>
            <Img
              width="50"
              height="50"
              fluid={pizza.image.asset.fluid}
              alt={pizza.name}
            />
            <p>{pizza.name}</p>
            <div>
              {['S', 'M', 'L'].map((size) => (
                <button type="button" key={size}>
                  {size} {formatMoney(pizzaPrice(size, pizza.price))}
                </button>
              ))}
            </div>
          </MenuItemStyles>
        ))}
      </fieldset>
      <fieldset className="order">
        <legend>Order</legend>
      </fieldset>
    </OrderStyles>
  );
}

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        price
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
