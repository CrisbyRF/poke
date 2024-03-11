import Link from "next/link"

const POKE_FETCH = 'https://pokeapi.co/api/v2/pokemon?limit=151'

const Pokemon = ({ pokemon }) => {
    console.log(pokemon)
    const id = pokemon.url.split('/').filter(x => x).pop()
    return (
        <div>
            <li ><Link href={`pokemones/${id}`}>{pokemon.name}</Link></li>
        </div>
    )
}
const Pokemones = ({ pokemones }) => {
    console.log(pokemones)
    return (
        <div>
            <h1>Pokémon</h1>
            <article>
                <ul>
                    {pokemones.map(poke =>
                        <Pokemon pokemon={poke}
                            key={poke.name}
                        />)}
                </ul>
            </article>
        </div>
    )
}

export const getStaticProps = async ({ params }) => {
    const response = await fetch(POKE_FETCH)
    const data = await response.json()
    console.log(data.results)
    return {
        props: { pokemones: data.results }
    }
}

export default Pokemones