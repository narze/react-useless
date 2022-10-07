export interface IQueryObject {
  [key: string]: string | number | Date
}

export default class QueryString {
  constructor(private readonly queryObject: IQueryObject) {}

  toQueryString(): string {
    return (
      "?" +
      Object.keys(this.queryObject)
        .map(
          (key) =>
            `${key}=${
              this.queryObject[key] instanceof Date
                ? (this.queryObject[key] as Date).toISOString()
                : this.queryObject[key]
            }`
        )
        .join("&")
    )
  }
}
