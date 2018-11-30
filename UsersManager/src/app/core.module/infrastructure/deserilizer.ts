

export class Deserializer
{
  static deserialize<T>(dest: T, src: Object) {
    var destProperties = Object.getOwnPropertyNames(dest);
    destProperties.forEach(prop => {
      if (Deserializer.isPrimitiveType(typeof dest[prop])) {
        dest[prop] = src[prop];
      }
    });
    return dest;
  }

  private static isPrimitiveType(type: string): boolean {
    return type === 'string' || type === 'number' || type === 'boolean';
  }

  private static isDate(data: Object): boolean {
    return data.constructor.name === "Date";
  }
}

// "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function
