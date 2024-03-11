import Image from "next/image"
import Link from "next/link"

const Pokemon = ({ data }) => {
    console.log(data)
    return (
        <div>
            <Link href='/'>Ir al Inicio</Link>
            <article>
                <h2>{data.name} N° {data.id}</h2>
                <Image src={data.sprites.front_default} width={200} height={200} />
                <p>Base experience: {data.base_experience}</p>
            </article>
        </div>
    )
}

export default Pokemon

export const getStaticProps = async ({ params }) => {
    const FETCH_POKE = `https://pokeapi.co/api/v2/pokemon/${params.id}`
    const response = await fetch(FETCH_POKE)
    const data = await response.json()
    return {
        props: { data }
    }
}

export const getStaticPaths = async () => {
    const paths = [
        { params: { id: '1' } }
    ]
    return {
        paths,
        fallback: 'blocking',
    }
}
// export const getServerSideProps = async ({ params }) => {
//     console.log(params)
//     const POKE_FETCH = `https://pokeapi.co/api/v2/pokemon/${params.id}`
//     const response = await fetch(POKE_FETCH)
//     const data = await response.json()

//     return {
//         props: { data }
//     }
// }