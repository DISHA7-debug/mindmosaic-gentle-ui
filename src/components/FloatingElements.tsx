import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const FloatingElements = () => {
  const elements = [
    { size: 8, x: "10%", y: "20%", delay: 0, type: "heart" },
    { size: 6, x: "80%", y: "15%", delay: 1, type: "bubble" },
    { size: 10, x: "70%", y: "60%", delay: 2, type: "heart" },
    { size: 5, x: "20%", y: "70%", delay: 0.5, type: "bubble" },
    { size: 7, x: "90%", y: "40%", delay: 1.5, type: "bubble" },
    { size: 6, x: "5%", y: "50%", delay: 3, type: "heart" },
    { size: 9, x: "50%", y: "10%", delay: 2.5, type: "bubble" },
    { size: 4, x: "40%", y: "80%", delay: 1.2, type: "heart" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6 + el.delay,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          {el.type === "heart" ? (
            <Heart
              className="text-rose/30 fill-rose/20"
              size={el.size * 4}
            />
          ) : (
            <div
              className="rounded-full bg-lavender/15"
              style={{ width: el.size * 4, height: el.size * 4 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
