import * as React from "react";

export default function MsWindow() {
  const [offsetX, setOffsetX] = React.useState<number>(0);
  const [offsetY, setOffsetY] = React.useState<number>(0);
  const [moveFlag, setMoveFlag] = React.useState<boolean>(false);

  const [gesutreStartX, setGestureStartX] = React.useState<number>(0);
  const [gesutreStartY, setGestureStartY] = React.useState<number>(0);
  const [gesutreEndY, setGestureEndY] = React.useState<number>(0);
  const [gesutreEndX, setGestureEndX] = React.useState<number>(0);

  return (
    <div
      className="ms-window"
      style={{
        top: offsetX,
        left: offsetY,
      }}
    >
      <div
        className="ms-window-title"
        onMouseMove={(e) => {
          // console.log(e);
          // console.log(e.clientY);

          if (moveFlag) {
            setOffsetX(offsetX + e.movementX);
            setOffsetY(offsetY + e.movementY);
          }
        }}
        onMouseDown={(e) => {
          setMoveFlag(true);
        }}
        onMouseUp={(e) => {
          // alert(0);
          setMoveFlag(false);
          // setGestureEndX(e.clientX)
          // setGestureEndY(e.clientY);
          // console.log(gesutreStartX-gesutreEndX)
          // console.log(gesutreStartY-gesutreEndY)
        }}
      >
        dsdsds
      </div>
    </div>
  );
}
