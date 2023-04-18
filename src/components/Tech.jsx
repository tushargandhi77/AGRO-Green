import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';
import { textVariant } from "../utils/motion";
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}
        class="space-y-[5px]"
      >
        <h2 className={styles.sectionHeadText}>Our Tech Stack</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      </motion.p>

      <div className="flex flex-row flex-wrap justify-center gap-10 mx-3">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");