import { Route, RouteProps } from "../../domain/route.entity";
import { RouteInMemoryRepository } from "./route-in-memory.repository";

describe("RouteInMemoryRepository test", () => {
  it("Should insert a new route", async () => {
    const repository = new RouteInMemoryRepository();
    let routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 2, lng: 2 },
    };
    let route = new Route(routeProps);
    await repository.insert(route);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  });
});
