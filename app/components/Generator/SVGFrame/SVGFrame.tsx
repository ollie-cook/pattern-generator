interface SVGFrameProps {
  height: number;
  shapeAmount: number;
  shapeHeight: number;
}

export default function SVGFrame(props: SVGFrameProps) {
  let coords: number[][] = []; 

  for (let i = 0; i < props.shapeAmount; i++) {
    let x = Math.random()*(100-props.shapeHeight);
    let y = Math.random()*(props.height-props.shapeHeight);
    coords.push([x, y]);
  }

  return (
    <svg viewBox={`0 0 100 ${props.height}`}>
      <rect x="0" y="0" width="100" height={props.height} fill="#4ade80"/>
      {
        Array(props.shapeAmount).fill(0).map((_, i) => {
          let x = coords[i][0];
          let y = coords[i][1];
          return <rect key={i} x={x} y={y} width={props.shapeHeight} height={props.shapeHeight}/>
        })
      }
    </svg>
  )
}