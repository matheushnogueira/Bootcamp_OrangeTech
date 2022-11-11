import { Container } from './styles'
import Button from './components/Button'
import Input from './components/Input'
import ItemRepo from './components/ItemRepo'

import gitLogo from './assets/github.png'

import { api } from './services/api'

import { useState } from 'react'
 
function App() {

   const [currentRepo, setCurrentRepo] = useState('');
   const [repos, setRepos] = useState([]);

   const handleSearchRepo = async () => {

      const {data} = await api.get(`repos/${currentRepo}`)

      if(data.id){
         const isExist = repos.find(repo => repo.id === data.id);

         if(!isExist){
            setRepos(prev => [...prev,data])
            setCurrentRepo('')
            return
         }
      }
      alert('Repositório não encontrado')
   }

   const handleRemoveRepo = (id) => {
      setCurrentRepo(
         currentRepo.filter(current => {
          return current.id !== id;
        })
      )
    }

   return (
      <Container>
         <img src={gitLogo} width={72} height={72} alt="github Logo" />
         <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
         <Button onClick={handleSearchRepo} />
         {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)} 
      </Container>
   );
}

export default App;
