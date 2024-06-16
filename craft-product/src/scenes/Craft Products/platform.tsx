import { Txt, makeScene2D, Circle,Img ,CubicBezier,Path,Rect} from '@revideo/2d';
import { createRef, all, waitFor, tween , createSignal} from '@revideo/core';
import urban from "../Images/urban.png"
import market from "../Images/market.png"
import shelling from "../Images/shelling.png"
import artisan from "../Images/artisan.png"
import urbanconsumer from "../Images/urbanconsumer.png"

export default makeScene2D(function* (view) {
    const splitCircle1Ref = createRef<Circle>();
    const splitCircle2Ref = createRef<Circle>();
    const circleImgRef = createRef<Img>();
    const bezier = createRef<CubicBezier>();
    const bezier1 = createRef<CubicBezier>();
    const bezier3 = createRef<CubicBezier>();
    const splitCircle3Ref = createRef<Circle>();
    const splitCircle4Ref = createRef<Circle>();
    const splitCircle5Ref = createRef<Circle>();

    const path = createRef<Path>();
    const progress = createSignal(0);
    const name = 'new user';

    // Split Circles initially at the center
    view.add(
        <>
            <Circle
                ref={splitCircle1Ref}
                fill={"white"}
                size={430}
                y={-300}
                x={-700}
                opacity={0}
                scale={0}
            >
               <Img
            ref={circleImgRef}
            src={urban }
            width={400}
            height={400}
            x={0}
            y={0}
            opacity={1} // Start with opacity 0
        />
            </Circle>
            <Circle
                ref={splitCircle2Ref}
                fill={"white"}
                size={430}
                y={-300}
                x={-200}
                scale={0}
                opacity={0}
                zIndex={1}
            >
              <Img
            ref={circleImgRef}
            src={market}
            width={400}
            height={400}
            x={0}
            y={0}
            opacity={1} // Start with opacity 0
        />
            </Circle>
            <CubicBezier
          ref={bezier}
          lineWidth={10}
          y={-300}
          x={200}
          stroke={'#000'}
          p0={[-240, -140]}
          p1={[-180, -21]} // Start point (p0) to end point (p3) to make a straight line
          p2={[350, -21]}  // Start point (p0) to end point (p3) to make a straight line
          p3={[400, 140]}
          end={0}
        />,
             <Circle
                ref={splitCircle3Ref}
                fill={"white"}
                size={530}
                y={-100}
                x={600}
                opacity={0}
                scale={0}
                zIndex={1}
            >
              <Img
            ref={circleImgRef}
            src={shelling }
            width={500}
            height={500}
            x={0}
            y={0}
            opacity={1} // Start with opacity 0
        />
            </Circle>
            <CubicBezier
          ref={bezier1}
          lineWidth={10}
          opacity={1}
          rotation={-45}
          y={250}
          x={300}
          stroke={'#000'}
          p0={[-240, -140]}
                p1={[-180, -21]} // Start point (p0) to end point (p3) to make a straight line
                p2={[350, -21]}  // Start point (p0) to end point (p3) to make a straight line
                p3={[400, 140]}
          end={0}
        />,
       <Circle
                ref={splitCircle5Ref}
                fill={"white"}
                size={430}
                y={300}
                x={-700}
                scale={0}
                opacity={0}
                zIndex={1}
            >
               <Img
            ref={circleImgRef}
            src={urbanconsumer}
            width={400}
            height={400}
            x={0}
            y={0}
            opacity={1} // Start with opacity 0
        />
            </Circle>
            <CubicBezier
          ref={bezier3}
          lineWidth={10}
          opacity={1}
          rotation={180}
          y={350}
          x={-200}
          stroke={'#000'}
          p0={[-180, -21]}
                p1={[-180, -21]} // Start point (p0) to end point (p3) to make a straight line
                p2={[250, -21]}  // Start point (p0) to end point (p3) to make a straight line
                p3={[400, 140]}
          end={0}
        />,
            <Circle
                ref={splitCircle4Ref}
                fill={"white"}
                size={430}
                y={300}
                x={-30}
                scale={0}
                opacity={0}
                zIndex={1}
            >
              <Img
            ref={circleImgRef}
            src={artisan}
            width={400}
            height={400}
            x={0}
            y={0}
            opacity={1} // Start with opacity 0
        />,
        </Circle>
        </>
    );

   

    // Animate the split circles appearing, moving to corners, and shrinking
    yield* all(
        splitCircle1Ref().opacity(1, 1),
        splitCircle1Ref().scale(1, 1),
         // Shrink size

        splitCircle2Ref().opacity(1, 1),
        splitCircle2Ref().scale(1, 1),
        // splitCircle2Ref().position.y(-150, 2), // Move upward
        // splitCircle2Ref().position.x(-550, 2), // Move to the right corner
        // splitCircle2Ref().size(200, 2) // Shrink size
    );
    // waitFor(0.5),
    yield* all(
        
        bezier().end(1, 2).to(1, 2),
        splitCircle3Ref().opacity(1, 1),
        splitCircle3Ref().scale(1, 1),
    );
    yield* all(
        
        bezier1().end(1, 2).to(1, 2),
        splitCircle4Ref().opacity(1, 1),
        splitCircle4Ref().scale(1, 1),
        bezier3().end(1, 2).to(1, 2),
        splitCircle5Ref().opacity(1, 1),
        splitCircle5Ref().scale(1, 1),
    );
    // yield* all(
        
    //     bezier3().end(1, 2).to(1, 2),
    //     splitCircle5Ref().opacity(1, 1),
    // );
    
    //   yield* ;
});
