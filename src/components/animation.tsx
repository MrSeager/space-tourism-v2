// animations.tsx
import { useSpring, AnimatedProps } from 'react-spring';

export const useSlide = (sign: string): AnimatedProps<{ opacity: number; x: string }> => {
    const direction = sign === '+' ? '250px' : '-250px';
    return useSpring({
        from: { opacity: 0, x: direction },
        to: { opacity: 1, x: '0px' },
        config: { tension: 75, friction: 10 },
    });
};
