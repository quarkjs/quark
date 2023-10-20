const connected = (target: any, propertyKey: PropertyKey) => {
  const method = target.connectedCallback
  Object.defineProperty(target, 'connectedCallback', {
    value () {
      method?.call(this)
      return this[propertyKey]()
    }
  })
}

export default connected
