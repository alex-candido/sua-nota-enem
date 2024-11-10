export default function AutoGetterSetter(): PropertyDecorator {
  return (target: any, propertyKey: string) => {
    const privateProp = `_${String(propertyKey)}`;

    Object.defineProperty(target, propertyKey, {
      get() {
        return this[privateProp];
      },
      set(value) {
        this[privateProp] = value;
      },
      enumerable: true,
      configurable: true,
    });
  };
}
