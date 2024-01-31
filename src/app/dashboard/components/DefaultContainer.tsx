import { ReactNode } from "react";

export function DefaultContainer({ children }: { children: ReactNode }) {
  return <div className="min-h-screen">{children}</div>;
}
