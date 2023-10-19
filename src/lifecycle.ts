enum Lifecycle {
  connected = 'connected',
  disconnected = 'disconnected',
  adopted = 'adopted'
}

const hook = (event: Lifecycle) =>
  (target: object, propertyKey: PropertyKey) =>
    Reflect.defineProperty(target, `${event}Callback`, {
      value () {
        this[propertyKey]()
        return this
      }
    })

export const connected = hook(Lifecycle.connected)
export const disconnected = hook(Lifecycle.disconnected)
export const adopted = hook(Lifecycle.adopted)
