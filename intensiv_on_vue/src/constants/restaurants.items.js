import restaurantImage1 from "@images/restaurants/restaurant-1.svg";
import restaurantImage2 from "@images/restaurants/restaurant-2.svg";
import restaurantImage3 from "@images/restaurants/restaurant-3.svg";
import restaurantImage4 from "@images/restaurants/restaurant-4.svg";
import restaurantImage5 from "@images/restaurants/restaurant-5.svg";
import restaurantImage6 from "@images/restaurants/restaurant-6.svg";

const RESTAURANTS_ITEMS = [
  {
    id: "1",
    image: {
      src: restaurantImage1,
      alt: "Delivery Foods Пицца плюс Restaurant",
    },
    name: "Пицца плюс",
    rating: 4.5,
    min_price: 900,
    time: 50,
    type: "Пицца",
  },
  {
    id: "2",
    image: {
      src: restaurantImage2,
      alt: "Delivery Foods Тануки Restaurant",
    },
    name: "Тануки",
    rating: 4.5,
    min_price: 900,
    time: 50,
    type: "Пицца и суши",
  },
  {
    id: "3",
    image: {
      src: restaurantImage3,
      alt: "Delivery Foods FoodBand Restaurant",
    },
    name: "FoodBand",
    rating: 4.5,
    min_price: 900,
    time: 50,
    type: "Пицца",
  },
  {
    id: "4",
    image: {
      src: restaurantImage4,
      alt: "Delivery Foods Жадина-пицца Restaurant",
    },
    name: "Жадина-пицца",
    rating: 4.5,
    min_price: 900,
    time: 50,
    type: "Пицца",
  },
  {
    id: "5",
    image: {
      src: restaurantImage5,
      alt: "Delivery Food Точка еды Restaurant",
    },
    name: "Точка еды",
    rating: 4.5,
    min_price: 900,
    time: 50,
    type: "Пицца",
  },
  {
    id: "6",
    image: {
      src: restaurantImage6,
      alt: "Delivery Food PizzaBurger Restaurant",
    },
    name: "PizzaBurger",
    rating: 4.5,
    min_price: 900,
    time: 50,
    type: "Пицца",
  },
];

export default RESTAURANTS_ITEMS;
