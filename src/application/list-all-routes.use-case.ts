import { LatLng } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

export class ListAllRoutesUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}
  async execute(): Promise<CreateRouteOutput> {
    // operar em cima das entidades
    const routes = await this.routeRepo.findAll();
    return routes.map((r) => r.toJSON());
  }
}

type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
}[];
