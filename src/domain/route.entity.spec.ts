import { LatLng, Route, RouteProps } from "./route.entity";

describe("Route Tests", () => {
  test("constructor", () => {
    let routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 2, lng: 2 },
    };
    let route = new Route(routeProps);
    expect(route.id).toBeDefined();
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });

    routeProps = {
      title: "Minha rota",
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 2, lng: 2 },
      points: [{ lat: 1, lng: 2 }],
    };
    route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
    });
  });

  test("Update title method", () => {
    const routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 2, lng: 2 },
    };
    const route = new Route(routeProps);
    route.updateTitle("Title updated");
    expect(route.title).toBe("Title updated");
  });

  test("Update position method", () => {
    const routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 2, lng: 2 },
    };
    const route = new Route(routeProps);
    const startPosition: LatLng = { lat: 10, lng: 10 };
    const endPosition: LatLng = { lat: 30, lng: 40 };
    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });
  test("Update points method", () => {
    const routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 2, lng: 2 },
    };
    const route = new Route(routeProps);
    const points: LatLng[] = [{ lat: 10, lng: 10 }];
    route.updatePoints(points);
    expect(route.points).toHaveLength(1);
    expect(route.points).toStrictEqual(points);
  });
});
