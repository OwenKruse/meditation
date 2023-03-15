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
    const router = useRouter();
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
                                            <p>
                                                Breathing exercises are an important part of meditation. They help you focus on your breathing and relax your mind. This is important because when you are meditating, your mind is often very active. You might find yourself thinking about things you need to do, or things that happened in the past, or things that are going to happen in the future. When you are meditating, you want to be able to focus on the present moment. You want to be able to focus on the present moment without being distracted by your thoughts. Breathing exercises can help you do this.
                                            </p>

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
                                        } variant="contained" onClick={
                                            () => {
                                                router.push('/walking')
                                            }
                                        } >Next Step</Button>
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
                                                <h2>Box Breathing</h2>
                                                <p>
                                                    Box breathing is a breathing exercise that involves breathing in for four seconds, holding your breath for four seconds, breathing out for four seconds, and holding your breath for four seconds. This is a good exercise to do when you are feeling stressed or anxious. It can help you relax and focus on the present moment.
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
                                                <h2>Alternate Nostril Breathing</h2>
                                                <p>
                                                    Alternate nostril breathing is a breathing exercise that involves breathing in through your left nostril and breathing out through your right nostril. Then, you breathe in through your right nostril and breathe out through your left nostril. This is a good exercise to do when you are feeling tired. It can help you feel more energized and focused.
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