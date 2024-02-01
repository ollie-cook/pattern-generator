'use client'

import { useState, useRef } from "react"
import SVGFrame from "./SVGFrame"
import Controls from "./Controls"

export default function Generator() {
  const [shapeAmount, setShapeAmount] = useState(4);
  const [shapeSize, setShapeSize] = useState(10);
  const [bgColour, setBgColour] = useState('#53C18A');
  const [shapeColour, setShapeColour] = useState('#194D33');

  const svgRef = useRef(null);

  const height = 100*9/16;

  const exportSVG = () => {
    if (svgRef.current == null) {
      console.log("svgRef is null")
      return;
    }
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svgRef.current);
    const blob = new Blob([svgStr], {type: "image/svg+xml"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'download.svg';
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Controls 
        setShapeAmount={(value: number) => setShapeAmount(value)} 
        setShapeSize={(value: number) => setShapeSize(value)}
        bgColour={bgColour}
        setBgColour={(value: string) => setBgColour(value)}
        shapeColour={shapeColour}
        setShapeColour={(value: string) => setShapeColour(value)}
      />
      <div className="w-[50rem] aspect-[16/9] border border-black">
        <SVGFrame ref={svgRef} height={height} shapeAmount={shapeAmount} shapeHeight={shapeSize} bgColour={bgColour} shapeColour={shapeColour} />
      </div>
      <button 
        className="p-2 bg-blue-500 text-white font-bold rounded-md mt-2 hover:bg-blue-600"
        onClick = {exportSVG}
      >
        Export
      </button>
    </div>
  )
}