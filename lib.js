'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings => 
    carts => {
      return carts.map(
        (currentCustomer) => { 
          return {
            'customer' : currentCustomer.customer,
            'total' : currentCustomer.items.reduce(
              (total, currentItem) => total + listings.find((listing) => listing.name === currentItem).price, 0)
          }
        }
      )
  }

module.exports = {
  listing,
  cart,
  calculateTotals
}
