'use client'

import { useState } from "react"
import SVGFrame from "./SVGFrame"
import Controls from "./Controls"

export default function Generator() {
  const [shapeAmount, setShapeAmount] = useState(5);

  const height = 100*9/16;

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Controls />
      <div className="w-[50rem] aspect-[16/9] border border-black">
        <SVGFrame height={height} shapeAmount={shapeAmount} shapeHeight={10}/>
      </div>
    </div>
  )
}