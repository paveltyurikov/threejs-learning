import { Box, Text } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import Led, { LED_MODEL } from "./Led";
import { TEXT_Y_ROTATION } from "./lib";
import SizeY, { SizeX } from "./Size";


const LED_X = (4 - LED_MODEL.case.args[0]) / 2;

const STRIP_BASE = {
  width: 25,
  height: 8,
};

// const BORDER_PADDING = 4.17;
const SPACE_BETWEEN_LED_CENTERS = 8.33;

const ContactsRails = ({
  color = "pink",
  showDimensions,
}: {
  color?: string;
  showDimensions: boolean;
}) => {
  return (
    <mesh>
      <Box
        args={[1.5, STRIP_BASE.width, 0.1]}
        position={[-2.5, 0, 0.05]}
        material-color={color}
      />
      <Box
        args={[1.5, STRIP_BASE.width, 0.1]}
        position={[2.5, 0, 0.05]}
        material-color={color}
      />
      {showDimensions ? (
        <>
          <Text
            position={[
              STRIP_BASE.height / 2 - 1.75,
              STRIP_BASE.width / 2 - 1.44,
              1.11,
            ]}
            color="black"
            anchorX="center"
            anchorY="middle"
            rotation={TEXT_Y_ROTATION}
          >
            12V+
          </Text>
          <Text
            position={[
              -STRIP_BASE.height / 2 + 1.25,
              STRIP_BASE.width / 2 - 1.44,
              2.051,
            ]}
            color="black"
            anchorX="center"
            anchorY="middle"
            rotation={TEXT_Y_ROTATION}
          >
            12V-
          </Text>
        </>
      ) : null}
    </mesh>
  );
};

const Dimensions = () => {
  return (
    <>
      <SizeY size={25} position={[-4 + 0.5, 0, 0]} />
      <SizeX size={8} position={[0, 25 / 2 - 1, 0]} />
    </>
  );
};
const LedStrip120Cut = ({
  showDimensions = false,
  ...props
}: { showDimensions?: boolean } & MeshProps) => {
  return (
    <mesh {...props}>
      <Led position={[LED_X, SPACE_BETWEEN_LED_CENTERS, 0]} />
      <Led position={[LED_X, 0, 0]} />
      <Led position={[LED_X, -SPACE_BETWEEN_LED_CENTERS, 0]} />
      <ContactsRails showDimensions={showDimensions} />
      <Box
        args={[STRIP_BASE.height, STRIP_BASE.width, 0.1]}
        position={[0, 0, 0]}
        material-color="rgba(239, 239, 240)"
      />

      {showDimensions ? <Dimensions /> : null}
    </mesh>
  );
};

export default LedStrip120Cut;
