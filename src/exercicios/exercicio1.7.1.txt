import { filmes } from "./filmes.js";

//function Filmes() {
//  function filtrarFilmeAnos(ano = 2000) {
//    return filmes.filter((filme) => filme.lancamento > ano);
//  }

//  function mapearFilmes(filmes) {
//    return filmes
//      .map((filme) => filme.generos).flat()
//      .map((genero) => <p>{genero}</p>);
//  }
//  return (
//    <div>
//      {mapearFilmes(filtrarFilmeAnos())}
//    </div>
//  );
//}

function FilmeCard() {
  function filtrarFilmeOscar() {
    return filmes.filter((filme) => filme.oscar);
  }
  function mapearFilmes(filmes) {
    return filmes
      .map((filme) => {
        if (filme.oscar === true) {
          return filme.nome + "🏆";
        }
        return filme.nome;
      })
      .map((filme) => <p>{filme}</p>);
  }
  return (
    <div>
      <h1>te banhas? 🤨</h1>
      {mapearFilmes(filtrarFilmeOscar())}
    </div>
  );
}
export default function App() {
  return (
    <div>
      <FilmeCard />
    </div>
  );
}
