import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const menuItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center font-semibold text-md">
            Menu
          </NavigationMenuTrigger>
          <NavigationMenuContent className="px-10 py-3 gap-2">
            {menuItems.map((item) => (
              <NavigationMenuLink
                className="flex flex-col py-2 font-semibold hover:underline hover:text-blue-600"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}


export default NavMenu;