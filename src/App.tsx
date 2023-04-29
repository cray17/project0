import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import ContactForm from "./ContactForm.js";

export default function App() {
    const parallax = useRef<IParallax>(null!);
    return (
        <div style={{ width: "100%", height: "100%", background: "#253237" }}>
            <Parallax ref={parallax} pages={5}>
                <ParallaxLayer
                    offset={0}
                    onClick={() => parallax.current.scrollTo(1)}
                    speed={1}
                    style={{
                        backgroundColor: "#b6667d",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        height: "100%",
                    }}
                />

                <ParallaxLayer
                    offset={1}
                    onClick={() => parallax.current.scrollTo(2)}
                    speed={1}
                    style={{
                        backgroundColor: "#b6667d",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        height: "100%",
                    }}
                />

                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        pointerEvents: "none",
                    }}
                >
                    <div className="text_box">
                        <h1>
                            <b>
                                <u>About</u>
                            </b>
                        </h1>
                        <p>
                            Ipsum officiis dolor adipisci nihil necessitatibus
                            Exercitationem inventore harum maxime odit
                            repellendus Blanditiis praesentium ipsam quibusdam
                            praesentium quisquam! Cumque enim laboriosam
                            distinctio vero sint iusto veniam. Adipisci placeat
                            veniam quibusdam?
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        pointerEvents: "none",
                    }}
                >
                    <div className="text_box">
                        <h1>
                            <b>
                                <u>Technical skills</u>
                            </b>
                        </h1>
                        <p>
                            Ipsum officiis dolor adipisci nihil necessitatibus
                            Exercitationem inventore harum maxime odit
                            repellendus Blanditiis praesentium ipsam quibusdam
                            praesentium quisquam! Cumque enim laboriosam
                            distinctio vero sint iusto veniam. Adipisci placeat
                            veniam quibusdam?
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 0, end: 1 }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        pointerEvents: "none",
                    }}
                >
                    <img
                        src={
                            "https://www.svgrepo.com/show/512717/profile-image-zoom-1347.svg"
                        }
                        style={{ width: "60%" }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    factor={4}
                    onClick={() => parallax.current.scrollTo(3)}
                    speed={1}
                    style={{
                        backgroundColor: "#995c8c",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "start",
                        height: "100%",
                    }}
                >
                    <div className="text_box">
                        <h1>
                            <b>
                                <u>Projects</u>
                            </b>
                        </h1>
                        <p>
                            Lorem cumque repellat in quibusdam ratione ad,
                            repellendus doloribus? Dolorum lorem in labore
                            soluta iste? Beatae eum id rem temporibus modi Nihil
                            beatae quae esse saepe corporis illum Porro saepe?
                        </p>
                    </div>
                    <div className="project_grid">
                        <div className="project_showcase">
                            <h1>Project 1</h1>
                            <div className="project_content">
                                <img
                                    src="https://www.svgrepo.com/show/511299/spiral-33.svg"
                                    alt=""
                                />
                                <div className="text_box">
                                    <p>
                                        Dolor nam sed praesentium obcaecati
                                        tempora maxime? Quam esse fuga deleniti
                                        molestiae esse Inventore explicabo non
                                        voluptas tempore non. Consequatur
                                        delectus odit iusto voluptate sunt cum
                                        Cumque eligendi ab esse.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="project_showcase">
                            <h1>Project 2</h1>
                            <div className="project_content">
                                <img
                                    src="https://www.svgrepo.com/show/511299/spiral-33.svg"
                                    alt=""
                                />
                                <div className="text_box">
                                    <p>
                                        Dolor nam sed praesentium obcaecati
                                        tempora maxime? Quam esse fuga deleniti
                                        molestiae esse Inventore explicabo non
                                        voluptas tempore non. Consequatur
                                        delectus odit iusto voluptate sunt cum
                                        Cumque eligendi ab esse.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="project_showcase">
                            <h1>Project 3</h1>
                            <div className="project_content">
                                <img
                                    src="https://www.svgrepo.com/show/511299/spiral-33.svg"
                                    alt=""
                                />
                                <div className="text_box">
                                    <p>
                                        Dolor nam sed praesentium obcaecati
                                        tempora maxime? Quam esse fuga deleniti
                                        molestiae esse Inventore explicabo non
                                        voluptas tempore non. Consequatur
                                        delectus odit iusto voluptate sunt cum
                                        Cumque eligendi ab esse.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={3}
                    onClick={() => parallax.current.scrollTo(4)}
                    speed={1}
                    style={{
                        backgroundColor: "#80256d",
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "center",
                        height: "100%",
                    }}
                >
                    <h1>
                        <b>
                            <u>Experience</u>
                        </b>
                    </h1>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={4}
                    onClick={() => parallax.current.scrollTo(0)}
                    speed={1}
                    style={{
                        backgroundColor: "#281439",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        height: "20%",
                    }}
                >
                        <h1>
                            <b>
                                <u>Contact Me</u>
                            </b>
                        </h1>

                    <ContactForm />
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}
