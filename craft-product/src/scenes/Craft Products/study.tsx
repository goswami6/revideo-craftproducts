import { Layout, Txt, makeScene2D, Circle, Img } from "@revideo/2d";
import { all, tween, createRef, createSignal, waitFor } from "@revideo/core";

export default makeScene2D(function* (view) {
  const txt1Ref = createRef<Txt>();
  const imgRef = createRef<Circle>();
  const imgRef1 = createRef<Circle>();

  const dateText = createRef<Txt>();
  const dateText1 = createRef<Txt>();

  const calendarIcon = createRef<Img>();
  const calendarIcon1 = createRef<Img>();

  const everythingLayoutRef = createRef<Layout>();

  const txtContainerRef = createRef<Layout>();

  // Create two separate Circle references for splitting animation
  const circleLeft = createRef<Circle>();
  const circleRight = createRef<Circle>();
  const circleLeft1 = createRef<Circle>();

  const offerletter = createSignal(0); // Start with the highest cost

  const fullText =
    "The study aims to identify the key elements that contribute";
  const duration = 3;
  const charDuration = duration / fullText.length;

  const textSignal = createSignal("");

  view.fontFamily("outfit");

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Txt
        ref={dateText}
        fontSize={60}
        fontWeight={500}
        fill={"#000"}
        letterSpacing={2}
      />


      <Txt
        text={textSignal}
        fontSize={60}
        fontWeight={800}
        letterSpacing={2}
        fill={"#000"}
        y={400}
      />

     

      {/* Define the initial Circle that splits */}
      
        <Circle
        ref={circleLeft1}
        scale={0}
        x={0}
        y={100}
        width={200}
        opacity={1} 
        height={200}
        fill={"#000"}
      ><Circle
      ref={imgRef1}
      opacity={1} // Initially invisible
      width={200}
      height={200}
      endAngle={360}
      x={0}
      y={0}
      stroke={"#000"}
      lineWidth={10}
      zIndex={1}
      fill={"white"}
    >
     
      <Txt
        ref={dateText1}
        fontSize={30}
        fontWeight={500}
        fill={"#000"}
        letterSpacing={1}
        y={0}
      >
       profitability
      </Txt>
    </Circle>

        <Txt
          ref={txt1Ref}
          fontSize={30}
          fontWeight={500}
          letterSpacing={2}
          fill={"white"}
        //   text={() => `$0.95`}
        />
       
      </Circle>

      <Circle
        ref={circleRight}
        scale={0}
        x={0}
        y={100}
        width={200}
        height={200}
        fill={"#fff"}
      >
        <Txt
          fontSize={30}
          fontWeight={500}
          letterSpacing={2}
          fill={"#000"}
          text={"popularity"}
        />
     
      </Circle>
    </Layout>
  );

  for (let i = 0; i < fullText.length; i++) {
    yield* tween(charDuration, () => {
      textSignal(fullText.substring(0, i + 1));
    });
  }


  yield* all(
    
    
   
    circleLeft1().scale(2, 1.5),
    circleRight().scale(2, 1.5),
    txt1Ref().scale(1, 1.5)
  );

 

  yield* all(
    circleLeft1().position.x(300, 3),
    circleRight().position.x(-300, 3),
    offerletter(0.00, 0).to(2.99, 3)
  );

 
 
  waitFor(2.5)

  yield* everythingLayoutRef().opacity(0, 2);
});
