import { PropsWithChildren } from "react";

export const Body = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative">
      <div className="bg-gradient-conic sticky top-0">{children}</div>
    </div>
  );
};
