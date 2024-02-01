'use client'

import { useState, useRef } from "react"
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

  const bgColourPickerRef = useRef(null);
  const shapeColourPickerRef = useRef(null);

  const handleClickOutside = (event: any) => {
    if (bgColourPickerRef.current != null && !bgColourPickerRef.current.contains(event.target)) {
      setOpenBgColourPicker(false);
    }
  }

  const handleClickOutsideShape = (event: any) => {
    if (shapeColourPickerRef.current != null && !shapeColourPickerRef.current.contains(event.target)) {
      setOpenShapeColourPicker(false);
    }
  }

  const handleBgClick = () => {
    setOpenBgColourPicker(prev => !prev)
    document.addEventListener('mousedown', handleClickOutside);
  }

  const handleShapeClick = () => {
    setOpenShapeColourPicker(prev => !prev)
    document.addEventListener('mousedown', handleClickOutsideShape);
  }

  return (
    <div className="w-full flex flex-col items-center justify-center sm:flex-row">
      <div className="p-2 flex flex-col items-start w-fit">
        <label htmlFor="amount-slider">Shape amount</label>
        <Slider id="amount-slider" defaultValue={[4]} max={10} step={1} className="w-40 md:w-64 mt-1" onValueChange={(newValue) => props.setShapeAmount(newValue[0])} />
        <label htmlFor="size-slider" className="mt-2">Shape size</label>
        <Slider id="size-slider" defaultValue={[10]} min={5} max={25} step={2} className="w-40 md:w-64 mt-1 mb-2" onValueChange={(newValue) => props.setShapeSize(newValue[0])} />
      </div>
      <div className="flex ">
        <div className="relative w-36 md:w-56 h-36 sm:h-auto">
          <div className="absolute w-full  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <p className="text-center mb-1">background color</p>
            <button className="relative left-1/2 -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16" style={{backgroundColor: props.bgColour}} onClick={handleBgClick}></button>
            {
            openBgColourPicker == true && 
            <div ref={bgColourPickerRef} className="absolute z-10 -translate-x-1/2 left-1/2">
              <ChromePicker 
                color={props.bgColour}
                onChange={(newColor) => props.setBgColour(newColor.hex)}
              />
            </div>
            }
          </div>
        </div>
        <div className="relative w-36 md:w-56 sm:h-auto">
          <div className="absolute w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <p className="text-center mb-1">shape color</p>
            <button className="relative left-1/2 -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16" style={{backgroundColor: props.shapeColour}} onClick={handleShapeClick}></button>
            {
            openShapeColourPicker == true && 
            <div ref={shapeColourPickerRef} className="absolute z-10 -translate-x-1/2 left-1/2">
              <ChromePicker 
                color={props.shapeColour}
                onChange={(newColor) => props.setShapeColour(newColor.hex)}
              />
            </div>
            }
          </div>
        </div> 
      </div>
          
    </div>
  )
}