import { ObjectId } from "bson";
import Link from "next/link";
import { Fragment } from "react";
import MainNavigation from "../../componentes/logo"
export default function SalaDeEspera({ sala, id }) {
    async function ObterSala(id) {
        const resultado = await fetch("/api/CriarSala", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    return (
        <Fragment>
            <MainNavigation />
            <div >
                <h1>Nome da sala: {sala.NomeDaSala}</h1>
                <h3>
                    Nome: {sala.NomeDoJogador}
                </h3>
                <h3 >Numero de jogadores 1/{sala.NumeroDeJogadores}</h3>
                <h3>Baralho: {sala.Baralho}</h3>
                <h3>Tempo por Ronda: {sala.TempoPorRonda}</h3>
                <h3>Numero de rondas: {sala.NumeroDeRondas}</h3>
                <h3>Link: http://localhost:3000/saladeespera/{id}</h3>
                <Link href="/jogo">
                    <button>Jogar</button>
                </Link>
            </div>
        </Fragment>
    )
}
export async function getServerSideProps(context) {
    return {
        props: { id: context.query.id }, // will be passed to the page component as props
    }
}