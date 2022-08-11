import { Route } from "../../domain/route.entity";
import { RouteRepositoryInterface } from "../../domain/route.repository";

export class RouteInMemoryRepository implements RouteRepositoryInterface {
  items: Route[] = [];
  async findAll(): Promise<Route[]> {
    return this.items;
  }
  async insert(route: Route): Promise<void> {
    this.items.push(route);
  }
}
