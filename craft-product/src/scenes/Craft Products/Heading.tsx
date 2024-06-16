import {Layout, Txt, makeScene2D,Img,Video} from '@revideo/2d';
import {useScene, createRef,all,waitFor} from '@revideo/core';
import paper from "../Images/bg.png"
import paper1 from "../Images/success.png"
import paper2 from "../Images/paper2.jpg"

export default makeScene2D(function* (view) {
    const everythingLayoutRef = createRef<Layout>();
    const paperImageRef = createRef<Img>();
    const craftTxtRef = createRef<Txt>();
    const paperImage1Ref = createRef<Img>();

  const name = 'new user';
  view.fontFamily("outfit");

  view.add(
    <Layout ref={everythingLayoutRef}>
        <Img
        ref={paperImageRef}
        scale={1.5}
        opacity={1}
        zIndex={1}
        src={paper}
        width={990}
        height={600}
        y={0}
        x={0}
      >
          <Txt
        ref={craftTxtRef}
        fontSize={40}
        y={0}
        fontWeight={500}
        letterSpacing={3}
        fill={"white"}
        zIndex={1}
      />
      </Img>
      <Img
        ref={paperImage1Ref}
        scale={1.5}
        opacity={0}
        zIndex={1}
        src={paper1}
        width={150}
        height={150}
        y={-400}
        x={-500}
      ></Img>


    </Layout>


    // <Txt fontSize={1} textWrap={true} ref={textRef} fill={'blue'}>
    //   Hello {name}!
    // </Txt>,
  );
  yield* all(
    paperImageRef().scale(1.8, 2),
    paperImage1Ref().opacity(1, 1),
    craftTxtRef().text("Success Drivers of Urban \nHaats Selling Craft Products", 3.5),
    paperImage1Ref().scale(1.9, 1),
    // textRef().scale(1.5, 1)
  );
//   yield* ;
//   yield* textRef().scale(30, 2);
});