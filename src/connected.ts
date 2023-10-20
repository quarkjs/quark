const connected = (target: any, key: PropertyKey) => {
  const overridden = target.connectedCallback

  Object.defineProperty(target, 'connectedCallback', {
    value () {
      overridden?.call(this)
      return this[key]()
    },
    writable: true
  })
}

export default connected
