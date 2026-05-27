import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useMusicPlatform } from "../Hooks/useMusicPlatform";
import type { IUseMusicPlatform } from "../Hooks/useMusicPlatform";

interface MusicProviderProps {
  children: ReactNode;
}

const MusicContext = createContext<IUseMusicPlatform | undefined>(undefined);

export function MusicProvider({ children }: MusicProviderProps) {
  const musicPlatform = useMusicPlatform();

  return (
    <MusicContext.Provider value={musicPlatform}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusicContext(): IUseMusicPlatform {
  const context = useContext(MusicContext);

  if (context === undefined) {
    throw new Error("useMusicContext debe usarse dentro de MusicProvider");
  }

  return context;
}