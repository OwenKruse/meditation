import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router";
import AppBarNav from '@/components/AppBarNav'
import {
    Typography,
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Toolbar,
    AppBar,
    CssBaseline,
    Link,
    Stack,
    Card,
    CardContent,
    CardMedia,

} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const textContentRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const textRef = React.useRef(null);
    const router = useRouter();
    const handleBegin = () => {
        if (textContentRef && contentRef && textRef) {
            // Hide the text container
            // @ts-ignore
            textContentRef.current.style.display = 'none';
            // Show the content container
            contentRef.current.animate({
                opacity: 1,
            }, {
                duration: 1000,
                easing: 'ease-in-out',
            });
            // After 1 second set the opacity to 1
            setTimeout(() => {
                contentRef.current.style.opacity = '1';
            }, 1000);

            // Change the text to " 1 " using animation and then change it to " 2 " and then " 3 "
            setTimeout(() => {
                    textRef.current.animate({
                        opacity: 0,
                    }, {
                        duration: 1000,
                        easing: 'ease-in-out',
                    });
                    setTimeout(() => {
                        textRef.current.style.opacity = '0';
                        textRef.current.innerHTML = 'Hold It';
                        textRef.current.animate({
                            opacity: 1,
                        }, {
                            duration: 1000,
                            easing: 'ease-in-out',
                        });
                        setTimeout(() => {
                            textRef.current.style.opacity = '1';
                        }, 1000);
                    }, 1000);

                }
                , 2000);
            setTimeout(() => {
                    textRef.current.animate({
                        opacity: 0,
                    }, {
                        duration: 1000,
                        easing: 'ease-in-out',
                    });
                    setTimeout(() => {
                        textRef.current.style.opacity = '0';
                        textRef.current.innerHTML = '1';
                        textRef.current.animate({
                            opacity: 1,
                        }, {
                            duration: 1000,
                            easing: 'ease-in-out',
                        });
                        setTimeout(() => {
                            textRef.current.style.opacity = '1';
                        }, 1000);
                    }, 1000);

                }
                , 4000);
            setTimeout(() => {
                    textRef.current.animate({
                        opacity: 0,
                    }, {
                        duration: 1000,
                        easing: 'ease-in-out',
                    });
                    setTimeout(() => {
                        textRef.current.style.opacity = '0';
                        textRef.current.innerHTML = '2';
                        textRef.current.animate({
                            opacity: 1,
                        }, {
                            duration: 1000,
                            easing: 'ease-in-out',
                        });
                        setTimeout(() => {
                            textRef.current.style.opacity = '1';
                        }, 1000);
                    }, 1000);

                }
                , 6000);
            setTimeout(() => {
                    textRef.current.animate({
                        opacity: 0,
                    }, {
                        duration: 1000,
                        easing: 'ease-in-out',
                    });
                    setTimeout(() => {
                        textRef.current.style.opacity = '0';
                        textRef.current.innerHTML = '3';
                        textRef.current.animate({
                            opacity: 1,
                        }, {
                            duration: 1000,
                            easing: 'ease-in-out',
                        });
                        setTimeout(() => {
                            textRef.current.style.opacity = '1';
                        }, 1000);
                    }, 1000);
                }
                , 8000);
            setTimeout(() => {
                    textRef.current.animate({
                        opacity: 0,
                    }, {
                        duration: 1000,
                        easing: 'ease-in-out',
                    });
                    setTimeout(() => {
                        textRef.current.style.opacity = '0';
                        textRef.current.innerHTML = 'Breath Out';
                        textRef.current.animate({
                            opacity: 1,
                        }, {
                            duration: 1000,
                            easing: 'ease-in-out',
                        });
                        setTimeout(() => {
                            textRef.current.style.opacity = '1';
                        }, 1000);
                    }, 1000);
                }
                , 10000);
            setTimeout(() => {
                router.push('/breathing');
            }
                , 12000);
        }
    }
  return (
    <>
      <Head>
        <title>Meditation Hub</title>
        <meta name="description" content="Guided meditation for anyone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
            <Image style={
                {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                }
            } src={'https://cdn.discordapp.com/attachments/999479128610844674/1084948701488889866/OwenKruse_Guided_Meditation_Website_Modern_Homepage_Background__8b4ff9a4-291f-414c-9161-bdd2514d5155.png'} alt={'Background'} fill />
            <Container ref={textContentRef} sx={
                {
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    padding: '20px',

                }
            } >
                <Typography variant="h2" component="h1" gutterBottom>
                    Meditation As seen in Meeting Faith
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    A meditation learning experience.
                </Typography>
                <Button variant="contained" size="large" onClick={handleBegin}>
                    Begin
                </Button>
            </Container>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                ref={contentRef}
            >
            <Container sx={
                {
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    padding: '20px',
                    width: '55rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',


                }
            } >
                <Typography variant="h2" component="h1" ref={textRef}>
                    Take a deep breath.
                </Typography>
            </Container>
            </motion.div>



        </main>
    </>
  )
}
