import '../../hmi_runtime'; 

export class FORM implements ELEMENT {
  readonly root = create('div');
  readonly label = this.root.appendChild(create('div'));
  readonly input = this.root.appendChild(create('input').set({ type: 'number' }));

  render(
    value: ARG_VAL_NUMERICAL,
    label: ARG_CONST_ARRAY_USINT,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    if (document.activeElement !== this.input) {
      const _value = HMI_RUNTIME.get(value, 'number') ?? 0;
      this.input.value = `${_value}`;
    }

    const _disabled = HMI_RUNTIME.get(disabled);
    this.input.disabled = Boolean(_disabled);

    if (HMI_RUNTIME.isRendered) return;

    const _label = HMI_RUNTIME.get(label, 'formattedString');
    this.label.innerHTML = _label;

    this.input.addEventListener('change', () => HMI_RUNTIME.set(value, Number(this.input.value)));
  }
}