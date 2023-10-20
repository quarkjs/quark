const disconnected = (target: any, key: PropertyKey) => {
  const overridden = target.disconnectedCallback

  Object.defineProperty(target, 'disconnectedCallback', {
    value () {
      overridden?.call(this)
      return this[key]()
    },
    writable: true
  })
}

export default disconnected
