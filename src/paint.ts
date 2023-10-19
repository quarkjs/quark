const paint = (target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor) => {
  const method = attributes.value

  Object.defineProperty(target, '__paint__', {
    value () {
      return this[propertyKey]()
    }
  })

  Object.assign(attributes, {
    value (this:HTMLElement, ...args: any[]): String {
      this.innerHTML = ''
      this.innerHTML = Reflect.apply(method, this, args)
      return this.innerHTML
    }
  })
}

export default paint
