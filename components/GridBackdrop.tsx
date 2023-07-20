import { PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "@/styles/splash-animation.module.css";

export const GridBackdrop = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={clsx(
        "relative bg-gradient-grid-white bg-center",
        "grid place-items-center min-h-screen",
        styles.gridShrink,
      )}
    >
      {children}
    </div>
  );
};
