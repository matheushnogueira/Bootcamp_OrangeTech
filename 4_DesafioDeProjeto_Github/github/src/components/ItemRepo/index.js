import { ItemContainer } from './styles'

function ItemRepo ({ repo, handleRemoveRepo }){

   const handleRemove = () => {
      handleRemoveRepo(repo.id)
   }

  return (
   <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_black">Ver repositório</a>
      <br />
      <a href={repo.id} rel='noreferrer' className='remover'>Remover</a>
      <hr />
   </ItemContainer>
  )
}

export default ItemRepo