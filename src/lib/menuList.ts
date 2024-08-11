import { ArticlesIcon, UsersIcon, FormIcon, CounterIcon, ItemsIcon } from "./icons";

const menuList = [
  {
    id: 1,
    name: 'Artigos',
    description: 'Visualize e leia artigos.',
    path: '/articles',
    imagePath: '/main/1.webp',
    icon: ArticlesIcon,
  },
  {
    id: 2,
    name: 'Usuários',
    description: 'Visualize informações de usuários.',
    path: '/users',
    imagePath: '/main/2.webp',
    icon: UsersIcon,
  },
  {
    id: 3,
    name: 'Formulário',
    description: 'Preencha, envie e visualize formulário.',
    path: '/form',
    imagePath: '/main/3.webp',
    icon: FormIcon,
  },
  {
    id: 4,
    name: 'Contador',
    description: 'Contador de número crescente e decrescente.',
    path: '/counter',
    imagePath: '/main/4.webp',
    icon: CounterIcon,
  },
  {
    id: 5,
    name: 'Itens',
    description: 'Visualize uma lista de commodities',
    path: '/items',
    imagePath: '/main/5.webp',
    icon: ItemsIcon,
  },
];

export const sortedMenuList = menuList.sort((a, b) => a.name.localeCompare(b.name));
