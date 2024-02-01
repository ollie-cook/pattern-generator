'use client'

import { useState } from "react"
import SVGFrame from "./SVGFrame"
import Controls from "./Controls"

export default function Generator() {
  const [shapeAmount, setShapeAmount] = useState(4);
  const [shapeSize, setShapeSize] = useState(10);
  const [bgColour, setBgColour] = useState('#53C18A');
  const [shapeColour, setShapeColour] = useState('#194D33');

  const height = 100*9/16;

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Controls 
        setShapeAmount={(value: number) => setShapeAmount(value)} 
        setShapeSize={(value: number) => setShapeSize(value)}
        bgColour={bgColour}
        setBgColour={(value: string) => setBgColour(value)}
        shapeColour={shapeColour}
        setShapeColour={(value: string) => setShapeColour(value)}
      />
      <div className="w-[50rem] aspect-[16/9] border border-black">
        <SVGFrame height={height} shapeAmount={shapeAmount} shapeHeight={shapeSize} bgColour={bgColour} shapeColour={shapeColour} />
      </div>
    </div>
  )
}