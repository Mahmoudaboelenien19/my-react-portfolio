import { iconsArr } from "@/assets/Utils/Arr";
import { opacityVariant } from "@/assets/Utils/MainVariants";
import { motion } from "framer-motion";
import Title from "../widgets/shared/CustomTitle";
import MagnaticWrapper from "../widgets/animation/MagnaticWrapper";

const Icons = () => {
  return (
    <div className="icons">
      {iconsArr.map(({ Icon, id, title, link }) => {
        return (
          <Title key={id} title={title}>
            <MagnaticWrapper>
              <motion.a
                variants={opacityVariant}
                className="icon-parent"
                style={{ fontSize: 30, color: "var(--main-clr)" }}
                transition={{ duration: 0.1 }}
                href={link}
                target="blank"
              >
                <Icon />
              </motion.a>
            </MagnaticWrapper>
          </Title>
        );
      })}
    </div>
  );
};

export default Icons;
