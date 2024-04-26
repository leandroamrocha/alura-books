import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const Logotipo = styled.div`
display: flex;
    font-size: 30px;
`
const Imagem = styled.img`
margin-right: 10px;
`

function Logo () {
    return(
        <Logotipo>
          <Imagem src={logo} alt='logo' className='img'></Imagem>
          <p><strong>Alura</strong>Books</p>
        </Logotipo>
    )
}

export default Logo