import { Menu } from "./menu";
import { MenuComponent } from "./menuComponent";
import { MenuItem } from "./menuItem";
import { Waitress } from "./waitress";

function prepareMenu(): MenuComponent {
  const dinerMenu = new Menu('Diner Menu', 'Apt for lunch and Dinner');
  const breakfastMenu = new Menu('BreakFast Menu', 'Pancakes and Pancakes!!!');
  const dessertMenu = new Menu('Desserts', 'To all the sweet-tooth people!!!');
  const allMenus = new Menu('All Menus', 'Read and Ravish!!!');
  allMenus.add(dinerMenu);
  allMenus.add(breakfastMenu);
  allMenus.add(dessertMenu);
  const jerky = new MenuItem('Beef Jerky', 'Juicy beef tenderloin', false, '$20');
  const VeggieDelight = new MenuItem('Veggie Delight', 'Indian curry with bell pepper, spuds, and tomato', true, '$10');
  const bananalicious = new MenuItem('bananalicious', 'Banoffee bancakes with bananas on side', true, '$2');
  const massGainer = new MenuItem('Mass Gainer', 'Oatmeal pancakes with beacons', false, '$7');
  const tiramisu = new MenuItem('Tiramisu', 'Delicious chocolate laced tiramisu', true, '$15');
  dinerMenu.add(jerky);
  dinerMenu.add(VeggieDelight);
  breakfastMenu.add(bananalicious);
  breakfastMenu.add(massGainer);
  dessertMenu.add(tiramisu);
  return allMenus;
}

function tester() {
  const allMenus: MenuComponent = prepareMenu();

  const linda = new Waitress(allMenus);
  linda.print();
}

tester();
