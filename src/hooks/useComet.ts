import { RefObject, useEffect } from 'react';

const useComet = (containerRef: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (containerRef && containerRef.current) {
      // Get container's data
      const containerElement = containerRef.current;
      const containerWidth = containerElement.offsetWidth;
      const containerHeight = containerElement.offsetHeight;

      // Speed of the movement proportional to containerHeight for the same speed across devices
      const MOVE_SPEED = containerHeight / 100;
      const GOLDEN_CHANCE = 0.025;
      const DEFAULT_TAIL = 100;
      const GOLDEN_TAIL = 150;

      // Function to create a new comet element
      const createComet = (initialX: number, targetX: number) => {
        // Create a comet element
        const cometElement = document.createElement('div');

        // Set a randomly long tail
        const isGolden = Math.random() <= GOLDEN_CHANCE;
        const cometWidth = isGolden ? GOLDEN_TAIL : Math.random() * 50 + DEFAULT_TAIL;
        const cometHeight = 5;
        const cometColor =
          Math.random() > 0.75
            ? `rgba(${Math.random() * 100 + 155}, ${100}, ${Math.random() * 100 + 155}, ${
                Math.random() + 0.5
              })`
            : `rgba(255,${Math.random() * 55 + 200},255,${Math.random() + 0.5})`;
        cometElement.classList.add('comet');
        cometElement.style.background = 'red';
        cometElement.style.borderRadius = '999px';
        cometElement.style.width = `${cometWidth}px`;
        cometElement.style.height = `${cometHeight}px`;
        cometElement.style.position = 'absolute';
        cometElement.style.filter = `drop-shadow(0px 0 ${isGolden ? 8 : 4}px ${
          isGolden ? 'gold' : cometColor
        })`;
        cometElement.style.background = `linear-gradient(-45deg, ${
          isGolden ? 'gold' : cometColor
        }, rgba(0,0,0,0))`;

        // Initialize comet's starting point
        cometElement.style.left = `${initialX}px`;
        cometElement.style.top = `-10px`;

        // Render comet inside container
        containerElement.appendChild(cometElement);

        let targetY = containerHeight;

        // Function to handle comet's movement
        const handleMove = () => {
          if (!cometElement) return;
          const currentX = parseFloat(cometElement.style.left || '0');
          const currentY = parseFloat(cometElement.style.top || '0');
          const offsetX = cometWidth / 2;
          const offsetY = cometHeight / 2;

          // Check if the comet has reached the target position with a small tolerance
          if (
            Math.abs(currentX - targetX) < offsetX * 10 &&
            Math.abs(currentY - targetY) < offsetY * 10
          ) {
            // Remove comet from container and clear interval
            containerElement.removeChild(cometElement);
            clearInterval(moveInterval);
          } else {
            // Calculate the movement for the comet towards the target
            const deltaX = targetX - currentX - offsetX / 2;
            const deltaY = targetY - currentY - offsetY / 2;
            const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
            cometElement.style.transform = `rotateZ(${angle}deg)`;

            const moveX = Math.cos((angle * Math.PI) / 180) * MOVE_SPEED;
            const moveY = Math.sin((angle * Math.PI) / 180) * MOVE_SPEED;

            // Update the comet's position
            cometElement.style.left = `${currentX + moveX}px`;
            cometElement.style.top = `${currentY + moveY}px`;
          }
        };

        // Create an interval to move the comet
        let moveInterval: NodeJS.Timeout | undefined = setInterval(handleMove, 10);

        // Cleanup function to remove the event listener and clear the interval when the comet is unmounted
        return () => {
          clearInterval(moveInterval);
          containerElement.removeChild(cometElement);
        };
      };

      // Add a click event listener to the container element to create a new comet on each click
      const handleClick = (e: MouseEvent) => {
        // Randomize comet's initial position
        const initialX = Math.floor(Math.random() * (containerElement.offsetWidth - 20)); // Adjust the comet's width
        // Calculate the ratio of the height of the container to the Y coordinate of the click
        const ratioY = containerElement.offsetHeight / e.pageY;
        // Calculate the difference of click X coordinate and X of the comet
        const diffX = Math.abs(initialX - e.pageX);
        // Calculate the distance from initial X to the expected landing spot
        const distanceX = ratioY * diffX;
        // Initialize coordinates of the expected landing spot
        const targetX = initialX > e.pageX ? initialX - distanceX : initialX + distanceX;
        // Initialize comet creation
        createComet(initialX, targetX - DEFAULT_TAIL);
      };

      // Add a click event listener to the container element to create a new comet on each click
      containerElement.addEventListener('click', handleClick);

      return () => {
        containerElement.removeEventListener('click', handleClick);
      };
    }
  }, [containerRef]);

  return null;
};

export default useComet;
