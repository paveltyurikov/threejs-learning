import {lighten} from "@mui/material";
import { Center, Extrude } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import {COLORS} from "../../constatnts/colors";


const PROFILE_SVG = `
<svg
   width="16"
   height="7"
   viewBox="0 0 16 7"
   xmlns="http://www.w3.org/2000/svg"
   >
  <path
       d="m 0,0.01006 v 6.98997 h 16 v -7 l -1.12464,0.01 -0.76522,1.03295 0.0116,1.80516 0.76522,0.98281 -0.78841,0.62177 V 5.93696 H 1.92464 V 4.40258 l -0.8,-0.56161 0.8,-0.9828 V 1.06304 L 0.81159,0 Z"
        />
</svg>
`;

const extrudeSettings = { steps: 2, depth: 25, bevelEnabled: false };

const SHAPES = new SVGLoader()
  .parse(PROFILE_SVG)
  .paths.flatMap((g, index) =>
    g.toShapes(true).map((shape) => ({ shape, color: g.color, index }))
  );

const SHAPE = SHAPES[0].shape;

// TODO get svg to shape
// const shape = useMemo(() => {
//     const _shape = new Shape();
//
//     _shape.moveTo(0, 0);
//     _shape.lineTo(SIDE, 0);
//     _shape.lineTo(SIDE, SIDE * 2);
//     _shape.lineTo(0, SIDE * 2);
//     _shape.lineTo(0, SIDE * 3);
//     _shape.lineTo(-SIDE, SIDE * 3);
//     _shape.lineTo(-SIDE, SIDE);
//     _shape.lineTo(0, SIDE);
//
//     return _shape;
//   }, []);
const Profile = (props: any) => {
    console.log(SHAPE)
  return (
    <Center position={[0, 0, 3.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <Extrude args={[SHAPE, extrudeSettings]} {...props}  >
            <meshBasicMaterial attach="material" color={lighten("rgba(108, 122, 137)", .4)} />
        </Extrude>
    </Center>
  );
};

export default Profile;
