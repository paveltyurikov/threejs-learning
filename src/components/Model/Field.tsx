import { getNumbersRange } from "../../lib/arrays";


const getXYByIndex = (index: number) => {
  const y = index % 10 === 0 ? index / 10 - 1 : Math.floor(index / 10);
  const x = index - y * 10 ? index - y * 10 : 10;
  return [ y, 0.2, x - 1];
};
const Field = () => {
  const gridItems = getNumbersRange(1000);

  return (
    <>
      {gridItems.map((index) => (
        // @ts-ignore
        <mesh key={index} position={getXYByIndex(index)}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color={"hotpink"} />
        </mesh>
      ))}
    </>
  );
};

export default Field;
