import { useRef } from "react";
import { animate } from "framer-motion";
import { InView } from "react-intersection-observer"; // Import InView

export function Counter({ from, to, isFixed = false, point = 2 }) {
  const nodeRef = useRef();

  const startAnimation = (inView) => {
    if (inView) {
      const node = nodeRef.current;

      const controls = animate(from, to, {
        duration: 0.8,
        onUpdate(value) {
          node.textContent = isFixed ? value.toFixed(point) : value.toFixed(0);
        },
      });

      return () => controls.stop();
    }
  };

  return (
    <InView as="div" onChange={startAnimation}>
      <span ref={nodeRef} />
    </InView>
  );
}
