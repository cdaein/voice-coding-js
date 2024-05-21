export const sketch = ({ wrap, canvas, context, width, height }) => {
  wrap.render = ({ width, height }) => {
    context.fillStyle = `lightpink`;
    context.fillRect(0, 0, width, height);

    context.arc(
      width / 2,
      height / 2,
      Math.min(width, height) / 2,
      0,
      Math.PI * 2,
      false,
    );
    context.fillStyle = `white`;
    context.fill();
    context.strokeStyle = `blue`;
    context.stroke();
  };
};

export const settings = {
  // dimensions: [800, 800],
  pixelRatio: window.devicePixelRatio,
  animate: false,
  duration: 6_000, // in ms
};
