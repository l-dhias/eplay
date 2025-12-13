import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
  backgroundColor: 'gray' | 'black'
}

const ProductsList = ({ backgroundColor, title }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)

export default ProductsList
