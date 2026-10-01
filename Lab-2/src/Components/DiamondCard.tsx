import type { DiamondCardProps } from "../data/data";

export default function DiamondCard({
  image,
  productName,
  location,
  rating,
  price,
}: DiamondCardProps) {
  return (
    <div className="DiamondCard">
      <img className="DiamondCardImage" src={image} alt={productName} />

      <h2>{productName}</h2>

      <p className="location">{location}</p>

      <p className={rating > 4.0 ? "ratingGood" : "ratingBad"}>
        {rating} ★
      </p>

      <p className="price">{price}/night</p>
    </div>
  );
}
