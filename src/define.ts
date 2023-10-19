const define = (name: string, options?: ElementDefinitionOptions) =>
  (constructor: CustomElementConstructor) =>
    customElements.define(name, constructor, options)

export default define
