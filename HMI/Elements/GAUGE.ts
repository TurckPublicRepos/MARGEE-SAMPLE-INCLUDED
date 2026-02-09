import '../../hmi_runtime';

export class HMI_GAUGE_CIRCLE implements RUNTIME_ELEMENT {
  readonly root = document.createElement('div');

  render(
    title: ARG_CONST_ARRAY_USINT,
    value: ARG_VAL_NUMERICAL,
    min: ARG_CONST_NUMERICAL,
    max: ARG_CONST_NUMERICAL
  ) {
    const _title = HMI_RUNTIME.get(title, 'formattedString');
    const _value = HMI_RUNTIME.get(value);
    const _min = HMI_RUNTIME.get(min);
    const _max = HMI_RUNTIME.get(max);
    const _progress = (_value + Math.abs(_min)) / (_max + Math.abs(_min)) * 943;

    this.root.innerHTML = `
<svg viewBox="0 0 350 350"style="padding: 5px;">
  <circle
    r="150"
    cx="50%"
    cy="50%"
    stroke="var(--color-dark-normal)"
    stroke-width="20"
    fill="none"
    stroke-dasharray="943, 943"
  /> 
  <circle 
    style="transform-origin: 50% 50%; transform: rotate(90deg); transition: stroke-dasharray 0.25s ease;"
    r="150"
    cx="50%"
    cy="50%"
    stroke="var(--color-secondary-light)"
    stroke-width="22"
    fill="none"
    stroke-dasharray="${_progress}, 943"
  />
  <text x="50%" y="45%" style="font-size: 30px;" fill="var(--color-dark-normal)" text-anchor="middle" dy=".3em">${_title}</text>
  <text x="50%" y="60%" style="font-size: 40px;" fill="var(--color-dark-normal)" text-anchor="middle" dy=".3em">${_value}</text>
</svg>
`;
  }
}

export class HMI_GAUGE_BAR implements RUNTIME_ELEMENT {
  readonly root = document.createElement('div');

  render(
    title: ARG_CONST_ARRAY_USINT,
    value: ARG_VAL_NUMERICAL,
    min: ARG_CONST_NUMERICAL,
    max: ARG_CONST_NUMERICAL
  ) {
    const _title = HMI_RUNTIME.get(title, 'formattedString');
    const _value = HMI_RUNTIME.get(value);
    const _min = HMI_RUNTIME.get(min);
    const _max = HMI_RUNTIME.get(max);
    const _progress = Math.min((_value - _min) / (_max - _min) * 350, 350);

    this.root.innerHTML = `
  <svg viewBox="0 0 350 200" style="padding: 15px;">
    <!-- Background bar -->
    <rect
    x="0"
    y="45"
    width="100%"
    height="30"
    fill="var(--color-dark-normal)"
    rx="15"
    ry="15" 
    />
    
    <!-- Foreground progress bar -->
    <rect style="transition: width 0.25s ease;"
    x="0"
    y="45"
    width="${_progress}"
    height="32"
    fill="var(--color-secondary-light)"
    rx="15"
    ry="15"
    />

    <!-- Title and value text -->
    <text x="50%" y="30" style="font-size: 30px;" fill="var(--color-dark-normal)" text-anchor="middle">${_title}</text>
    <text x="50%" y="110" style="font-size: 25px;" fill="var(--color-dark-normal)" text-anchor="middle">${_value}</text>
  </svg>
  `;
  }
}