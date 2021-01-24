import React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';
import pizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
  return (
    <>
      {order.map((singlePizza, index) => {
        const pizza = pizzas.find((pie) => pie.id === singlePizza.id);
        return (
          <MenuItemStyles key={singlePizza.size + pizza.id + index}>
            <Img fluid={pizza.image.asset.fluid} />
            <h2>{pizza.name}</h2>
            <p>
              {formatMoney(pizzaPrice(singlePizza.size, pizza.price))}
              <button
                type="button"
                className="remove"
                title={`Remove ${singlePizza.size} ${pizza.name} from Order`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
}
