import Image from "next/image";

export const TopLeftLogo = () => {
  return (
    <div className="absolute m-8 top-0 left-0 flex gap-8 items-center">
      <Image
        src="/decent-icon-black.png"
        alt="Decent Logo"
        height={40}
        width={48}
      />
      <p className="uppercase mx-auto text-3xl font-light">Click. Mint.</p>
    </div>
  );
};
