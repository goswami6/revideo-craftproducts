import {Txt, makeScene2D, Img, Circle, Layout,Path} from '@revideo/2d';
import {useScene, createRef,waitFor, createSignal,tween} from '@revideo/core';
import craftindustry from "../Images/craftindustry.png"
import agriculter from "../Images/agriculter.jpg"

export default makeScene2D(function* (view) {
    const craftindustryImgRef = createRef<Img>();
    const path = createRef<Path>();
    const secondTextRef = createRef<Txt>();
    const textSignal2 = createSignal("");
    const circleRef = createRef<Circle>();
    const circleImgRef = createRef<Img>();

    const fullText2 = "The craft industry is a crucial part of the rural economy,second only to agriculture.";
    const duration = 2.5;
    const charDuration2 = duration / fullText2.length; 
    const fadeDuration = 1;
    const circleFadeDuration = 1; // Duration for the circle to appear

  const name = 'new user';

  
    view.add(
       
   <>
         <Img
          ref={craftindustryImgRef}
          src={craftindustry} // Replace with your image source
          width={1300}
          height={930}
          scale={0}
          zIndex={1}
          
          y={0}
        />
        
        <Path
      ref={path}
      lineWidth={5}
      x={-5750}
      y={-3920}

      stroke={'#000'}
      data="
           M 2774.00,1829.00
           C 2774.00,1829.00 2779.12,1810.00 2779.12,1810.00
             2784.08,1789.07 2786.14,1766.54 2775.13,1747.00
             2759.94,1720.06 2727.40,1708.53 2723.93,1671.00
             2723.65,1668.06 2723.10,1665.99 2723.32,1663.00
             2725.26,1637.14 2735.96,1616.34 2736.00,1593.00
             2736.03,1575.56 2736.14,1562.51 2728.69,1546.00
             2698.58,1479.23 2605.90,1483.02 2553.00,1518.00
             2542.37,1525.03 2532.61,1533.31 2524.30,1543.00
             2516.79,1551.76 2504.34,1570.19 2494.00,1574.39
             2489.31,1576.29 2483.97,1576.05 2479.00,1576.00
             2479.00,1576.00 2469.00,1575.09 2469.00,1575.09
             2469.00,1575.09 2430.00,1571.91 2430.00,1571.91
             2430.00,1571.91 2419.00,1571.00 2419.00,1571.00
             2419.00,1571.00 2386.00,1571.00 2386.00,1571.00
             2358.25,1571.04 2320.85,1580.27 2297.00,1594.45
             2254.58,1619.69 2222.58,1677.58 2222.00,1727.00
             2221.69,1753.67 2228.59,1780.53 2241.31,1804.00
             2246.74,1814.03 2251.69,1819.99 2258.00,1829.00
             2258.00,1829.00 2234.00,1829.00 2234.00,1829.00
             2229.42,1829.00 2225.80,1828.20 2222.00,1831.00
             2222.00,1831.00 2626.00,1831.00 2626.00,1831.00
             2626.00,1831.00 2743.00,1831.00 2743.00,1831.00
             2743.00,1831.00 2777.00,1831.00 2777.00,1831.00
             2777.00,1831.00 2794.00,1830.00 2794.00,1830.00
             2794.00,1830.00 2774.00,1829.00 2774.00,1829.00 Z"
      position={[-100, -100]}
      scale={2.3}
      start={0}
      end={0}
    ></Path>,
      </>
      );
     
      yield* craftindustryImgRef().scale(1, 1);
  
      // Wait for 3 seconds
    //   yield* waitFor(1);
    
      // Move the second image upwards
      yield* craftindustryImgRef().position.y(-100, 0.4);
     
      view.add(
        <Txt
          ref={secondTextRef}
          text={textSignal2}
          fontSize={50}
          fontWeight={600}
          fill={"#000"}
          x={0}
          y={400}
        />
      );
      yield* path().end(1, 1);
    //   yield* path().fill('#fff', 1);
      // Typewriter effect for the second text
      for (let i = 0; i < fullText2.length; i++) {
        yield* tween(charDuration2, () => {
          textSignal2(fullText2.substring(0, i + 1));
        });
      }
    //   yield* tween(fadeDuration, (value) => {
    //     craftindustryImgRef().opacity(1 - value);
    //     secondTextRef().opacity(1 - value);
    // });

    view.add(
        <>
        <Circle
            ref={circleRef}
            width={500}
            height={500}
            fill={"#FFFFFF"}
            x={0}
            y={0}
            opacity={0}
             // Start with opacity 0
        >
             <Img
            ref={circleImgRef}
            src={agriculter }
            width={580}
            height={580}
            x={0}
            y={0}
            opacity={0} // Start with opacity 0
        />
        </Circle>
        
        </>
       
    );
    yield* tween(circleFadeDuration, (value) => {
        circleRef().opacity(value);
        circleImgRef().opacity(value);
    });

 
});