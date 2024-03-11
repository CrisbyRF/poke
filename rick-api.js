import styled from 'styled-components'
import '../styles/Home.module.css'

const Target = styled.article`
border: 1px solid black;
width: fit-content;
padding: 10px 30px;
border-radius: 10px;
transition: all 0.2s ease;
margin-right:20px;
margin-bottom:3rem;
background-color:#fff;

h2{
  text-align:center;
}
img{
  border:1px solid black;
}
&:hover{
  cursor:pointer;
  box-shadow: 0 5px 5px rgb(0,0,0,0.3);
  transform:scale(1.01)
`
const Container = styled.div`
  display: flex;
  width:1200px;
  margin: 0 auto;
  
ul{
  display: flex;
  flex-wrap: wrap;
  text-align:center;
}
`
const RICK_AND_MORTY_FETCH = 'https://rickandmortyapi.com/api/character'

const Personaje = ({ personaje }) => {
  return (
    <Target>
      <h2>{personaje.name}</h2>
      <p>Specie: {personaje.species}</p>
      <img src={personaje.image} />
    </Target>
  )
}
export default function Personajes({ personajes }) {
  return (
    <div>
      <h1>Personajes</h1>
      <Container>
        <ul>
          {personajes.map(x =>
            <Personaje personaje={x} key={x.name} />
          )}
        </ul>
      </Container>
    </div>
  )
}
export const getStaticProps = async () => {
  const response = await fetch(RICK_AND_MORTY_FETCH)
  const data = await response.json()
  console.log(data.results)
  return {
    props: { personajes: data.results }
  }
}
