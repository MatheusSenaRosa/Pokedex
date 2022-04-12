import { useForm } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";
import { IPokemon } from "../../shared/interfaces/pokemon";
import { getPokemon } from "../../shared/services/getPokemon";

import * as S from "./styles";

type Props = {
  setPokemon: (data: IPokemon | undefined) => void;
  setIsLoading: (value: boolean) => void;
};

type FormData = {
  pokemonName: string;
};

export const Form = ({ setPokemon, setIsLoading }: Props) => {
  const { register, handleSubmit, resetField } = useForm<FormData>();

  const onSubmitHandler = handleSubmit(async ({ pokemonName }) => {
    setIsLoading(true);
    setPokemon(undefined);

    try {
      const pokemonData = await getPokemon(pokemonName);
      setPokemon(pokemonData);
      setIsLoading(false);
      resetField("pokemonName");
    } catch (err) {
      setIsLoading(false);
    }
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
