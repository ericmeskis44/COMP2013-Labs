import DiamondCard from "./DiamondCard";
import type { DiamondCardProps } from "../data/data";

interface DiamondContainerProps {
  data: DiamondCardProps[];
}
export default function DiamondContainer({ data }: DiamondContainerProps) {
  return (
    <div className="DiamondContainer">
      {data.map((list) => (
        <DiamondCard key={list.id} {...list} />
      ))}
    </div>
  );
}
