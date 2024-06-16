import {
    Audio,
    Circle,
    Img,
    Layout,
    Rect,
    Txt,
    Video,
    makeScene2D,
  } from "@revideo/2d";
  
  import { all, createRef, createSignal, textLerp, waitFor } from "@revideo/core";
  import success from "../Images/researchs.png"
  // import { rupee } from "../../images";
  
  export default makeScene2D(function* (view) {
    const successImgRef = createRef<Img>();
  
  
    const rectRef1 = createRef<Rect>();
    const rectRef2 = createRef<Rect>();
    const rectRef3 = createRef<Rect>();
    const rectRef4 = createRef<Rect>();
  
    const txtRef1 = createRef<Txt>();
    const txtRef2 = createRef<Txt>();
    const txtRef3 = createRef<Txt>();
    const txtRef4 = createRef<Txt>();
  
    // const videoRef = createRef<Video>();
  
    const everythingLayoutRef = createRef<Layout>();
  
    view.fontFamily("outfit");
  
    // view.add(
    //   <Video
    //     opacity={0.8}
    //     ref={videoRef}
    //     loop
    //     src={bg_video2}
    //     size={["100%", "100%"]}
    //   />
    // );
  
    // videoRef().play();

  
    view.add(
      <Layout ref={everythingLayoutRef}>
        
  
        <Img
          ref={successImgRef}
          scale={0.2}
          opacity={0}
          zIndex={1}
          src={success}
          width={1500}
          x={0}
        />
        
  
      
  
        <Rect
          ref={rectRef1}
          opacity={0}
          y={-300}
          x={1360}
          width={800}
          height={120}
          radius={15}
          fill={"white"}
        >
          <Txt
            ref={txtRef1}
            text={"location of the Haat"}
            fontSize={60}
            fontWeight={400}
            letterSpacing={3}
            fill={"black"}
          />
        </Rect>
  
        <Rect
          ref={rectRef2}
          opacity={0}
          y={-100}
          x={1360}
          width={800}
          height={120}
          radius={15}
          zIndex={1}
          fill={"white"}
        >
          <Txt
            ref={txtRef2}
            text={"variety & quality of products"}
            fontSize={60}
            fontWeight={400}
            letterSpacing={3}
            fill={"black"}
          />
        </Rect>
  
        <Rect
          ref={rectRef3}
          opacity={0}
          y={100}
          x={1360}
          width={800}
          height={120}
          radius={15}
          fill={"white"}
        >
          <Txt
            ref={txtRef3}
            text={"marketing strategies,"}
            fontSize={60}
            fontWeight={400}
            letterSpacing={3}
            fill={"black"}
          />
        </Rect>
  
        <Rect
          ref={rectRef4}
          opacity={0}
          x={1360}
          y={300}
          width={800}
          height={120}
          radius={15}
          fill={"white"}
        >
          <Txt
            ref={txtRef4}
            text={"level of support"}
            fontSize={60}
            fontWeight={400}
            letterSpacing={3}
            fill={"#000"}
          />
        </Rect>
      </Layout>
    );
  
  
    yield* all(successImgRef().scale(1, 1), successImgRef().opacity(1, 1));
  
    yield* all(
      successImgRef().x(-245, 1.5),
    );
  
    yield* all(
      successImgRef().x(-450, 1.5),
      successImgRef().width(1250, 1.5),
     
    );
  waitFor(1.5);
    yield* all(rectRef1().opacity(1, 1), rectRef1().x(400, 1));
    yield* all(rectRef2().opacity(1, 1.8), rectRef2().x(400, 1.8));
    yield* all(rectRef3().opacity(1, 1.5), rectRef3().x(400, 1.5));
    yield* all(rectRef4().opacity(1, 1.5), rectRef4().x(400, 1.5));
  
    yield* everythingLayoutRef().scale(1.05, 2.7);
  
    yield* everythingLayoutRef().opacity(0, 0.8);
  
  });
  