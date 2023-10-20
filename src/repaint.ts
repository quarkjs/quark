import Trait from './trait'

const repaint = (_target: any, _key: PropertyKey, attributes: PropertyDescriptor) => {
  const overridden = attributes.value

  Object.assign(attributes, {
    value (...args: any[]) {
      setTimeout(() => this[Trait.paint]?.(), 0)
      return overridden.call(this, ...args)
    }
  })
}

export default repaint
