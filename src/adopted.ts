const adopted = (target: any, key: PropertyKey) => {
  const overridden = target.adoptedCallback

  Object.defineProperty(target, 'adoptedCallback', {
    value () {
      overridden?.call(this)
      return this[key]()
    },
    writable: true
  })
}

export default adopted
