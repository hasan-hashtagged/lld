import type { MenuItem } from "./menuItem";

export interface Iterator {
  hasNext(): boolean;
  next(): MenuItem;
}
