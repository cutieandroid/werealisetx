import {motion} from "framer-motion";

export default function loginpage(){
    return(
        <div className={"form"}>
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
                                    delay:0.4
                                }
                            },
                        }

                        }
            >
                <input type={"text"} id={"emailip"}
                       className={"form_input"}
                       autoComplete={"off"}
                       placeholder=" "
                >
                </input>
                <label htmlFor={"emailip"}
                       id={"emaillabel"}
                       className={"form_label"}
                >
                    Email

                </label>

            </motion.div>



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
                                    delay:1
                                }
                            },
                        }


                        }
            >

                <input type={"password"} id={"passip"}
                       className={"form_input"}
                       autoComplete={"off"}
                       placeholder={" "}
                       style={{
                           marginTop:100
                       }}
                >
                </input>
                <label htmlFor={"passip"}
                       id={"passlabel"}
                       className={"form_label"}
                       style={{
                           marginTop:100
                       }}
                >
                    Password

                </label>
            </motion.div>
        </div>


    )

}