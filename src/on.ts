const on = new Proxy({}, {
  get: (_: object, event: keyof WindowEventMap) =>
    (query: string) =>
      (target: any, propertyKey: PropertyKey) => {
        const method = target.prototype.connectedCallback
        Object.defineProperty(target, 'connectedCallback', {
          value () {
            this.addEventListener(event, (e) => (e.target.matches(query) && Reflect.apply(this[propertyKey], this, [e])))
            return method?.call(this)
          }
        })
      }
})

export default on
