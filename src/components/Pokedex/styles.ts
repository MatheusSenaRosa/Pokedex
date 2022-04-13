import PokedexImg from "../../assets/img/pokedex.png";
import styled from "styled-components";

export const Container = styled.section`
  background: url(${() => PokedexImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  height: 700px;
  width: 900px;

  display: flex;
  position: relative;

  margin-top: 20px;

  * {
    user-select: none;
    font-family: "Calculator";
  }
`;

export const PictureContainer = styled.div`
  height: 180px;
  width: 270px;

  position: absolute;
  top: 215px;
  left: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 130px;
  }

  p {
    font-size: 25px;
    font-weight: 600;
  }
`;

export const PokemonId = styled.h3`
  font-size: 70px;

  height: 64px;
  width: 137px;

  position: absolute;
  bottom: 101px;
  left: 124px;

  padding-top: 8px;
  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StickButtonContainer = styled.div`
  position: absolute;
  bottom: 119px;
  left: 295px;

  height: 105px;
  width: 106px;

  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    display: block;

    width: 40px;
    cursor: pointer;
  }

  > span {
    flex: 1;
    width: 38px;
  }

  div {
    width: 100%;
    height: 35px;

    display: flex;
    justify-content: space-between;
  }
`;

export const InfoPanel = styled.div`
  color: white;

  position: absolute;
  right: 92px;
  top: 233px;

  padding: 5px 15px 0 15px;
  width: 278px;
  height: 103px;

  h2 {
    font-size: 21px;
    font-weight: 600;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    h4 {
      display: flex;
      justify-content: space-between;
      font-size: 15px;
    }
  }
`;

export const TypePanel = styled.div<{ right: string }>`
  position: absolute;
  width: 126px;
  height: 45px;

  right: ${({ right }) => right};
  bottom: 105px;

  font-size: 22px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
`;
