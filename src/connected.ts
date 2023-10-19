const connected = (target: object, propertyKey: PropertyKey) => {
  Object.defineProperty(target, 'connectedCallback', {
    value () {
      return this[propertyKey]()
    }
  })
}

export default connected
