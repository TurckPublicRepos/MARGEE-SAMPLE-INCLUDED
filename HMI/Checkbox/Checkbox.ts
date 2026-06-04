import '../../hmi_runtime'; 

export class CHECKBOX implements ELEMENT {
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

    const checkmarkColor = `%23${getComputedStyle(document.documentElement).getPropertyValue('--color-primary').slice(1)}`;
    const image = HMI_RUNTIME.getIMGContent('checkbox.svg')?.replace('currentColor', checkmarkColor);
    this.input.style.backgroundImage = `url('data:image/svg+xml;utf8,${image}')`;

    this.input.addEventListener('change', () => HMI_RUNTIME.set(value, this.input.checked ? 1 : 0));
  }
}