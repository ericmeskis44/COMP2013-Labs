import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";

export interface DiamondCardProps {
  id: number;
  image: string;
  productName: string;
  location: string;
  rating: number;
  price: string;
}

export const data: DiamondCardProps[] = [
  {
    id: 1,
    image: image1,
    productName: "Indonesia",
    location: "Gili Air Hotel",
    rating: 4.8,
    price: "$589",
  },
  {
    id: 2,
    image: image2,
    productName: "Seychelles",
    location: "Hilton Resort",
    rating: 4.2,
    price: "$629",
  },
  {
    id: 3,
    image: image3,
    productName: "Virgin Islands",
    location: "Goa Resort",
    rating: 3.5,
    price: "$485",
  },
  {
    id: 4,
    image: image4,
    productName: "Bahamas",
    location: "Kuredu Resort",
    rating: 4.2,
    price: "$729",
  },
  {
    id: 5,
    image: image5,
    productName: "Mauritius",
    location: "Tour D'eau Douce",
    rating: 4.9,
    price: "$877",
  },
  {
    id: 6,
    image: image6,
    productName: "Bermuda",
    location: "Staniel Cay Hotel",
    rating: 3.2,
    price: "$365",
  },
];

export default data;

