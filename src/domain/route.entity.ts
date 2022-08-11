import crypto from "crypto";
export type LatLng = { lat: number; lng: number };
export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};
export class Route {
  public readonly id: string;
  public props: Required<RouteProps>;

  constructor(props: RouteProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    //validacoes
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  updateTitle(title: string) {
    //validacoes
    this.title = title;
  }

  updatePoints(points: LatLng[]) {
    //validacoes
    this.points = points;
  }

  get title() {
    return this.props.title;
  }
  private set title(value: string) {
    this.props.title = value;
  }
  get startPosition() {
    return this.props.startPosition;
  }
  private set startPosition(value: LatLng) {
    this.props.startPosition = value;
  }
  get endPosition() {
    return this.props.endPosition;
  }
  private set endPosition(value: LatLng) {
    this.props.endPosition = value;
  }
  get points() {
    return this.props.points;
  }
  private set points(value: LatLng[]) {
    this.props.points = value;
  }

  toJSON() {
    return { id: this.id, ...this.props };
  }
}
