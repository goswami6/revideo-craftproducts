import { Layout, Img, makeScene2D, Rect, Txt } from "@revideo/2d";
import { all, tween, createRef, waitFor } from "@revideo/core";
import study from '../Images/5024147.jpg';

export default makeScene2D(function* (view) {
    const imageRef = createRef<Img>();
    const rectRefs = [
        createRef<Rect>(),
        createRef<Rect>(),
        createRef<Rect>(),
        createRef<Rect>()
    ];
    const tickRefs = [
        createRef<Img>(),
        createRef<Img>(),
        createRef<Img>(),
        createRef<Img>()
    ];
    const typewriterRef = createRef<Txt>();

    const bulletPoints = [
        "Strategic location",
        "Diverse and high-quality products",
        "Robust marketing",
        "Adequate facilities"
    ];

    const finalSentence = "Essential for the success of Urban Haats selling craft products.";

    view.fontFamily("outfit");

    view.add(
        <Layout>
            {/* Image */}
            <Img
                ref={imageRef}
                src={study}  // Replace with your image URL
                width={400}
                height={400}
                opacity={1}
                x={0}
                y={0}
                scale={0}
            />

            {/* Bullet Points */}
            {bulletPoints.map((point, index) => (
                <Rect
                    // key={index}
                    ref={rectRefs[index]}
                    x={1500}
                    y={-300 + index * 200}
                    width={740}
                    height={100}
                    stroke={"#7C47E1"}
                    lineWidth={8}
                    opacity={0}
                    radius={15}
                    zIndex={5}
                >
                    <Img
                        ref={tickRefs[index]}
                        src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png"  // Replace with your tick mark image URL
                        x={-330}
                        y={0}
                        width={60}
                        height={60}
                    />
                    <Txt
                        text={point}
                        fontSize={42}
                        fontWeight={700}
                        fill={"purple"}
                        x={35}
                        y={0}
                    />
                </Rect>
            ))}

            {/* Typewriter Effect */}
            <Txt
                ref={typewriterRef}
                text=""
                fontSize={50}
                fontWeight={600}
                fill={"purple"}
                x={0}
                y={450}
                textAlign={"center"}
            />
        </Layout>
    );

    // Animation sequence
    yield* all(
        imageRef().scale(2, 1),  // Scale and fade in the image
        waitFor(1)
    );

    yield* imageRef().position.x(-450, 2); // Move image to the left

    // Animation for bullet points
    for (let i = 0; i < rectRefs.length; i++) {
        yield* all(
            rectRefs[i]().opacity(1, 0.5),
            rectRefs[i]().position.x(view.width, 0.5  ),
            waitFor(0.8)
        );

        yield* all(
            rectRefs[i]().position.x(500, 1),
            waitFor(0.5)
        );
    }

    yield* waitFor(1);

    // Typewriter effect
    for (let i = 0; i <= finalSentence.length; i++) {
        yield* typewriterRef().text(finalSentence.slice(0, i), 0.03); // Adjust typing speed with the second parameter
        yield* waitFor(0.03);
    }

    yield* waitFor(1);
});
