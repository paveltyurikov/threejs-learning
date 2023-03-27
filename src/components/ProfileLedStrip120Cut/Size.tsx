import { Line, Text } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import {TEXT_Y_ROTATION} from "./lib";


const Z = 0.1;

const TG = 0.25
export const SizeY = ({
  size,
  color = "black",
  ...meshProps
}: { size: number; color?: string } & MeshProps) => {
  return (
    <mesh {...meshProps}>
      <Text
        position={[TG, 0, Z]}
        color={color}
        anchorX="center"
        anchorY="middle"
        rotation={TEXT_Y_ROTATION}
      >
        {size}mm
      </Text>
      <Line
        points={[
          [0, -size / 2, Z],
          [0, size / 2, Z],
        ]}
        color={color} // Default
        lineWidth={1} // In pixels (default)
        segments // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
        dashed={false} // Default
      />
      <Line
        points={[
          [0, -size / 2, Z],
          [TG, -size / 2 + 1, Z],
        ]} // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
        color={color} // Default
        lineWidth={1} // In pixels (default)
        segments // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
        dashed={false} // Default
        // All THREE.LineMaterial props are valid
      />
      <Line
        points={[
          [0, -size / 2, Z],
          [-TG, -size / 2 + 1, Z],
        ]}
        color={color}
        lineWidth={1}
        segments
        dashed={false}
      />
      <Line
        points={[
          [0, size / 2, Z],
          [TG, size / 2 - 1, Z],
        ]}
        color={color}
        lineWidth={1}
        segments
        dashed={false}
      />
      <Line
        points={[
          [0, size / 2, Z],
          [-TG, size / 2 - 1, Z],
        ]} // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
        color={color} // Default
        lineWidth={1} // In pixels (default)
        segments // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
        dashed={false} // Default
      />
    </mesh>
  );
};

export const SizeX = ({
  size=8,
  color = "black",
  ...meshProps
}: { size: number; color?: string } & MeshProps) => {
  return (
    <mesh {...meshProps}>
      <Text
        position={[0, TG, Z]}
        color={color}
        anchorX="center"
        anchorY="middle"
        rotation={[0, 0,0]}
      >
        {size}mm
      </Text>
      <Line
        points={[
          [-size / 2, 0 , Z],
          [size / 2, 0 , Z],
        ]}
        color={color} // Default
        lineWidth={1} // In pixels (default)
        segments // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
        dashed={false} // Default
      />
      <Line
        points={[
          [-size / 2, 0, Z],
          [-size / 2 + 1, TG, Z],
        ]} // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
        color={color} // Default
        lineWidth={1} // In pixels (default)
        segments // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
        dashed={false} // Default
        // All THREE.LineMaterial props are valid
      />
      <Line
        points={[
          [-size / 2, 0, Z],
          [-size / 2 + 1, -TG, Z],
        ]}
        color={color}
        lineWidth={1}
        segments
        dashed={false}
      />
      <Line
        points={[
          [size / 2, 0, Z],
          [size / 2 - 1, TG, Z],
        ]}
        color={color}
        lineWidth={1}
        segments
        dashed={false}
      />
      <Line
        points={[
          [size / 2, 0, Z],
          [size / 2 - 1, -TG, Z],
        ]} // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
        color={color} // Default
        lineWidth={1} // In pixels (default)
        segments // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
        dashed={false} // Default
      />
    </mesh>
  );
};

export default SizeY;
