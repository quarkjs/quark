const connected = (target: object, propertyKey: PropertyKey, attributes: PropertyDecorator) =>
  Reflect.defineProperty(target, 'connectedCallback', {
    value () {
      this[propertyKey]()
      return this
    }
  })

export default connected
