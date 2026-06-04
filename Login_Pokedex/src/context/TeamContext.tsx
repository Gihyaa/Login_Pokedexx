import React, { createContext, useState, useContext } from "react";

type TeamContextData = {
  team: any[];
  addToTeam: (pokemon: any) => void;
  removeFromTeam: (id: number) => void;
};

const TeamContext = createContext<TeamContextData>({} as TeamContextData);

export function TeamProvider({ children }: { children: React.ReactNode }) {
  const [team, setTeam] = useState<any[]>([]);

  const addToTeam = (pokemon: any) => {
    if (team.length < 6 && !team.find(p => p.id === pokemon.id)) {
      setTeam([...team, pokemon]);
    }
  };

  const removeFromTeam = (id: number) => {
    setTeam(team.filter(p => p.id !== id));
  };

  return (
    <TeamContext.Provider value={{ team, addToTeam, removeFromTeam }}>
      {children}
    </TeamContext.Provider>
  );
}

export const useTeam = () => useContext(TeamContext);