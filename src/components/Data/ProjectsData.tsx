import ProjectsClass from '../../models/projects'
import efood from '../../assets/efood.png'
import eplay from '../../assets/eplay.png'
import hotel from '../../assets/hotel (1).png'
import to_do from '../../assets/todo.png'
import supermarket from '../../assets/supermarket.png'
import contact from '../../assets/contact.png'
import wallet from '../../assets/wallet.png'

const ProjectsData: ProjectsClass[] = [
  {
    image: efood,
    title: 'E-Commerce para Restaurantes',
    description:
      'E-FOOD é uma aplicação que visa auxiliar bares e restaurantes ao oferecer comodidade e praticidade aos clientes no momento de escolher os pedidos.',
    languages: ['React', 'Redux', 'Styled Components', 'TypeScript', 'Axios'],
    vercelUrl: 'https://vercel.com/nataliafonseca1/efood',
    githubUrl: 'https://github.com/NataliaFonseca1/efood',
    closeButton: ''
  },
  {
    image: eplay,
    title: 'E-Commerce para Loja de Games',
    description:
      'E-play é uma aplicação que visa auxiliar no crescimento e modernização das vendas de jogos online',
    languages: ['React', 'Redux', 'Styled Components', 'Axios', 'TypeScript'],
    vercelUrl: 'https://e-play-store.vercel.app/',
    githubUrl: 'https://github.com/NataliaFonseca1/e_play',
    closeButton: ''
  },
  {
    image: supermarket,
    title: 'Supermarkect List ',
    description:
      'Aplicação que visa auxiliar o usuário a organizar e otimizar suas compras do dia a dia.',
    languages: ['React', 'CSS', 'Axios', 'HTML'],
    vercelUrl: 'https://supermarket-list-fronted-one.vercel.app/',
    githubUrl: 'https://github.com/NataliaFonseca1/supermarket-list-fronted',
    closeButton: ''
  },
  {
    image: wallet,
    title: 'Wallet App',
    description:
      'Wallet App é uma aplicação que tem como objeto auxiliar no controle financeiro do usuário. Com ela, o usuário poderá ter na palma da sua mão todo o balanço finaneiro do mês',
    languages: ['JavaScript', 'HTML', 'Css', 'Axios'],
    vercelUrl: 'https://wallet-app-frontend-ten.vercel.app/',
    githubUrl: 'https://github.com/NataliaFonseca1/Wallet-app-frontend',
    closeButton: ''
  },
  {
    image: contact,
    title: 'Contact Book',
    description:
      'Lista de contatos que visa o cadastramento de informações, promovendo uma fácil filtragem, busca e armazenamento de dados',
    languages: ['React', 'Redux', 'Styled Components', 'TypeScript'],
    vercelUrl: 'https://contact-book-react-navy.vercel.app/',
    githubUrl: 'https://github.com/NataliaFonseca1/contact-book-react',
    closeButton: ''
  },
  {
    image: hotel,
    title: 'Hotel Recanto do Mar',
    description:
      'Site interativo destinado a apresentar acomodações e atrações do estabelecimento.',
    languages: ['Boostrap', 'HTML'],
    vercelUrl: 'https://hotel-bootstrap.vercel.app/',
    githubUrl: 'https://github.com/NataliaFonseca1/hotel-bootstrap',
    closeButton: ''
  },
  {
    image: to_do,
    title: 'To do List ',
    description:
      'Lista de tarefas que visa auxiliar o usuário na organização das tarefas do dia a dia.',
    languages: ['Vue.js', 'HTML', 'Css'],
    vercelUrl: 'https://to-do-vue-eta.vercel.app/',
    githubUrl: 'https://github.com/NataliaFonseca1/to_do_vue',
    closeButton: ''
  }
]
export default ProjectsData
