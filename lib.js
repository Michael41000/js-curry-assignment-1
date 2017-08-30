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
      return carts.reduce(
        (customerCartTotals, currentCustomer) => {
          console.log('\tCustomer: ' + currentCustomer.customer)
          const totalItemsPrice = currentCustomer.items.reduce(
            (total, currentItem, index) => {
              console.log('\t\tItem ' + index + ': ' + currentItem)
              return total + listings.reduce( 
                (previousListing, currentListing) => {
                  if (listedPrice(currentListing)(currentItem) !== 0)
                  {
                    console.log('\t\t\tPrice: ' + listedPrice(currentListing)(currentItem))
                    return listedPrice(currentListing)(currentItem)
                  }
                  return previousListing  
                }, 0
              )
            }, 0
          )
          const customer = {
            'customer' : currentCustomer.customer,
            'total' : totalItemsPrice
          }
          console.log('\tTotal Cart Price: ' + totalItemsPrice)
          customerCartTotals.push(customer)
          return customerCartTotals
        }, []
      )

    
  }

module.exports = {
  listing,
  cart,
  calculateTotals
}
