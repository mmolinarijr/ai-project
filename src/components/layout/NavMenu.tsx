import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { sortedMenuList } from '@/lib/menuList';
import { HomeIcon } from '@/lib/icons';
import { Menu } from 'lucide-react';

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center font-semibold text-md">
            <Menu />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="px-10 py-3 gap-2">
            <NavigationMenuLink
              className="flex gap-2 py-2 font-semibold hover:underline hover:text-blue-600"
              key="home"
              href="/">
              <HomeIcon />
              Home
            </NavigationMenuLink>
            {sortedMenuList.map((item) => (
              <NavigationMenuLink
                className="flex gap-2 py-2 font-semibold hover:underline hover:text-blue-600"
                key={item.id}
                href={item.path}>
                {item.icon && <item.icon />}
                {item.name}
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
