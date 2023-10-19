const paint = (_target: object, _propertyKey: PropertyKey, attributes: PropertyDescriptor) => {
  const method = attributes.value
  Object.assign(attributes, {
    value (this:HTMLElement): String {
      this.innerHTML = ''
      this.innerHTML = Reflect.apply(method, this, [])
      return this.innerHTML
    }
  })
}

export default paint
