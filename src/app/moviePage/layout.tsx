import { ReactNode } from "react";

interface MoviePageLayoutProps {
  children: ReactNode;
}

const MoviePageLayout = async ({ children }: MoviePageLayoutProps) => {
  return (
    <div className="w-full min-h-[100vh]">
      {children}
    </div>
  );
};

export default MoviePageLayout;
