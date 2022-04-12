import { useForm } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";
import { IPokemon } from "../../shared/interfaces/pokemon";
import { getPokemon } from "../../shared/services/getPokemon";

import * as S from "./styles";

type Props = {
  setPokemon: (data: IPokemon | null) => void;
  setIsLoading: (value: boolean) => void;
  setIsError: (value: boolean) => void;
};

type FormData = {
  pokemonName: string;
};

export const Form = ({ setPokemon, setIsLoading, setIsError }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmitHandler = handleSubmit(async ({ pokemonName }) => {
    setIsLoading(true);
    setIsError(false);

    const pokemonData = await getPokemon(pokemonName);

    if (typeof pokemonData === "string") {
      setIsError(true);
      setPokemon(null);
    } else {
      setPokemon(pokemonData);
    }

    setIsLoading(false);
  });

  return (
    <S.Form onSubmit={onSubmitHandler}>
      <input
        required
        placeholder="Search"
        {...register("pokemonName")}
        autoFocus
      />
      <button type="submit">
        <IoSearchSharp />
      </button>
    </S.Form>
  );
};
