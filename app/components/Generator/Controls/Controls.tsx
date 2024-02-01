'use client'

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { ChromePicker } from 'react-color';

interface ControlsProps {
  setShapeAmount: (value: number) => void;
  setShapeSize: (value: number) => void;
  bgColour: string;
  setBgColour: (value: string) => void;
  shapeColour: string;
  setShapeColour: (value: string) => void;
}


export default function Controls(props: ControlsProps) {
  const [openBgColourPicker, setOpenBgColourPicker] = useState(false);
  const [openShapeColourPicker, setOpenShapeColourPicker] = useState(false);

  return (
    <div className="w-full flex ">
      <div className="p-2 flex flex-col items-start w-fit">
        <label htmlFor="amount-slider">Shape amount</label>
        <Slider id="amount-slider" defaultValue={[4]} max={10} step={1} className="w-64 mt-1" onValueChange={(newValue) => props.setShapeAmount(newValue[0])} />
        <label htmlFor="size-slider" className="mt-2">Shape size</label>
        <Slider id="size-slider" defaultValue={[10]} min={5} max={25} step={2} className="w-64 mt-1 mb-2" onValueChange={(newValue) => props.setShapeSize(newValue[0])} />
      </div>
      <div className="relative w-56">
        <div className="absolute w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <p className="text-center mb-1">background color</p>
          <button className="relative left-1/2 -translate-x-1/2 w-16 h-16 bg-black" style={{backgroundColor: props.bgColour}} onClick={() => setOpenBgColourPicker(prev => !prev)}></button>
          {
          openBgColourPicker == true && 
          <div className="absolute z-10 -translate-x-1/2 left-1/2">
            <ChromePicker 
              color={props.bgColour}
              onChange={(newColor) => props.setBgColour(newColor.hex)}
            />
          </div>
          }
        </div>
      </div>
      <div className="relative w-56">
        <div className="absolute w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <p className="text-center mb-1">shape color</p>
          <button className="relative left-1/2 -translate-x-1/2 w-16 h-16 bg-black" style={{backgroundColor: props.shapeColour}} onClick={() => setOpenShapeColourPicker(prev => !prev)}></button>
          {
          openShapeColourPicker == true && 
          <div className="absolute z-10 -translate-x-1/2 left-1/2">
            <ChromePicker 
              color={props.bgColour}
              onChange={(newColor) => props.setShapeColour(newColor.hex)}
            />
          </div>
          }
        </div>
      </div>       
    </div>
  )
}