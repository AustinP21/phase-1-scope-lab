var customerName = 'bob'
const leastFavoriteCustomer = 'not bob'
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}
function setBestCustomer() {
    bestCustomer = 'not bob'
    return bestCustomer
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer
}
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'not bob'
    return bestCustomer
}
