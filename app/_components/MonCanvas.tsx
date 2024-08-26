"use client"
import React, { useState } from 'react'
import {Canvas} from "@react-three/fiber"
import Experience from './Experience'
import { OrbitControls } from '@react-three/drei'
import { createXRStore, XR } from '@react-three/xr'



const store = createXRStore()

function MonCanvas() {
    const [red, setRed] = useState(false)
    return <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
          <mesh pointerEventsType={{ deny: 'grab' }} onClick={() => setRed(!red)} position={[0, 1, -1]}>
            <boxGeometry />
            <meshBasicMaterial color={red ? 'red' : 'blue'} />
          </mesh>
        </XR>
      </Canvas>
    </>
}

export default MonCanvas
