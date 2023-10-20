import Trait from './trait'

const paint = (target: any, key: PropertyKey, attributes: PropertyDescriptor) => {
  const overridden = attributes.value

  Object.defineProperty(target, Trait.paint, {
    value () {
      return this[key]()
    }
  })

  Object.assign(attributes, {
    value (this: HTMLElement, ...args: any[]): string {
      const output: string = overridden.call(this, ...args)
      requestAnimationFrame(() => (this.innerHTML = output))
      return output
    }
  })
}

export default paint
