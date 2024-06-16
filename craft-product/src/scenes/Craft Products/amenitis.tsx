import { Layout, Txt, makeScene2D, Circle, Img } from "@revideo/2d";
import { all, tween, createRef, waitFor } from "@revideo/core";

export default makeScene2D(function* (view) {
    const circleAmenitiesRef = createRef<Circle>();
    const circleParkingRef = createRef<Circle>();
    const circleRestroomRef = createRef<Circle>();
    const circleFoodStallsRef = createRef<Circle>();

    const parkingImageSrc =
        "https://cdn-icons-png.flaticon.com/512/2830/2830310.png";
    const restroomImageSrc =
        "https://cdn-icons-png.flaticon.com/512/577/577986.png";
    const foodStallImageSrc =
        "https://cdn-icons-png.flaticon.com/512/1045/1045703.png";

    view.fontFamily("outfit");

    view.add(
        <Layout>
            {/* Circle for Amenities */}
            <Circle
                ref={circleAmenitiesRef}
                opacity={1}
                scale={0}
                size={400}
                x={0}
                y={0}
                fill={"#7C47E1"}
                zIndex={5}
            >
                <Txt
                    text={"Amenities"}
                    fontSize={60}
                    fontWeight={500}
                    fill={"white"}
                    x={0}
                    y={0} // Adjusted vertical position
                    textAlign={"center"}
                />
            </Circle>

            {/* Circle for Parking */}
            <Circle
                ref={circleParkingRef}
                opacity={0}
                size={200}
                x={0}
                y={-200}
                fill={"white"}
                stroke={"#7C47E1"}
                lineWidth={10}
               
                
            >
                <Img
                    src={parkingImageSrc}
                    width={100}
                    height={100}
                    x={0} // Adjusted horizontal position
                    y={0} // Adjusted vertical position
                />
                <Txt
                    text={"Parking"}
                    fontSize={35}
                    fontWeight={700}
                    fill={"#7C47E1"}
                    x={0}
                    y={130} // Adjusted vertical position
                    textAlign={"center"}
                />
            </Circle>

            {/* Circle for Restroom */}
            <Circle
                ref={circleRestroomRef}
                opacity={0}
                size={200}
                x={0}
                y={-200}
                fill={"white"}
                stroke={"#7C47E1"}
                lineWidth={10}
            >
                <Img
                    src={restroomImageSrc}
                    width={100}
                    height={100}
                    x={0} // Adjusted horizontal position
                    y={0} // Adjusted vertical position
                />
                <Txt
                    text={"Restroom"}
                    fontSize={35}
                    fontWeight={700}
                    fill={"#7C47E1"}
                    x={0}
                    y={130} // Adjusted vertical position
                    textAlign={"center"}
                />
            </Circle>

            {/* Circle for Food Stalls */}
            <Circle
                ref={circleFoodStallsRef}
                opacity={0}
                size={200}
                x={0}
                y={-200}
                fill={"white"}
                stroke={"#7C47E1"}
                lineWidth={10}
            >
                <Img
                    src={foodStallImageSrc}
                    width={100}
                    height={100}
                    x={0} // Adjusted horizontal position
                    y={0} // Adjusted vertical position
                />
                <Txt
                    text={"Food Stalls"}
                    fontSize={35}
                    fontWeight={700}
                    fill={"#7C47E1"}
                    x={0}
                    y={130}
                    textAlign={"center"}
                />
            </Circle>
        </Layout>
    );

    yield* all(
        circleAmenitiesRef().scale(1, 1),
        
        
        waitFor(1)
    );

    yield* circleAmenitiesRef().position.y(-200, 1),



    yield* all(
      
        circleParkingRef().opacity(1, 1),
        circleParkingRef().scale(1.5, 1.5),
        circleParkingRef().position.x(500, 1),
        waitFor(1)
    );

    yield* all(
        circleRestroomRef().opacity(1, 1),
        circleRestroomRef().scale(1.5, 1.5),
        circleRestroomRef().position.y(220, 1),
        waitFor(1)
    );

    yield* all(
        circleFoodStallsRef().opacity(1, 1),
        circleFoodStallsRef().scale(1.5, 1.5),
        circleFoodStallsRef().position.x(-500, 1),
        waitFor(1)
    );

    yield* all(
        
        
        
    );
});
