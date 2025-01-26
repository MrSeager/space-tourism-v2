// animations.tsx
import { useSpring, useTransition, AnimatedProps } from 'react-spring';

export const useSlide = (sign: string): AnimatedProps<{ opacity: number; x: string }> => {
    const direction = sign === '+' ? '250px' : '-250px';
    
    return useSpring({
        from: { opacity: 0, x: direction },
        to: { opacity: 1, x: '0px' },
        config: { tension: 75, friction: 10 },
    });
};

export const useFadeTransition = (items: any[]) => {
    return useTransition(items, {
        from: { opacity: 0, position: 'absolute' },
        enter: { opacity: 1, position: 'relative' },
        leave: { opacity: 0, position: 'absolute' },
        config: { duration: 500 }
    });
};
