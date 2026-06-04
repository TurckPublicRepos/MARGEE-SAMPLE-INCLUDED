import '../../hmi_runtime'; 

export class H1 implements ELEMENT {
  readonly root = create('div');

  render(
    text: ARG_CONST_ARRAY_USINT,
    bold?: ARG_CONST_USINT
    ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _text = HMI_RUNTIME.get(text, 'string');
    const _bold = HMI_RUNTIME.get(bold);

    this.root.innerHTML = _text;
    if (_bold) this.root.style.fontWeight = 'bold';
  }
}

export class H2 implements ELEMENT {
  readonly root = create('div');

  render(
    text: ARG_CONST_ARRAY_USINT,
    bold?: ARG_CONST_USINT
    ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _text = HMI_RUNTIME.get(text, 'string');
    const _bold = HMI_RUNTIME.get(bold);

    this.root.innerHTML = _text;
    if (_bold) this.root.style.fontWeight = 'bold';
  }
}

export class H3 implements ELEMENT {
  readonly root = create('div');

  render(
    text: ARG_CONST_ARRAY_USINT,
    bold?: ARG_CONST_USINT
    ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _text = HMI_RUNTIME.get(text, 'string');
    const _bold = HMI_RUNTIME.get(bold);

    this.root.innerHTML = _text;
    if (_bold) this.root.style.fontWeight = 'bold';
  }
}

export class H4 implements ELEMENT {
  readonly root = create('div');

  render(
    text: ARG_CONST_ARRAY_USINT,
    bold?: ARG_CONST_USINT
    ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _text = HMI_RUNTIME.get(text, 'string');
    const _bold = HMI_RUNTIME.get(bold);

    this.root.innerHTML = _text;
    if (_bold) this.root.style.fontWeight = 'bold';
  }
}

export class H5 implements ELEMENT {
  readonly root = create('div');

  render(
    text: ARG_CONST_ARRAY_USINT,
    bold?: ARG_CONST_USINT
    ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _text = HMI_RUNTIME.get(text, 'string');
    const _bold = HMI_RUNTIME.get(bold);

    this.root.innerHTML = _text;
    if (_bold) this.root.style.fontWeight = 'bold';
  }
}

export class SUBCOPY implements ELEMENT {
  readonly root = create('div');

  render(
    text: ARG_CONST_ARRAY_USINT,
    ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _text = HMI_RUNTIME.get(text, 'string');

    this.root.innerHTML = _text;
  }
} 

export class TEXT implements ELEMENT {
  readonly root = create('div');

  render(
    text: ARG_CONST_ARRAY_USINT,
    size?: ARG_CONST_USINT, // 0: x-small, 1: small, 2: normal (default), 3: large
    weight?: ARG_CONST_USINT, //0: light, 1: normal (default), 2: bold
    ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _text = HMI_RUNTIME.get(text, 'string');
    const _size = HMI_RUNTIME.get(size);
    const _weight = HMI_RUNTIME.get(weight);

    this.root.innerHTML = _text;
    switch (_weight) {
      case 0: this.root.style.fontWeight = 'lighter'; break;
      case 2: this.root.style.fontWeight = 'bold'; break;
      default: this.root.style.fontWeight = 'normal'; break;
    }
    switch (_size) {
      case 0: this.root.addClasses('text-xs'); break;
      case 1: this.root.addClasses('text-sm'); break;
      case 3: this.root.addClasses('text-lg'); break;
      default: this.root.addClasses('text-nm'); break;
    }
  }
}

export class TEXT_MONOSPACE implements ELEMENT {
  readonly root = create('div');

  render(
    text: ARG_CONST_ARRAY_USINT,
    size?: ARG_CONST_USINT, // 0: x-small, 1: small, 2: normal (default), 3: large
    weight?: ARG_CONST_USINT, //0: light, 1: normal (default), 2: bold
    ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _text = HMI_RUNTIME.get(text, 'string');
    const _size = HMI_RUNTIME.get(size);
    const _weight = HMI_RUNTIME.get(weight);

    this.root.innerHTML = _text;
    switch (_weight) {
      case 0: this.root.style.fontWeight = 'lighter'; break;
      case 2: this.root.style.fontWeight = 'bold'; break;
      default: this.root.style.fontWeight = 'normal'; break;
    }
    switch (_size) {
      case 0: this.root.addClasses('text-xs'); break;
      case 1: this.root.addClasses('text-sm'); break;
      case 3: this.root.addClasses('text-lg'); break;
      default: this.root.addClasses('text-nm'); break;
    }
  }
}