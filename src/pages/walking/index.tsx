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
    CardMedia, Divider,

} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

export default function Breathing() {
    // Page on the importance of breathing exercises in meditation
    return (
        <div>
            <Head>
                <title>Meditation Hub | Breathing Exercises</title>
                <meta name="description" content="Meditation Hub | Breathing Exercises" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Image style={
                    {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                        objectFit: 'cover',
                    }

                } src={'https://cdn.discordapp.com/attachments/999479128610844674/1084948705473466458/OwenKruse_Guided_Meditation_Website_Modern_Homepage_Background__9f5cc94f-78ea-4446-b7b5-6544d15c600b.png'} fill quality={100}  alt={'Image'}/>
                <Box sx={{ flexGrow: 1, p: 2, pt: 10, }}>
                    <Grid container sx={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                    }>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ display: 'flex', }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                    <CardContent sx={{ flex: '1 0 auto', }}>
                                        <Typography component="div" variant="body1">
                                                Walking meditation is a form of mindfulness meditation practiced all over the world. At its core, walking meditation is simply bringing your attention to your feet, your body and the ground below you and focusing your mind on what it feels like to walk.
                                        </Typography>
                                        <Button sx={
                                            {
                                                justifySelf: 'center',
                                                alignSelf: 'center',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: '1rem',
                                            }
                                        } variant="contained" >Back to Start</Button>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid sx={
                        {
                            paddingTop: '2rem',
                        }
                    } container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ display: 'flex', }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                    <CardContent sx={{ flex: '1 0 auto', }}>
                                        <Typography component="div" variant="body1">
                                            <p>
                                                <h2> Six Stages of walking meditation</h2>
                                                <p>
                                                    The movement can be divided into six phases, from the status of raising, lifting, pushing, lowering, stepping, to pressing.
                                                </p>
                                            </p>
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ display: 'flex', }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                    <CardContent sx={{ flex: '1 0 auto', }}>
                                        <Typography component="div" variant="body1">
                                            <p>
                                                <h2>Benefits of Walking Meditation</h2>
                                                <p>
                                                    By heightening awareness of mental and physical states, walking meditation—like mindfulness in general—can help us gain a greater sense of control over our thoughts, feelings, and actions, allowing us to respond in more constructive ways when we experience negative thoughts or emotions.
                                                </p>
                                            </p>
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>

                    </Grid>

                </Box>

            </main>
        </div>
    )
}