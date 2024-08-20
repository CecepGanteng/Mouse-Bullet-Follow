import { m, motion } from "framer-motion";
import { useEffect, useState } from "react";

function App() {

  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  });

  console.log(mousePosition);

  useEffect(() => {

    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const [cursorVariant, setCursorVariant] = useState("default");

  const variants = {

    default: {
      x: mousePosition.x -16,
      y: mousePosition.y -16
      
    },

    text: {
      height: 150,
      width: 150,
      x: mousePosition.x -16,
      y: mousePosition.y -16,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },

    taping: {
      scale: 1.8,
    }

  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");



  return (
    <div className="App">
      <h1 
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
      className="title">HELLO WORLD</h1>
      <motion.div 
      className="cursor"
      whileTap={{scale: 1.9}}
      variants={variants}
      animate={cursorVariant}
      >

      </motion.div>
    </div>
  );
}

export default App;
