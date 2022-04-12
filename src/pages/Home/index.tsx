import { useState } from "react";
import { Form, Pokedex } from "../../components";
import { IPokemon } from "../../shared/interfaces/pokemon";

import * as S from "./styles";

export const Home = () => {
  const [pokemon, setPokemon] = useState<IPokemon | null | undefined>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <S.Container>
      <Form
        setPokemon={(data) => setPokemon(data)}
        setIsLoading={(value) => setIsLoading(value)}
      />
      <Pokedex pokemonData={pokemon} loading={isLoading} />
    </S.Container>
  );
};
