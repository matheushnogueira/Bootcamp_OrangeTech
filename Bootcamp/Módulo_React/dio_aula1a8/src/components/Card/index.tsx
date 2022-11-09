// Styles, icons
import {
   CardContainer,
   Content,
   HasInfo,
   ImageBackground,
   PostInfo,
   UserInfo,
   UserPicture
} from './styles'
import {FiThumbsUp} from 'react-icons/fi'

const Card = () => {
  return (
    <CardContainer>
            <ImageBackground/>
      <Content>
         <UserInfo>
            <UserPicture />
            <div>
               <h4>Anônimo</h4>
               <p>Há 10 minutos</p>
            </div>
         </UserInfo>
         <PostInfo>
            <h4>projeto para curso HTML e CSS</h4>
            <p>Projeto feito em curso html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
         </PostInfo>
         <HasInfo>
            <h4>#HTML #CSS #Javascript</h4>
            <p>
               <FiThumbsUp/> 10
            </p>
         </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }