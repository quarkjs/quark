import Trait from './trait'

const attributeChanged = (name: string) =>
  (target: any, key: PropertyKey) => {
    target.observedAttributes = [].concat(name, ...target.observedAttributes)
    target[Trait.attribute] = { [name]: key, ...target[Trait.attribute] }

    Object.defineProperty(target, 'attributeChangedCallback', {
      value (name: string, oldValue: string, value: string) {
        this[target[Trait.attribute][name]]?.(value, oldValue)
      },
      writable: true
    })
  }

export default attributeChanged
