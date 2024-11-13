import Link from 'next/link';
import commonConfig from '@/database/config/metadata.json';
import gsap from 'gsap';
import { useEffect } from 'react';

export default function Logo({ classVariable }) {
    useEffect(() => {
      gsap.to('.animate-spin',{
        rotate:360,
        duration:10,
        repeat:-1
      })                                                
    }, [])
    
    return (
        <Link href="/" className={classVariable} aria-label={commonConfig.metadata.title}>
            <div className="animate-spin">
                <img src="/shantanulogo.svg" alt=""/>
            </div>
        </Link>
    )
}