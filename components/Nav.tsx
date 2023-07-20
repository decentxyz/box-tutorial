import clsx from "clsx";
import { TopLeftLogo } from "@/components/TopLeftLogo";
import {ConnectButton} from "@rainbow-me/rainbowkit";

export const Nav = () => {
  return (
    <>
      <TopLeftLogo />
      <nav
        className={clsx(
          "flex flex-wrap items-center justify-end gap-1",
          "fixed inset-0 bottom-auto z-10",
          "my-8 mx-4 md:mx-20",
        )}
      >
        <ConnectButton/>
      </nav>
    </>
  );
};
