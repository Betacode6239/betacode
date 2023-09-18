import { SpringConfig, UseSpringProps, animated, useSpring } from '@react-spring/web'
import React, { useEffect } from 'react'


type FadeDirection = 'up' | 'down' | 'left' | 'right'


const Fade = ({
    deps,
    direction = 'up',
    inView = false,
    config,
    children
}: {
    deps?: any[],
    direction?: FadeDirection,
    inView?: boolean,
    children?: any,
    config?: UseSpringProps
}) => {
    const [springs, api] = useSpring(
        () => ({...getConfigByDirection(direction), ...config}),
        deps
    );

    

    function getConfigByDirection(direction: FadeDirection): UseSpringProps{
        const size = 20;
        const delay = 300;
        let res:UseSpringProps  = {}
        switch (direction) {
            case 'down':
                res = {
                    from:{
                        y: -size,
                        opacity: 0
                    },
                    to: {
                        y: 0,
                        opacity: 1
                    },
                    delay: delay
                }
                break;

            case 'left':
                res = {
                    from:{
                        x: -size,
                        opacity: 0
                    },
                    to: {
                        x: 0,
                        opacity: 1
                    },
                    delay: delay
                }
                break;
            case 'right':
                res = {
                    from:{
                        x: size,
                        opacity: 0
                    },
                    to: {
                        x: 0,
                        opacity: 1
                    },
                    delay: delay
                }
                break;
        
            default:
                res = {
                    from:{
                        y: size,
                        opacity: 0
                    },
                    to: {
                        y: 0,
                        opacity: 1
                    },
                    delay: delay
                }
                break;
        }

        return res;
    }



    return (
        <animated.div style={{...springs}}>
            {children}
        </animated.div>
    )
}

export default Fade