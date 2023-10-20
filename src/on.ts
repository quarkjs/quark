const on = new Proxy({}, {
  get: (_: object, event: keyof WindowEventMap) =>
    (query: string) =>
      (target: any, propertyKey: PropertyKey) => {
        const method = target.connectedCallback
        Object.defineProperty(target, 'connectedCallback', {
          value () {
            requestAnimationFrame(() => {
              this.addEventListener(event, (e) => (
                e.target.matches(query) && Reflect.apply(this[propertyKey], this, [e])
              ))
            })
            return method?.call(this)
          },
          writable: true
        })
      }
})

export default on
