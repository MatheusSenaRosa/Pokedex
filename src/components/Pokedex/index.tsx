import { useEffect, useState } from "react";
import { IPokemon } from "../../shared/interfaces/pokemonInterface";
import {
  formatName,
  formatHeight,
  formatWeight,
  formatId,
} from "../../shared/formatPokemonData";
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
          return pokemonData?.sprites.versions?.["generation-v"]["black-white"]
            .animated?.front_shiny;
        default:
          return pokemonData?.sprites.versions?.["generation-v"]["black-white"]
            .animated?.front_default;
      }
    }

    switch (pokemonVersion.shiny) {
      case true:
        return pokemonData?.sprites.versions?.["generation-v"]["black-white"]
          .animated?.back_shiny;
      default:
        return pokemonData?.sprites.versions?.["generation-v"]["black-white"]
          .animated?.back_default;
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
          <S.PokemonId>{formatId(pokemonData.id)}</S.PokemonId>

          <S.StickButtonContainer>
            <span onClick={shinyHandler} />
            <div>
              <span onClick={positionHandler} />
              <span onClick={positionHandler} />
            </div>
            <span onClick={shinyHandler} />
          </S.StickButtonContainer>
          <S.InfoPanel>
            <h2>{formatName(pokemonData.name)}</h2>
            <div>
              <h4>
                Height:
                <span>{formatHeight(pokemonData.height)}</span>
              </h4>
              <h4>
                Weight:
                <span>{formatWeight(pokemonData.weight)}</span>
              </h4>
              <h4>
                Ability:
                <span>{pokemonData.abilities[0].ability.name}</span>
              </h4>
            </div>
          </S.InfoPanel>

          <S.TypePanel right="244px">
            {pokemonData.types[0].type.name}
          </S.TypePanel>
          <S.TypePanel right="94px">
            {pokemonData.types.length === 2 && pokemonData.types[1].type.name}
          </S.TypePanel>
        </>
      )}
    </S.Container>
  );
};
