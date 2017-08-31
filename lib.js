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
      console.log('Listings')
      console.log(listings)

      console.log('Carts')
      return carts.map(
        (currentCustomer) => {
          console.log('\tCustomer: ' + currentCustomer.customer)
          const totalItemsPrice = currentCustomer.items.reduce(
            (total, currentItem, index) => {
              console.log('\t\tItem ' + index + ': ' + currentItem)
              return total + listings.find((listing) => listing.name === currentItem).price
            }, 0
          )
          const customer = {
            'customer' : currentCustomer.customer,
            'total' : totalItemsPrice
          }
          console.log('\tTotal Cart Price: ' + totalItemsPrice)
          return customer
        }
      )

    
  }

module.exports = {
  listing,
  cart,
  calculateTotals
}
