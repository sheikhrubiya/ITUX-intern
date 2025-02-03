import React from "react";
import almirah from "../assets/furnitures/almirah.jpg";
import table from "../assets/furnitures/table.jpg";
import sofa from "../assets/furnitures/bed.jpg";
import bed from "../assets/furnitures/bed.jpg";
import chair from "../assets/furnitures/chair.jpg";
import cabinet from "../assets/furnitures/almirah.jpg";
import outdoor1 from '../assets/image19.jpeg'
import outdoor2 from '../assets/image26.jpeg'
import outdoor3 from '../assets/english.jpeg'
import outdoor4 from '../assets/outdoor1.jpeg'
import outdoor5 from '../assets/outdoor2.jpeg'
import outdoor6 from '../assets/outdoor3.jpeg'
import bed1 from '../assets/bed1.jpg'
import bed2 from '../assets/bed2.jpg'
import bed3 from '../assets/bed3.jpg'
import bed4 from '../assets/bed4.jpg'
import bed5 from '../assets/bed5.jpg'
import bed6 from '../assets/bed6.jpg'
import bed7 from '../assets/bed7.jpg'
const Data = [
  {
    id: 1,
    name: "product1",
    price: "25000",
    image: bed,
    category: "Bed",
    relatedItem:'related',
    type: "topselling",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 4,
  },
  {
    id: 2,
    name: "product2",
    price: "35000",
    image: table,
    category: "Table",
    type: "featured",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 4,
  },
  {
    id: 3,
    name: "product3",
    price: "45000",
    image: sofa,
    category: "Sofa",
    type: "featured",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 4,
  },
  {
    id: 4,
    name: "product4",
    price: "15000",
    image: almirah,
    category: "Almirah",
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 4,
  },
  {
    id: 5,
    name: "product5",
    price: "55000",
    image: chair,
    category: "Chair",
    type: "topselling",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 4,
  },
  {
    id: 6,
    name: "product6",
    price: "25000",
    image: sofa,
    category: "Sofa",
    type: "featured",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 4,
  },
  {
    id: 7,
    name: "product7",
    price: "25000",
    image: almirah,
    category: "Almirah",
    type: "topselling",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 4,
  },
  {
    id: 8,
    name: "product8",
    price: "25000",
    image: sofa,
    category: "Sofa",
    type: "featured",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",

    rating: 3,
  },
  {
    id: 9,
    name: "product9",
    price: "85000",
    image: bed,
    category: "Bed",
    relatedItem:'related',
    type: "topselling",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 5,
  },
  {
    id: 10,
    name: "product10",
    price: "125000",
    image: cabinet,
    category: "Cabinet",
    type: "featured",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 2.2,
  },
  {
    id: 11,
    name: "product11",
    price: "27000",
    image: chair,
    category: "Chair",
    type: "topselling",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 4.1,
  },
  {
    id: 12,
    name: "product12",
    price: "45000",
    image: table,
    category: "Table",
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
  {
    id: 13,
    name: "product13",
    price: "45000",
    image: outdoor1,
    category: "Outdoor",
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
  {
    id: 14,
    name: "product14",
    price: "45000",
    image: outdoor2,
    category: "Outdoor",
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
  {
    id: 15,
    name: "product15",
    price: "45000",
    image: outdoor3,
    category: "Outdoor",
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
  {
    id: 16,
    name: "product16",
    price: "45000",
    image: outdoor4,
    category: "Outdoor",
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
  {
    id: 17,
    name: "product15",
    price: "45000",
    image: outdoor5,
    category: "Outdoor",
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
  {
    id: 18,
    name: "product15",
    price: "45000",
    image: outdoor6,
    category: "Outdoor",
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
  {
    id: 19,
    name: "product15",
    price: "45000",
    image: bed1,
    category: "Bed",
    relatedItem:'related',
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
  {
    id: 20,
    name: "product15",
    price: "45000",
    image: bed2,
    category: "Bed",
    relatedItem:'related',
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
  {
    id: 21,
    name: "product15",
    price: "45000",
    image: bed3,
    category: "Bed",
    relatedItem:'related',
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
  {
    id: 22,
    name: "product15",
    price: "45000",
    image: bed4,
    category: "Bed",
    relatedItem:'related',
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
  {
    id: 22,
    name: "product15",
    price: "45000",
    image: bed5,
    category: "Bed",
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
  {
    id: 23,
    name: "product15",
    price: "45000",
    image: bed6,
    category: "Bed",
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
  {
    id: 24,
    name: "product15",
    price: "45000",
    image: bed7,
    category: "Bed",
    type: "new",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed enim eum, optio ex rerum et maxime facilis tenetur incidunt natus quisquam dolor ut in voluptatum rem quidem esse minima.",
    rating: 3.2,
  },
];
export default Data;
