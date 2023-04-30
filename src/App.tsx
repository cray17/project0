import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import ContactForm from "./ContactForm.js";
import LanguageIcons from "./Languages.js";
import Deck from "./Deck.tsx";

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
                           Hello! My name is Christian Mellado. I am currently going into my senior year at Colorado School of Mines. I am currently pursuing a degree in Computer Science with a focus on Data Science. Computer Science has been a lifelong interest of mine and I am thankful to be in such an interesting field.
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.3}
                    speed={0.25}
                    style={{
                        display: "block",
                        marginLeft: "70%",
                        marginTop: "12%"
                    }}
                >
                    <LanguageIcons />
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
                           I take pride in producing high quality work, and use a variety of tools to help me accomplish a given task in an efficient manner. Some of my top skills would be problem solving, an abillity to learn complex topics quickly, as well as a desire to do so. Some of my more assessable skills include many programming languages, DevOps & familiarity with Linux systems. 
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
                            "https://cdn.discordapp.com/attachments/373258513482252299/1102331526210924544/IMG_4114.jpg"
                        }
                        style={{ width: "18%",
                        marginLeft: "20%"}}
                        alt="me"
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
                    factor={0.5}
                    onClick={() => parallax.current.scrollTo(4)}
                    speed={1}
                    style={{
                        backgroundColor: "#80256d",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
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
                    offset={3}
                    speed={1}
                    style={{
                        width: "15%",
                        marginLeft: "10%",
                        marginTop: "15%",
                    }}
                >
                    <div className="text_box">
                        <p>I have had the exciting pleasure of getting to work with many different companies throughout my CS career. Here are a few of the notable experiences I have had! Click the deck of cards to cycle through.
                        </p>
                        <br />
                        <p>Most of my experiences lie somewhere within my interest, as Data Science is something I have come to enjoy quite a bit.</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={1}
                    style={{ width: "15%", marginLeft: "60%", marginTop: "5%" }}
                >
                    <Deck />
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
