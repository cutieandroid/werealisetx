import {Box} from "@mui/material";
import Image from "next/image";
import {motion} from "framer-motion"

export default function landingpage()
{


    return(


        <div id={"container"}
        >

            <div id={"gradientbox"}>
            </div>
            <motion.div initial={"hidden"} animate={"visible"}

                        variants={{
                            hidden:{
                                scale:.8,
                                opacity:0
                            },
                            visible:{
                                scale:1,
                                opacity:1,
                                transition:{
                                    delay:.4

                                }
                            },
                        }

                        }
            >

                <Image id={"signuplogo"}
                       width={312}
                       height={112}
                       src={"https://ik.imagekit.io/pacman/logolandingv2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676224141577"} alt={"logo"}>

                </Image>
            </motion.div>
            <div id={"getstartedbg"}>
                <div id={"getstarted"}

                >

                    <motion.div initial={"hidden"} whileInView={"visible"}

                                variants={{
                                    hidden:{
                                        scale:.8,
                                        opacity:0
                                    },
                                    visible:{
                                        scale:1,
                                        opacity:1,
                                        transition:{
                                            delay:.4

                                        }
                                    },
                                }

                                }
                    >


                        <Image
                            id={"illussignup"}
                            width={404}
                            height={447}
                            src={"https://ik.imagekit.io/pacman/illustrationgs-removebg-preview.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676313323629"} alt={"illustartion"}>
                        </Image>

                    </motion.div>


                </div>

                {/**/}

                <motion.div initial={"hidden"} whileInView={"visible"}

                            variants={{
                                hidden:{
                                    scale:.8,
                                    opacity:0
                                },
                                visible:{
                                    scale:1,
                                    opacity:1,
                                    transition:{
                                        delay:1

                                    }
                                },
                            }

                            }
                >
                <div id={"getstartedbutton"}>

                    Get Started

                </div>
                </motion.div>
                <div id={"logincontent"}>Already have an account ?<div id={"loginbtn"}> Login

                </div>
                </div>
              </div>



          </div>


    )

}
