const repaint = (target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor) => {
  const method = attributes.value

  Object.assign(attributes, {
    value (this: HTMLElement, ...args: any[]) {
      setTimeout(() => this['trait'](), 1)
      return Reflect.apply(method, this, args)
    }
  })
}

export default repaint
