'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './Resume.module.scss';

import Image from "next/image";
import Container from "@/components/UI/Layout/Layout";
import FancyButton from "@/components/UI/Elements/Button/Button";
import commonConfig from "@/database/config/metadata.json";
import Link from "next/link";

export default function Resume() {
    const container = useRef();
    const cardGroup = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // CV Card
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardGroup.current,
                start: 'top 75%',
                end: 'top top',
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
        tl.to(`.${styles.cardV1}`, {
            rotate: '-6deg',
            scale: 1.05,
        }, 0);
        tl.to(`.${styles.cardV2}`, {
            rotate: '6deg',
            scale: 1.05,
            x: '5%'
        }, 0);

    }, { scope: container })


    return (
        <section className={styles.section} ref={container} id={'resume'}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.cardGroup} ref={cardGroup}>
                        <div className={`${styles.card} ${styles.cardV1}`}>
                            <div className={styles.cardInner}>
                                <div className={styles.cardTitle}>Shantanu Singh</div>
                                <div className={styles.cardDesc}>Social Entrepreneur & Developer</div>
                                <hr />
                                <p>
                                    I am Shantanu, a Social Entrepreneur & Developer with 2+ years of experience, currently the Founder & CTO of BoostEd Asia, an initiative guiding underprivileged students through AI.
                                    I also serve as CTO at CrossTheSkylimits, building tech solutions for students. As Co-Founder & Instructor at ISP Association, I help students maximize their potential. Additionally, I am a state-level Table Tennis player, where I developed leadership and analytical skills. 
                                    Past roles include managerial experience at Project Sarama (NGO) and a graphic design internship at The Founderly, where I honed skills in social media and SEO. I’m driven to make impactful changes in education.
                                </p>
                                <div>
                                    <Link href={`mailto:${commonConfig.personal.email}`} target={'_blank'}>
                                        {commonConfig.personal.email}
                                    </Link>
                                    <span>{commonConfig.personal.city}, {commonConfig.personal.state}</span>
                                </div>
                                <hr />
                                <div className={styles.cardSectionTitle}>WORK EXPERIENCE</div>
                                <p>
                                    Social Entrepreneur & Developer | Founder & CTO <br />
                                    Chief Technology Officer | Co-Founder & Instructor  <br />
                                    State Level Player | Manager
                                </p>
                            </div>
                            <figure className={styles.figure}>
                                <Image src="/yasin-genc-photo.jpeg" alt="Yasin Genc" width={150} height={150} />
                            </figure>
                        </div>
                        <div className={`${styles.card} ${styles.cardV2}`}>
                            <div className={styles.cardInner}>
                                <Image src="/code-snippet.svg" alt="Code Snippet" width={330} height={480} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <FancyButton theme='button-1' target={'_blank'} link={commonConfig.personal.resumeURL}>View
                            Resume</FancyButton>
                    </div>
                    <div className={styles.links}>
                        <Link href={`${commonConfig.social.linkedin}`} target={'_blank'}>LinkedIn</Link>
                        <Link href={`${commonConfig.social.github}`} target={'_blank'}>GitHub</Link>
                        <Link href={`${commonConfig.social.instagram}`} target={'_blank'}>Instagram</Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}