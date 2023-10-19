type Options = {
  extends?: string;
  shadow?: 'open' | 'close';
}

const define = (name: string, options?: Options) =>
  (constructor: CustomElementConstructor) =>
    customElements.define(name, constructor, options)

export default define
