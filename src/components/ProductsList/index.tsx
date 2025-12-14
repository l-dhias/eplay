import Game from '../../models/Games'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  backgroundColor: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ backgroundColor, title, games }: Props) => (
  <Container backgroundColor={backgroundColor}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            system={game.system}
            title={game.title}
            infos={game.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
