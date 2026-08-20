export class BADGE_BLACK implements ELEMENT {
  readonly root = create('div').addClasses('BADGE');
  render(
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    muted?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    const _ghost = HMI_RUNTIME.get(ghost);
    const _muted = HMI_RUNTIME.get(muted);

    this.root.innerHTML = _swapContent ? `<div>${_content}</div>${_svg}` : `${_svg}<div>${_content}</div>`;
    if (_ghost) this.root.classList.add('ghost');
    if (_muted) this.root.classList.add('muted');
  }
}

export class BADGE_PRIMARY implements ELEMENT {
  readonly root = create('div').addClasses('BADGE');
  render(
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    muted?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    const _ghost = HMI_RUNTIME.get(ghost);
    const _muted = HMI_RUNTIME.get(muted);

    this.root.innerHTML = _swapContent ? `<div>${_content}</div>${_svg}` : `${_svg}<div>${_content}</div>`;
    if (_ghost) this.root.classList.add('ghost');
    if (_muted) this.root.classList.add('muted');
  }
}

export class BADGE_SECONDARY implements ELEMENT {
  readonly root = create('div').addClasses('BADGE');
  render(
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    muted?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    const _ghost = HMI_RUNTIME.get(ghost);
    const _muted = HMI_RUNTIME.get(muted);

    this.root.innerHTML = _swapContent ? `<div>${_content}</div>${_svg}` : `${_svg}<div>${_content}</div>`;
    if (_ghost) this.root.classList.add('ghost');
    if (_muted) this.root.classList.add('muted');
  }
}

export class BADGE_TERTIARY implements ELEMENT {
  readonly root = create('div').addClasses('BADGE');
  render(
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    muted?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    const _ghost = HMI_RUNTIME.get(ghost);
    const _muted = HMI_RUNTIME.get(muted);

    this.root.innerHTML = _swapContent ? `<div>${_content}</div>${_svg}` : `${_svg}<div>${_content}</div>`;
    if (_ghost) this.root.classList.add('ghost');
    if (_muted) this.root.classList.add('muted');
  }
}

export class BADGE_DANGER implements ELEMENT {
  readonly root = create('div').addClasses('BADGE');
  render(
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    muted?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    const _ghost = HMI_RUNTIME.get(ghost);
    const _muted = HMI_RUNTIME.get(muted);

    this.root.innerHTML = _swapContent ? `<div>${_content}</div>${_svg}` : `${_svg}<div>${_content}</div>`;
    if (_ghost) this.root.classList.add('ghost');
    if (_muted) this.root.classList.add('muted');
  }
}

export class BADGE_INFORMATION implements ELEMENT {
  readonly root = create('div').addClasses('BADGE');
  render(
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    muted?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    const _ghost = HMI_RUNTIME.get(ghost);
    const _muted = HMI_RUNTIME.get(muted);

    this.root.innerHTML = _swapContent ? `<div>${_content}</div>${_svg}` : `${_svg}<div>${_content}</div>`;
    if (_ghost) this.root.classList.add('ghost');
    if (_muted) this.root.classList.add('muted');
  }
}

export class BADGE_WARNING implements ELEMENT {
  readonly root = create('div').addClasses('BADGE');
  render(
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    muted?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    const _ghost = HMI_RUNTIME.get(ghost);
    const _muted = HMI_RUNTIME.get(muted);

    this.root.innerHTML = _swapContent ? `<div>${_content}</div>${_svg}` : `${_svg}<div>${_content}</div>`;
    if (_ghost) this.root.classList.add('ghost');
    if (_muted) this.root.classList.add('muted');
  }
}

export class BADGE_SUCCESS implements ELEMENT {
  readonly root = create('div').addClasses('BADGE');
  render(
    content: ARG_CONST_ARRAY_USINT,
    svg?: ARG_CONST_ARRAY_USINT,
    swapContent?: ARG_CONST_USINT,
    ghost?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    muted?: ARG_VAL_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _content = HMI_RUNTIME.get(content, 'formattedString');
    const _svg = HMI_RUNTIME.getIMGContent(svg) ?? '';
    const _swapContent = HMI_RUNTIME.get(swapContent) ?? 0;
    const _ghost = HMI_RUNTIME.get(ghost);
    const _muted = HMI_RUNTIME.get(muted);

    this.root.innerHTML = _swapContent ? `<div>${_content}</div>${_svg}` : `${_svg}<div>${_content}</div>`;
    if (_ghost) this.root.classList.add('ghost');
    if (_muted) this.root.classList.add('muted');
  }
}