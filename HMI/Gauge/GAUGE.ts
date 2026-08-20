export class GAUGE_PRIMARY implements ELEMENT {
  readonly root = create('div').addClasses('GAUGE');
  readonly title = this.root.appendChild(create('div'));
  readonly svg = this.root.appendChild(create('div'));

  render(
    value: ARG_VAL_NUMERICAL,
    min: ARG_CONST_NUMERICAL, 
    max: ARG_CONST_NUMERICAL,
    title: ARG_CONST_ARRAY_USINT,
  ) {
    const _title = HMI_RUNTIME.get(title, 'formattedString'); 
    const _value = HMI_RUNTIME.get(value);
    const _min = HMI_RUNTIME.get(min); 
    const _max = HMI_RUNTIME.get(max);
    const _progress = (_value + Math.abs(_min)) / (_max + Math.abs(_min)) * 2 * 50 * Math.PI;

    this.title.innerHTML = _title;
    this.svg.innerHTML = `
<svg viewBox="0 0 110 110" width="100%">
  <circle
    r="50"
    cx="50%"
    cy="50%"
    stroke="var(--color-primary-10)"
    stroke-width="10"
    fill="none"
  /> 
  <circle 
    style="transform-origin: 50% 50%; transform: rotate(-90deg); transition: stroke-dasharray 0.25s ease;"
    r="50"
    cx="50%"
    cy="50%"
    stroke="var(--color-primary)"
    stroke-width="10"
    fill="none"
    stroke-dasharray="${_progress}, 314"
  />
</svg>
`;
  }
}

export class GAUGE_SECONDARY implements ELEMENT {
  readonly root = create('div').addClasses('GAUGE');
  readonly title = this.root.appendChild(create('div'));
  readonly svg = this.root.appendChild(create('div'));

  render(
    value: ARG_VAL_NUMERICAL,
    min: ARG_CONST_NUMERICAL, 
    max: ARG_CONST_NUMERICAL,
    title: ARG_CONST_ARRAY_USINT,
  ) {
    const _title = HMI_RUNTIME.get(title, 'formattedString'); 
    const _value = HMI_RUNTIME.get(value);
    const _min = HMI_RUNTIME.get(min); 
    const _max = HMI_RUNTIME.get(max);
    const _progress = (_value + Math.abs(_min)) / (_max + Math.abs(_min)) * 2 * 50 * Math.PI;

    this.title.innerHTML = _title;
    this.svg.innerHTML = `
<svg viewBox="0 0 110 110" width="100%">
  <circle
    r="50"
    cx="50%"
    cy="50%"
    stroke="var(--color-secondary-10)"
    stroke-width="10"
    fill="none"
  /> 
  <circle 
    style="transform-origin: 50% 50%; transform: rotate(-90deg); transition: stroke-dasharray 0.25s ease;"
    r="50"
    cx="50%"
    cy="50%"
    stroke="var(--color-secondary)"
    stroke-width="10"
    fill="none"
    stroke-dasharray="${_progress}, 314"
  />
</svg>
`;
  }
}

export class GAUGE_TERTIARY implements ELEMENT {
  readonly root = create('div').addClasses('GAUGE');
  readonly title = this.root.appendChild(create('div'));
  readonly svg = this.root.appendChild(create('div'));

  render(
    value: ARG_VAL_NUMERICAL,
    min: ARG_CONST_NUMERICAL, 
    max: ARG_CONST_NUMERICAL,
    title: ARG_CONST_ARRAY_USINT,
  ) {
    const _title = HMI_RUNTIME.get(title, 'formattedString'); 
    const _value = HMI_RUNTIME.get(value);
    const _min = HMI_RUNTIME.get(min); 
    const _max = HMI_RUNTIME.get(max);
    const _progress = (_value + Math.abs(_min)) / (_max + Math.abs(_min)) * 2 * 50 * Math.PI;

    this.title.innerHTML = _title;
    this.svg.innerHTML = `
<svg viewBox="0 0 110 110" width="100%">
  <circle
    r="50"
    cx="50%"
    cy="50%"
    stroke="var(--color-tertiary-10)"
    stroke-width="10"
    fill="none"
  /> 
  <circle 
    style="transform-origin: 50% 50%; transform: rotate(-90deg); transition: stroke-dasharray 0.25s ease;"
    r="50"
    cx="50%"
    cy="50%"
    stroke="var(--color-tertiary)"
    stroke-width="10"
    fill="none"
    stroke-dasharray="${_progress}, 314"
  />
</svg>
`;
  }
}

export class BAR_PRIMARY implements ELEMENT {
  readonly root = create('div').addClasses('BAR');
  readonly title = this.root.appendChild(create('div'));
  readonly svg = this.root.appendChild(create('div'));

  render(
    value: ARG_VAL_NUMERICAL | ARG_CONST_NUMERICAL,
    min: ARG_CONST_NUMERICAL,
    max: ARG_CONST_NUMERICAL,
    title: ARG_CONST_ARRAY_USINT,
  ) {
    const _title = HMI_RUNTIME.get(title, 'formattedString');
    const _value = HMI_RUNTIME.get(value);
    const _min = HMI_RUNTIME.get(min);
    const _max = HMI_RUNTIME.get(max);
    const _progress = Math.min((_value - _min) / (_max - _min) * 100, 100);

    this.title.innerHTML = _title;
    this.svg.innerHTML = `
  <svg viewBox="0 0 100 32" width="100%" height="32" preserveAspectRatio="none">
    <!-- Background bar -->
    <rect
    x="0"
    y="0"
    width="100%"
    height="32"
    fill="var(--color-primary-10)"
    />
    
    <!-- Foreground progress bar -->
    <rect style="transition: width 0.25s ease;"
    x="0"
    y="0"
    width="${_progress}"
    height="32"
    fill="var(--color-primary)"
    />
  </svg>
  `;
  }
}

export class BAR_SECONDARY implements ELEMENT {
  readonly root = create('div').addClasses('BAR');
  readonly title = this.root.appendChild(create('div'));
  readonly svg = this.root.appendChild(create('div'));

  render(
    value: ARG_VAL_NUMERICAL | ARG_CONST_NUMERICAL,
    min: ARG_CONST_NUMERICAL,
    max: ARG_CONST_NUMERICAL,
    title: ARG_CONST_ARRAY_USINT,
  ) {
    const _title = HMI_RUNTIME.get(title, 'formattedString');
    const _value = HMI_RUNTIME.get(value);
    const _min = HMI_RUNTIME.get(min);
    const _max = HMI_RUNTIME.get(max);
    const _progress = Math.min((_value - _min) / (_max - _min) * 100, 100);

    this.title.innerHTML = _title;
    this.svg.innerHTML = `
  <svg viewBox="0 0 100 32" width="100%" height="32" preserveAspectRatio="none">
    <!-- Background bar -->
    <rect
    x="0"
    y="0"
    width="100%"
    height="32"
    fill="var(--color-secondary-10)"
    />
    
    <!-- Foreground progress bar -->
    <rect style="transition: width 0.25s ease;"
    x="0"
    y="0"
    width="${_progress}"
    height="32"
    fill="var(--color-secondary)"
    />
  </svg>
  `;
  }
}

export class BAR_TERTIARY implements ELEMENT {
  readonly root = create('div').addClasses('BAR');
  readonly title = this.root.appendChild(create('div'));
  readonly svg = this.root.appendChild(create('div'));

  render(
    value: ARG_VAL_NUMERICAL | ARG_CONST_NUMERICAL,
    min: ARG_CONST_NUMERICAL,
    max: ARG_CONST_NUMERICAL,
    title: ARG_CONST_ARRAY_USINT,
  ) {
    const _title = HMI_RUNTIME.get(title, 'formattedString');
    const _value = HMI_RUNTIME.get(value);
    const _min = HMI_RUNTIME.get(min);
    const _max = HMI_RUNTIME.get(max);
    const _progress = Math.min((_value - _min) / (_max - _min) * 100, 100);

    this.title.innerHTML = _title;
    this.svg.innerHTML = `
  <svg viewBox="0 0 100 32" width="100%" height="32" preserveAspectRatio="none">
    <!-- Background bar -->
    <rect
    x="0"
    y="0"
    width="100%"
    height="32"
    fill="var(--color-tertiary-10)"
    />
    
    <!-- Foreground progress bar -->
    <rect style="transition: width 0.25s ease;"
    x="0"
    y="0"
    width="${_progress}"
    height="32"
    fill="var(--color-tertiary)"
    />
  </svg>
  `;
  }
}