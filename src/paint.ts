const paint = (target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor) => {
  const method = attributes.value

  Object.defineProperty(target, '__paint__', {
    value () {
      return this[propertyKey]()
    }
  })

  Object.assign(attributes, {
    value (this: HTMLElement, ...args: any[]): string {
      const template: string = Reflect.apply(method, this, args)
      requestAnimationFrame(() => {
        this.innerHTML = template
      })
      return template
    }
  })
}

export default paint
