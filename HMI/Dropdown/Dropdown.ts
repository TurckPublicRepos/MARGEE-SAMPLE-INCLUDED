export class DROPDOWN implements ELEMENT {
  readonly root = create('div');
  readonly label = this.root.appendChild(create('div'));
  readonly input = this.root.appendChild(create('select'));

  render(
    value: ARG_VAL_NUMERICAL,
    label: ARG_CONST_ARRAY_USINT,
    numbers: ARG_CONST_ARRAY_NUMERICAL,
    strings: ARG_CONST_ARRAY_USINT, // Seperated by '|' character
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _value = HMI_RUNTIME.get(value, 'number') ?? 0;
    const _numbers = HMI_RUNTIME.get(numbers);
    this.input.selectedIndex = _numbers.indexOf(_value);

    const _disabled = HMI_RUNTIME.get(disabled);
    this.input.disabled = Boolean(_disabled);

    if (HMI_RUNTIME.isRendered) return;

    const _label = HMI_RUNTIME.get(label, 'formattedString');
    this.label.innerHTML = _label;

    const _strings = HMI_RUNTIME.get(strings, 'string').split('|');
    for (const [i, num] of _numbers.entries()) {

      const option = this.input.appendChild(create('option'));
      option.innerHTML = _strings[i] ?? i;
      option.value = String(num);
    }

    this.input.addEventListener('change', () => HMI_RUNTIME.set(value, Number(this.input.value)));
  }
}