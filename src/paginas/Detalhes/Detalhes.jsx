import React, { useContext, useEffect, useState } from "react";
/* import { Buscar } from '../../API'; */
import { Typography } from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";
import { Buscar } from "../../API";
import { UsuarioContext } from "../../common/context/Usuario";
import { DadosContext } from "../../common/context/Dados";
import Infos from "../../components/Infos";

function Detalhes() {
  const { usuario } = useContext(UsuarioContext);
  const { dados, setDados } = useContext(DadosContext);

  useEffect(() => {
    Buscar(usuario, setDados);
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="bloco">
      <Typography variant="h3" align="center" className="titulo">
        Detalhes
      </Typography>

        <Infos dados={ dados } />

      <div className="detalhes__container">
        <Link to="/repositorios-favoritos">
          <Typography variant="h5" align="center" className="botao">
            Repositórios favoritos
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default Detalhes;
