import MenuModule from '../Modules/MenuModule.js'

const price = MenuModule.getAll().forEach().filter(element => element.price > 50);
alert (price);