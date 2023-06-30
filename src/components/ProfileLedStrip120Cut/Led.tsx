import { Triplet } from "@react-three/cannon";
import { RoundedBox } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";


const CASE = {
  args: [4, 3.5, 1] as Triplet,
  position: [0, 0, 0.5] as Triplet,
  "material-color": "default",
} as const;

const LED = {
  args: [CASE.args[0] - 1, CASE.args[1] - 1, 0.2] as Triplet,
  position: [0, 0, 1] as Triplet,
  "material-color": "orange",
} as const;

const CONTACT_ARGS = [0.5, LED.args[1], 0.2] as Triplet;

export const LED_MODEL = {
  case: CASE,
  led: {
    args: [CASE.args[0] - 1, CASE.args[1] - 1, 0.2] as Triplet,
    position: [0, 0, 1] as Triplet,
    "material-color": "orange",
  },
  contact_plus: {
    args: CONTACT_ARGS,
    position: [-2.25, 0, CONTACT_ARGS[2] / 2] as Triplet,
    "material-color": "rgba(108, 122, 137)",
  },
  contact_minus: {
    args: CONTACT_ARGS,
    position: [2.25, 0, CONTACT_ARGS[2] / 2] as Triplet,
    "material-color": "rgba(108, 122, 137)",
  },
};

const Led = (props: MeshProps) => {
  return (
    <mesh {...props}>
      <RoundedBox {...LED_MODEL.case} />
      <RoundedBox {...LED_MODEL.led} />
      <RoundedBox {...LED_MODEL.contact_plus} />
      <RoundedBox {...LED_MODEL.contact_minus} />
    </mesh>
  );
};

export default Led;
