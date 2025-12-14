import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promoçoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Residente Evil 4, conhecido no japão como Biohazard 4, é um jogo de survival horror desenvolvido pela Capcom...',
    title: 'Residente Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Residente Evil 4, conhecido no japão como Biohazard 4, é um jogo de survival horror desenvolvido pela Capcom...',
    title: 'Residente Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Residente Evil 4, conhecido no japão como Biohazard 4, é um jogo de survival horror desenvolvido pela Capcom...',
    title: 'Residente Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Residente Evil 4, conhecido no japão como Biohazard 4, é um jogo de survival horror desenvolvido pela Capcom...',
    title: 'Residente Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido pela Blizzard Entertainment. É o quarto título principal da série Diablo...',
    title: 'Diablo IV',
    system: 'windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido pela Blizzard Entertainment. É o quarto título principal da série Diablo...',
    title: 'Zelda: Tears of the Kingdom',
    system: 'windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido pela Blizzard Entertainment. É o quarto título principal da série Diablo...',
    title: 'Star Wars Jedi: Survivor',
    system: 'windows',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido pela Blizzard Entertainment. É o quarto título principal da série Diablo...',
    title: 'Resident Evil 4 Remake',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductsList games={promoçoes} title="RPG" backgroundColor="gray" />
    <ProductsList games={emBreve} title="Ação" backgroundColor="black" />
    <ProductsList games={promoçoes} title="Aventura" backgroundColor="gray" />
    <ProductsList games={emBreve} title="FPS" backgroundColor="black" />
  </>
)

export default Categories
