import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { menuList } from '@/lib/menuList';

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center font-semibold text-md">Menu</NavigationMenuTrigger>
          <NavigationMenuContent className="px-10 py-3 gap-2">
            {menuList.map((item) => (
              <NavigationMenuLink
                className="flex flex-col py-2 font-semibold hover:underline hover:text-blue-600"
                key={item.id}
                href={item.path}>
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
