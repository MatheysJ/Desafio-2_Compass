import React, { useState } from "react";
import { Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import "./style.css";
import '@fontsource/roboto/500.css';
import SearchIcon from '@mui/icons-material/Search';
import { Buscar } from "../../API";

function Home() {
  const [usuario, setUsuario] = useState("");

  return (
    <div>
      <Typography variant="h3" align="center" className="titulo">Pesquise um usuário do GitHub</Typography>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="container">
          <TextField
            value={usuario}
            onChange={(event) => {
              setUsuario(event.target.value);
            }}
            id="standard-basic"
            label="Pesquise um usuário"
            variant="outlined"
            margin="none"
            className="search"

            InputProps={{endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => Buscar(usuario)}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )}}
            
          />
          
          <Button type="submit" variant="contained" color="inherit" onClick={() => Buscar(usuario)}>
            Pesquisar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Home;
