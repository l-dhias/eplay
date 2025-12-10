import { HeaderBar, Link, LinkCard, LinkItem } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Link>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Link>
      </nav>
    </div>

    <LinkCard href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCard>
  </HeaderBar>
)

export default Header
