import { useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function SplitImage({ onDone }) {
  const [clicked, setClicked] = useState(false);

  const tiles = Array.from({ length: 4 }); // KEEP IT SIMPLE (2x2 grid)

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      onDone();
    }, 800);
  };

  return (
    <div
      onClick={handleClick}
      className="grid grid-cols-2 w-64 h-64 cursor-pointer"
    >
      {tiles.map((_, i) => (
        <motion.div
          key={i}
          animate={
            clicked
              ? {
                  scale: 0.5,
                  opacity: 0,
                }
              : {}
          }
          transition={{ duration: 0.6 }}
          className="bg-cover"
          style={{
            backgroundImage: `url(${me})`,
            backgroundSize: "200px 200px",
            backgroundPosition: `${-(i % 2) * 100}px ${
              -Math.floor(i / 2) * 100
            }px`,
          }}
        />
      ))}
    </div>
  );
}