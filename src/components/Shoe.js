import React, { useRef, useState } from 'react';
import state from "./State";
import { useGLTF, OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";

// function Shoe({ ...props }) {

//   const group = useRef()
//   const snap = useSnapshot(state);
//   const [hovered, set] = useState(null)
//   const { nodes, materials } = useGLTF('newBmw.glb')
//   return (
//     <group ref={group} {...props} dispose={null}
//       onPointerOver={(e) => {set(e.object.material.name)}}
//       onPointerOut={(e) => {e.intersections.length===0 && set(null)}}
//       onPointerDown={(e) => {e.stopPropagation(); state.current = e.object.material.name}}
//       onPointerMissed={(e) => {state.current = null}}
//     >
//       <mesh  material-color={snap.items.mesh} geometry={nodes.pPipe12_group54.geometry} material={nodes.pPipe12_group54.material} />
//       <mesh  material-color={snap.items.caps} geometry={nodes.group54_pPipe13.geometry} material={nodes.group54_pPipe13.material} />
//       <mesh geometry={nodes.pSphere3_group53.geometry} material={nodes.pSphere3_group53.material} />
//       <mesh geometry={nodes.pPipe19_group55.geometry} material={nodes.pPipe19_group55.material} />
//       <mesh
//         geometry={nodes.polySurface10_polySurface7_polySurface5_polySurface3_polySurface1_car1.geometry}
//         material={nodes.polySurface10_polySurface7_polySurface5_polySurface3_polySurface1_car1.material}
//       />
//       <mesh
//         geometry={
//           nodes.polySurface7_polySurface5_polySurface3_polySurface1_car1_polySurface14_polySurface12_polySurface9
//             .geometry
//         }
//         material={
//           nodes.polySurface7_polySurface5_polySurface3_polySurface1_car1_polySurface14_polySurface12_polySurface9
//             .material
//         }
//       />
//       <mesh geometry={nodes.polySurface11_1.geometry} material={nodes.polySurface11_1.material} />
//       <mesh geometry={nodes.polySurface11_1_1.geometry} material={nodes.polySurface11_1_1.material} />
//       <mesh geometry={nodes.polySurface11_1_2.geometry} material={nodes.polySurface11_1_2.material} />
//       <mesh geometry={nodes.pPipe6.geometry} material={nodes.pPipe6.material} />
//       <mesh geometry={nodes.pPlane47_group50.geometry} material={nodes.pPlane47_group50.material} />
//       <mesh geometry={nodes.pPlane46_group49.geometry} material={nodes.pPlane46_group49.material} />
//       <mesh geometry={nodes.pPipe5_group45.geometry} material={nodes.pPipe5_group45.material} />
//       <mesh geometry={nodes.floor1_group44.geometry} material={nodes.floor1_group44.material} />
//       <mesh geometry={nodes.group54_pCylinder14.geometry} material={nodes.group54_pCylinder14.material} />
//       <mesh geometry={nodes.polySurface6.geometry} material={nodes.polySurface6.material} />
//       <mesh geometry={nodes.polySurface2.geometry} material={nodes.polySurface2.material} />
//       <mesh geometry={nodes.polySurface8.geometry} material={nodes.polySurface8.material} />
//       <mesh geometry={nodes.polySurface13.geometry} material={nodes.polySurface13.material} />
//       <mesh geometry={nodes.pCube8.geometry} material={nodes.pCube8.material} />
//       <mesh geometry={nodes.pPipe4.geometry} material={nodes.pPipe4.material} />
//       <mesh geometry={nodes.polySurface32.geometry} material={nodes.polySurface32.material} />
//       <mesh geometry={nodes.polySurface33.geometry} material={nodes.polySurface33.material} />
//       <mesh geometry={nodes.pPlane43_1.geometry} material={nodes.pPlane43_1.material} />
//       <mesh geometry={nodes.pPlane43_1_1.geometry} material={nodes.pPlane43_1_1.material} />
//       <mesh geometry={nodes.pPlane43_1_2.geometry} material={nodes.pPlane43_1_2.material} />
//       <mesh geometry={nodes.pCube6_group41.geometry} material={nodes.pCube6_group41.material} />
//       <mesh geometry={nodes.pCube5.geometry} material={nodes.pCube5.material} />
//       <mesh geometry={nodes.pCube7.geometry} material={nodes.pCube7.material} />
//       <mesh geometry={nodes.pPipe7.geometry} material={nodes.pPipe7.material} />
//       <mesh geometry={nodes.pCylinder11.geometry} material={nodes.pCylinder11.material} />
//       <mesh geometry={nodes.pPlane37_group35.geometry} material={nodes.pPlane37_group35.material} />
//       <mesh geometry={nodes.pPlane36.geometry} material={nodes.pPlane36.material} />
//       <mesh geometry={nodes.pPlane41_group39.geometry} material={nodes.pPlane41_group39.material} />
//       <mesh geometry={nodes.pPlane39.geometry} material={nodes.pPlane39.material} />
//       <mesh geometry={nodes.pPlane38.geometry} material={nodes.pPlane38.material} />
//       <mesh geometry={nodes.pCylinder8_1.geometry} material={nodes.pCylinder8_1.material} />
//       <mesh geometry={nodes.pCylinder8_1_1.geometry} material={nodes.pCylinder8_1_1.material} />
//       <mesh geometry={nodes.pCylinder7.geometry} material={nodes.pCylinder7.material} />
//       <mesh geometry={nodes.pPlane34.geometry} material={nodes.pPlane34.material} />
//       <mesh geometry={nodes.pCylinder9.geometry} material={nodes.pCylinder9.material} />
//       <mesh geometry={nodes.pPipe3.geometry} material={nodes.pPipe3.material} />
//       <mesh geometry={nodes.pPipe1.geometry} material={nodes.pPipe1.material} />
//       <mesh geometry={nodes.pCylinder2_1.geometry} material={nodes.pCylinder2_1.material} />
//       <mesh geometry={nodes.pCylinder2_1_1.geometry} material={nodes.pCylinder2_1_1.material} />
//       <mesh geometry={nodes.pPipe2.geometry} material={nodes.pPipe2.material} />
//       <mesh geometry={nodes.pCylinder6_1.geometry} material={nodes.pCylinder6_1.material} />
//       <mesh geometry={nodes.pCylinder6_1_1.geometry} material={nodes.pCylinder6_1_1.material} />
//       <mesh geometry={nodes.pCylinder1.geometry} material={nodes.pCylinder1.material} />
//       <mesh geometry={nodes.tyre1pCylinder2_1.geometry} material={nodes.tyre1pCylinder2_1.material} />
//       <mesh geometry={nodes.tyre1pCylinder2_1_1.geometry} material={nodes.tyre1pCylinder2_1_1.material} />
//       <mesh geometry={nodes.tyre1pPipe1.geometry} material={nodes.tyre1pPipe1.material} />
//       <mesh geometry={nodes.pPlane32_group30.geometry} material={nodes.pPlane32_group30.material} />
//       <mesh geometry={nodes.pPlane31.geometry} material={nodes.pPlane31.material} />
//       <mesh geometry={nodes.pPlane16.geometry} material={nodes.pPlane16.material} />
//       <mesh geometry={nodes.tyre1pCylinder1.geometry} material={nodes.tyre1pCylinder1.material} />
//       <mesh geometry={nodes.pCylinder5_1.geometry} material={nodes.pCylinder5_1.material} />
//       <mesh geometry={nodes.pCylinder5_1_1.geometry} material={nodes.pCylinder5_1_1.material} />
//       <mesh geometry={nodes.pPlane33_group31.geometry} material={nodes.pPlane33_group31.material} />
//       <mesh geometry={nodes.pPlane8.geometry} material={nodes.pPlane8.material} />
//       <mesh geometry={nodes.pPlane7_group25.geometry} material={nodes.pPlane7_group25.material} />
//       <mesh geometry={nodes.pPlane15_group29.geometry} material={nodes.pPlane15_group29.material} />
//       <mesh geometry={nodes.pPlane14.geometry} material={nodes.pPlane14.material} />
//       <mesh geometry={nodes.pPlane13.geometry} material={nodes.pPlane13.material} />
//       <mesh geometry={nodes.pPlane3.geometry} material={nodes.pPlane3.material} />
//       <mesh geometry={nodes.polySurface24_group21.geometry} material={nodes.polySurface24_group21.material} />
//       <mesh geometry={nodes.pCube2_group24.geometry} material={nodes.pCube2_group24.material} />
//       <mesh geometry={nodes.pPlane6.geometry} material={nodes.pPlane6.material} />
//       <mesh geometry={nodes.pPlane5.geometry} material={nodes.pPlane5.material} />
//       <mesh geometry={nodes.floor.geometry} material={nodes.floor.material} />
//       <mesh geometry={nodes.group21_polySurface21.geometry} material={nodes.group21_polySurface21.material} />
//       <mesh geometry={nodes.pCube1.geometry} material={nodes.pCube1.material} />
//       <mesh
//         geometry={nodes.polySurface1_car1_polySurface35_group46_1.geometry}
//         material={nodes.polySurface1_car1_polySurface35_group46_1.material}
//       />
//       <mesh
//         geometry={nodes.polySurface1_car1_polySurface35_group46_1_1.geometry}
//         material={nodes.polySurface1_car1_polySurface35_group46_1_1.material}
//       />
//       <mesh
//         geometry={nodes.polySurface1_car1_polySurface4_1.geometry}
//         material={nodes.polySurface1_car1_polySurface4_1.material}
//       />
//       <mesh
//         geometry={nodes.polySurface1_car1_polySurface4_1_1.geometry}
//         material={nodes.polySurface1_car1_polySurface4_1_1.material}
//       />
//       <mesh geometry={nodes.group55_pPipe18.geometry} material={nodes.group55_pPipe18.material} />
//       <mesh geometry={nodes.group55_pCylinder17.geometry} material={nodes.group55_pCylinder17.material} />
//       <mesh geometry={nodes.group55_pPipe21.geometry} material={nodes.group55_pPipe21.material} />
//       <mesh geometry={nodes.pPlane48_group51_1.geometry} material={nodes.pPlane48_group51_1.material} />
//       <mesh geometry={nodes.pPlane48_group51_1_1.geometry} material={nodes.pPlane48_group51_1_1.material} />
//       <mesh geometry={nodes.pPlane48_group51_1_2.geometry} material={nodes.pPlane48_group51_1_2.material} />
//       <mesh geometry={nodes.pSphere2.geometry} material={nodes.pSphere2.material} />
//       <mesh geometry={nodes.pPipe15.geometry} material={nodes.pPipe15.material} />
//       <mesh geometry={nodes.polySurface36_group52_1.geometry} material={nodes.polySurface36_group52_1.material} />
//       <mesh geometry={nodes.polySurface36_group52_1_1.geometry} material={nodes.polySurface36_group52_1_1.material} />
//       <mesh geometry={nodes.polySurface36_group52_1_2.geometry} material={nodes.polySurface36_group52_1_2.material} />
//       <mesh geometry={nodes.pCylinder10_1.geometry} material={nodes.pCylinder10_1.material} />
//       <mesh geometry={nodes.pCylinder10_1_1.geometry} material={nodes.pCylinder10_1_1.material} />
//       <mesh geometry={nodes.pCylinder15.geometry} material={nodes.pCylinder15.material} />
//       <mesh geometry={nodes.pPipe14.geometry} material={nodes.pPipe14.material} />
//       <mesh geometry={nodes.group55_pPipe20.geometry} material={nodes.group55_pPipe20.material} />
//       <mesh geometry={nodes.group55_pCylinder18.geometry} material={nodes.group55_pCylinder18.material} />
//       <mesh geometry={nodes.pPipe17.geometry} material={nodes.pPipe17.material} />
//       <mesh geometry={nodes.pPipe16.geometry} material={nodes.pPipe16.material} />
//       <mesh geometry={nodes.pCylinder16.geometry} material={nodes.pCylinder16.material} />
//       <mesh geometry={nodes.group54_pPipe11.geometry} material={nodes.group54_pPipe11.material} />
//       <mesh geometry={nodes.group54_pPipe10.geometry} material={nodes.group54_pPipe10.material} />
//       <mesh geometry={nodes.group54_pCylinder13.geometry} material={nodes.group54_pCylinder13.material} />
//       <mesh geometry={nodes.pPipe9.geometry} material={nodes.pPipe9.material} />
//       <mesh geometry={nodes.pPipe8.geometry} material={nodes.pPipe8.material} />
//       <mesh geometry={nodes.pCylinder12.geometry} material={nodes.pCylinder12.material} />
//     </group>
//   )

// }


function Shoe({ ...props }) {

  const group = useRef()
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('newShoe1.glb')
  const [hovered, set] = useState(null)

  return (
    <group ref={group} {...props} dispose={null}
      onPointerOver={(e) => {set(e.object.material.name)}}
      onPointerOut={(e) => {e.intersections.length===0 && set(null)}}
      onPointerDown={(e) => {e.stopPropagation(); state.current = e.object.material.name}}
      onPointerMissed={(e) => {state.current = null}}
    >
      <mesh material-color={snap.items.mesh} geometry={nodes.shoe.geometry} material={materials.mesh} />
      <mesh material-color={snap.items.sole} geometry={nodes.shoe_1.geometry} material={materials.sole} />
      <mesh material-color={snap.items.stripes} geometry={nodes.shoe_2.geometry} material={materials.stripes} />
      <mesh material-color={snap.items.band} geometry={nodes.shoe_3.geometry} material={materials.band} />
      <mesh material-color={snap.items.caps} geometry={nodes.shoe_4.geometry} material={materials.caps} />
      <mesh material-color={snap.items.patch} geometry={nodes.shoe_5.geometry} material={materials.patch} />
      <mesh material-color={snap.items.inner} geometry={nodes.shoe_6.geometry} material={materials.inner} />
      <mesh material-color={snap.items.laces} geometry={nodes.shoe_7.geometry} material={materials.laces} />
    </group>


  )
}

export default Shoe
