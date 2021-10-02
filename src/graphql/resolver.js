import { gql } from 'apollo-boost';



export const typeDefs = gql`
 extend type Mutation {
    ToggleCartHidden: Boolean!
 }
`


const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

// const updateCartItemsRelatedQueries = (cache, newCartItems) => {
//     cache.writeQuery({
//       query: GET_ITEM_COUNT,
//       data: { itemCount: getCartItemCount(newCartItems) }
//     });
  
//     cache.writeQuery({
//       query: GET_CART_TOTAL,
//       data: { cartTotal: getCartTotal(newCartItems) }
//     });
  
//     cache.writeQuery({
//       query: GET_CART_ITEMS,
//       data: { cartItems: newCartItems }
//     });F
//   };

export const resolvers = {
    Mutation: {
      toggleCartHidden: (_root, _args, { cache }) => {
        const { cartHidden } = cache.readQuery({
          query: GET_CART_HIDDEN
        });
  
        cache.writeQuery({
          query: GET_CART_HIDDEN,
          data: { cartHidden: !cartHidden }
        });
  
        return !cartHidden;
      }

    }
}