import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ProductResponse } from '../src/interfaces/productInterfaces';

export const axiosMock = new MockAdapter(axios);

export const mockProducts: ProductResponse[] = [{
    createdAt: "2022-12-09T00:30:23.966Z",
    product: "Fantastic Fresh Gloves",
    points: 23913,
    image: "https://loremflickr.com/640/480/city",
    is_redemption: true,
    id: "4"
},
{
    createdAt: "2022-12-08T18:54:56.243Z",
    product: "Rustic Rubber Bacon",
    points: 69814,
    image: "https://loremflickr.com/640/480/people",
    is_redemption: true,
    id: "5"
},
]

export const mockFilteredProducts: ProductResponse[] = [{
    createdAt: "2022-12-09T00:30:23.966Z",
    product: "Fantastic Fresh Gloves",
    points: 23913,
    image: "https://loremflickr.com/640/480/city",
    is_redemption: true,
    id: "4"
},
{
    createdAt: "2022-12-08T18:54:56.243Z",
    product: "Rustic Rubber Bacon",
    points: 69814,
    image: "https://loremflickr.com/640/480/people",
    is_redemption: true,
    id: "5"
},
{
    createdAt: "2022-12-08T20:32:14.169Z",
    product: "Oriental Soft Pants",
    points: 87794,
    image: "https://loremflickr.com/640/480/animals",
    is_redemption: true,
    id: "8"
},
{
    createdAt: "2022-12-09T05:46:47.645Z",
    product: "Luxurious Rubber Bacon",
    points: 13063,
    image: "https://loremflickr.com/640/480/food",
    is_redemption: true,
    id: "9"
}]