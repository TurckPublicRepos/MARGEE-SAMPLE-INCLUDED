import '../../hmi_runtime'; 

export class TOGGLE implements ELEMENT {
  readonly root = create('div');
  readonly label = this.root.appendChild(create('div'));
  readonly input = this.root.appendChild(create('input').set({ type: 'checkbox' }));

  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _value = HMI_RUNTIME.get(value);
    this.input.checked = Boolean(_value);

    const _disabled = HMI_RUNTIME.get(disabled);
    this.input.disabled = Boolean(_disabled);

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    this.label.innerHTML = _content;

    this.input.addEventListener('change', () => HMI_RUNTIME.set(value, this.input.checked ? 1 : 0));
  }
}