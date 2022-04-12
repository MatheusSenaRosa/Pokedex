import { useEffect, useState } from "react";
import { IPokemon } from "../../shared/interfaces/pokemon";
import * as S from "./styles";

type Props = {
  pokemonData: IPokemon | null | undefined;
  loading: boolean;
};

type PokemonVersion = {
  position: "front" | "back";
  shiny: boolean;
};

export const Pokedex = ({ pokemonData, loading }: Props) => {
  const [pokemonVersion, setPokemonVersion] = useState<PokemonVersion>({
    position: "front",
    shiny: false,
  });

  useEffect(
    () => setPokemonVersion({ position: "front", shiny: false }),
    [pokemonData]
  );

  const positionHandler = () => {
    if (pokemonVersion.position === "front") {
      return setPokemonVersion((prev) => ({ ...prev, position: "back" }));
    }

    setPokemonVersion((prev) => ({ ...prev, position: "front" }));
  };

  const shinyHandler = () => {
    setPokemonVersion((prev) => ({ ...prev, shiny: !prev.shiny }));
  };

  const imgHandler = () => {
    if (pokemonVersion.position === "front") {
      switch (pokemonVersion.shiny) {
        case true:
          return pokemonData?.sprites.front_shiny;
        default:
          return pokemonData?.sprites.front_default;
      }
    }

    switch (pokemonVersion.shiny) {
      case true:
        return pokemonData?.sprites.back_shiny;
      default:
        return pokemonData?.sprites.back_default;
    }
  };

  return (
    <S.Container>
      <S.PictureContainer>
        {pokemonData && <img src={imgHandler()} alt="Pokemon" />}
        {loading && !pokemonData ? <p>Loading...</p> : null}
        {!loading && pokemonData === null ? <p>No data</p> : null}
        {!loading && pokemonData === undefined ? <p>Not found</p> : null}
      </S.PictureContainer>

      {pokemonData && (
        <>
          <S.PokemonId>
            {pokemonData.id > 9 ? pokemonData?.id : `0${pokemonData?.id}`}
          </S.PokemonId>

          <S.StickButtonContainer>
            <span onClick={shinyHandler} />
            <div>
              <span onClick={positionHandler} />
              <span onClick={positionHandler} />
            </div>
            <span onClick={shinyHandler} />
          </S.StickButtonContainer>
          <S.InfoPanel>
            <h2>
              {pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)}
            </h2>
            <div>
              <h4>
                Height:
                <span>{(pokemonData.height * 0.1).toFixed(2)} M</span>
              </h4>
              <h4>
                Weight:
                <span>{Math.round(pokemonData.weight * 0.1)} KG</span>
              </h4>
              <h4>
                Ability:
                <span>{pokemonData.abilities[0].ability.name}</span>
              </h4>
            </div>
          </S.InfoPanel>
        </>
      )}
    </S.Container>
  );
};
