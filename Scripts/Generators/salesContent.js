import SalesModule from '../Modules/SalesModule.js';

const output = document.querySelector('.output');

console.log(SalesModule.getAccRevenueThisYearByRestaurant("bjørvika"));
console.log(SalesModule.getGrossRevenueThisYearByRestaurant("bjørvika"));
console.log(SalesModule.getGrossRevenueLastYearByRestaurant("bjørvika"));

