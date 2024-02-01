import { forwardRef } from 'react';

interface SVGFrameProps {
  height: number;
  shapeAmount: number;
  shapeHeight: number;
  bgColour: string;
  shapeColour: string;
  ref: any;
}

const SVGFrame = forwardRef<SVGSVGElement, SVGFrameProps>((props, ref) => {
  let coords: number[][] = []; 

  for (let i = 0; i < props.shapeAmount; i++) {
    let x = Math.random()*(100-props.shapeHeight);
    let y = Math.random()*(props.height-props.shapeHeight);
    coords.push([x, y]);
  }

  return (
    <svg ref={ref} viewBox={`0 0 100 ${props.height}`}>
      <rect x="0" y="0" width="100" height={props.height} fill={props.bgColour}/>
      {
        Array(props.shapeAmount).fill(0).map((_, i) => {
          let x = coords[i][0];
          let y = coords[i][1];
          return <rect key={i} x={x} y={y} width={props.shapeHeight} height={props.shapeHeight} fill={props.shapeColour}/>
        })
      }
    </svg>
  )
});

export default SVGFrame;

/*

export default function SVGFrame(props: SVGFrameProps) {
  let coords: number[][] = []; 

  for (let i = 0; i < props.shapeAmount; i++) {
    let x = Math.random()*(100-props.shapeHeight);
    let y = Math.random()*(props.height-props.shapeHeight);
    coords.push([x, y]);
  }

  return (
    <svg ref={props.ref} viewBox={`0 0 100 ${props.height}`}>
      <rect x="0" y="0" width="100" height={props.height} fill={props.bgColour}/>
      {
        Array(props.shapeAmount).fill(0).map((_, i) => {
          let x = coords[i][0];
          let y = coords[i][1];
          return <rect key={i} x={x} y={y} width={props.shapeHeight} height={props.shapeHeight} fill={props.shapeColour}/>
        })
      }
    </svg>
  )
}
*/