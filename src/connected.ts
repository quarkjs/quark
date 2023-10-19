const connected = (target: object, propertyKey: PropertyKey) =>
  Reflect.defineProperty(target, 'connectedCallback', {
    value () {
      return this[propertyKey]()
    }
  })

export default connected
