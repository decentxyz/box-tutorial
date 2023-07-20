import clsx from "clsx";
import styles from "@/styles/splash-animation.module.css";

export const Footer = () => {
  return (
    <h1
      className={clsx(
        "absolute left-0 right-0 bottom-0 flex items-center justify-center",
        "uppercase font-semibold tracking-widest",
        "text-5xl sm:text-7xl md:text-8xl lg:text-8xl",
        styles.titleGrow,
      )}
    >
      The&nbsp;Box
    </h1>
  );
};
