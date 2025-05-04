import Image from 'next/image';
import * as motion from 'motion/react-client';

import Container from '@/shared/components/container/Container';

import styles from "./SubscribeNews.module.scss";
import { fadeInAnimation } from '@/shared/utils/animationVariants';

const SubscribeNews = ()=> {
  return (
    <section className={`${styles.section} relative`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
        className="hidden xl:block z-10"
      >
        <Image
          src="/images/footer/subscribeNews/figureLeftDesk.svg"
          alt="figure background"
          width="114"
          height="131"
        />
      </motion.div>
      <Container>
        <div className={styles.content}></div>
      </Container>
    </section>
  )
}

export default SubscribeNews;
