import '../../hmi_runtime'; 

export class BUTTON_MASSIVE_PRIMARY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_PRIMARY', "BUTTON_SIZE_MASSIVE");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_LARGE_PRIMARY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_PRIMARY', "BUTTON_SIZE_LARGE");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_NORMAL_PRIMARY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_PRIMARY', "BUTTON_SIZE_NORMAL");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_SMALL_PRIMARY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_PRIMARY', "BUTTON_SIZE_SMALL");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}


export class BUTTON_MASSIVE_SECONDARY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_SECONDARY', "BUTTON_SIZE_MASSIVE");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_LARGE_SECONDARY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_SECONDARY', "BUTTON_SIZE_LARGE");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_NORMAL_SECONDARY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_SECONDARY', "BUTTON_SIZE_NORMAL");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_SMALL_SECONDARY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_SECONDARY', "BUTTON_SIZE_SMALL");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}


export class BUTTON_MASSIVE_BLACK implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_BLACK', "BUTTON_SIZE_MASSIVE");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_LARGE_BLACK implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_BLACK', "BUTTON_SIZE_LARGE");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_NORMAL_BLACK implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_BLACK', "BUTTON_SIZE_NORMAL");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_SMALL_BLACK implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_BLACK', "BUTTON_SIZE_SMALL");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}


export class BUTTON_MASSIVE_DARK_GRAY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_DARK_GRAY', "BUTTON_SIZE_MASSIVE");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_LARGE_DARK_GRAY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_DARK_GRAY', "BUTTON_SIZE_LARGE");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_NORMAL_DARK_GRAY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_DARK_GRAY', "BUTTON_SIZE_NORMAL");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_SMALL_DARK_GRAY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_DARK_GRAY', "BUTTON_SIZE_SMALL");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}


export class BUTTON_MASSIVE_LIGHT_GRAY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_LIGHT_GRAY', "BUTTON_SIZE_MASSIVE");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_LARGE_LIGHT_GRAY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_LIGHT_GRAY', "BUTTON_SIZE_LARGE");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_NORMAL_LIGHT_GRAY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_LIGHT_GRAY', "BUTTON_SIZE_NORMAL");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}

export class BUTTON_SMALL_LIGHT_GRAY implements ELEMENT {
  readonly root = create('button').addClasses('BUTTON_STYLE_LIGHT_GRAY', "BUTTON_SIZE_SMALL");
  render(
    value: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    setValue: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL | ARG_CONST_NUMERICAL,
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    disabled?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    const _disabled = HMI_RUNTIME.get(disabled) ?? 0;
    this.root.disabled = Boolean(_disabled);
  
    const _ghost = HMI_RUNTIME.get(ghost);
    if (_ghost) this.root.classList.add('ghost');
    else this.root.classList.remove('ghost');

    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    this.root.innerHTML = _swapContent ? `${_content}${_svg}` : `${_svg}${_content}`;

    this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue)));
  }
}