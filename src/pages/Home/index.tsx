import { useState } from "react";
import { Form, Pokedex } from "../../components";
import { IPokemon } from "../../shared/interfaces/pokemon";

import * as S from "./styles";

export const Home = () => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <S.Container>
      <Form
        setPokemon={(data) => setPokemon(data)}
        setIsLoading={(value) => setIsLoading(value)}
        setIsError={(value) => setIsError(value)}
      />
      <Pokedex pokemonData={pokemon} loading={isLoading} error={isError} />
    </S.Container>
  );
};
