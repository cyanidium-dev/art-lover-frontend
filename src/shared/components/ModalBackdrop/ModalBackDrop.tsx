'use client';

import { motion } from 'framer-motion';

type Props = {
    onClose: () => void;
    children: React.ReactNode;
    direction?: 'left' | 'right' | 'center';
};

const ModalBackDrop = ({ onClose, children, direction = 'center' }: Props) => {
    const variants = {
        left: { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
        right: { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } },
        center: { initial: { scale: 0.95 }, animate: { scale: 1 }, exit: { scale: 0.95 } },
    };

    const animation = variants[direction] || variants.center;

    return (
        <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
        >
            <motion.div
                initial={animation.initial}
                animate={animation.animate}
                exit={animation.exit}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default ModalBackDrop;

