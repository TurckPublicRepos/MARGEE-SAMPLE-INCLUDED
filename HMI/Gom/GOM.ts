import '../../hmi_runtime'; 

export class GOM_STRING implements ELEMENT {
  readonly root = create('div').addClasses('GOM');
  readonly label = this.root.appendChild(create('div'));
  readonly value = this.root.appendChild(create('div')).set({ innerHTML: 'loading...' });

  render(
    uid: ARG_CONST_NUMERICAL,
    inst: ARG_CONST_NUMERICAL,
    text?: ARG_CONST_ARRAY_USINT,
  ): void {
    if (HMI_RUNTIME.isRendered) return; 

    const _uid = HMI_RUNTIME.get(uid);
    const _inst = HMI_RUNTIME.get(inst);
    const _text = HMI_RUNTIME.get(text, 'formattedString') ?? '';

    this.label.innerHTML = _text;

    HMI_RUNTIME.getGomCB(_uid, _inst, (value) => {
      this.value.innerHTML = bufferToString(value, true);
    });
  }
}

export class GOM_INT implements ELEMENT {
  readonly root = create('div').addClasses('GOM');
  readonly label = this.root.appendChild(create('div'));
  readonly value = this.root.appendChild(create('div')).set({ innerHTML: 'loading...' });

  render(
    uid: ARG_CONST_NUMERICAL,
    inst: ARG_CONST_NUMERICAL,
    text?: ARG_CONST_ARRAY_USINT,
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _uid = HMI_RUNTIME.get(uid);
    const _inst = HMI_RUNTIME.get(inst);
    const _text = HMI_RUNTIME.get(text, 'formattedString') ?? '';

    this.label.innerHTML = _text;

    HMI_RUNTIME.getGomCB(_uid, _inst, (value) => {
      this.value.innerHTML = `${fromBytesInt32(value)}`;
    });
  }
}
export class GOM_UINT implements ELEMENT {
  readonly root = create('div').addClasses('GOM');
  readonly label = this.root.appendChild(create('div'));
  readonly value = this.root.appendChild(create('div')).set({ innerHTML: 'loading...' });

  render(
    uid: ARG_CONST_NUMERICAL,
    inst: ARG_CONST_NUMERICAL,
    text?: ARG_CONST_ARRAY_USINT,
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _uid = HMI_RUNTIME.get(uid);
    const _inst = HMI_RUNTIME.get(inst);
    const _text = HMI_RUNTIME.get(text, 'formattedString') ?? '';

    this.label.innerHTML = _text;
 
    HMI_RUNTIME.getGomCB(_uid, _inst, (value) => {
      this.value.innerHTML = `${fromBytesUint32(value)}`;
    });
  }
}

export class GOM_REAL implements ELEMENT {
  readonly root = create('div').addClasses('GOM');
  readonly label = this.root.appendChild(create('div'));
  readonly value = this.root.appendChild(create('div')).set({ innerHTML: 'loading...' });

  render(
    uid: ARG_CONST_NUMERICAL,
    inst: ARG_CONST_NUMERICAL,
    text?: ARG_CONST_ARRAY_USINT,
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _uid = HMI_RUNTIME.get(uid);
    const _inst = HMI_RUNTIME.get(inst);
    const _text = HMI_RUNTIME.get(text, 'formattedString') ?? '';

    this.label.innerHTML = _text;

    HMI_RUNTIME.getGomCB(_uid, _inst, (value) => {
      this.value.innerHTML = `${fromBytesFloat(value)}`;
    });
  }
}

export class GOM_VERSION implements ELEMENT {
  readonly root = create('div').addClasses('GOM');
  readonly label = this.root.appendChild(create('div'));
  readonly value = this.root.appendChild(create('div')).set({ innerHTML: 'loading...' });

  render(
    uid: ARG_CONST_NUMERICAL,
    inst: ARG_CONST_NUMERICAL,
    text?: ARG_CONST_ARRAY_USINT,
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _uid = HMI_RUNTIME.get(uid);
    const _inst = HMI_RUNTIME.get(inst);
    const _text = HMI_RUNTIME.get(text, 'formattedString') ?? '';

    this.label.innerHTML = _text;

    HMI_RUNTIME.getGomCB(_uid, _inst, (value) => {
      this.value.innerHTML = `V${value[3]}.${value[2]}.${value[1]}.${value[0]}`;
    });
  }
}

export class GOM_MAC implements ELEMENT {
  readonly root = create('div').addClasses('GOM');
  readonly label = this.root.appendChild(create('div'));
  readonly value = this.root.appendChild(create('div')).set({ innerHTML: 'loading...' });

  render(
    uid: ARG_CONST_NUMERICAL,
    inst: ARG_CONST_NUMERICAL,
    text?: ARG_CONST_ARRAY_USINT,
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _uid = HMI_RUNTIME.get(uid);
    const _inst = HMI_RUNTIME.get(inst);
    const _text = HMI_RUNTIME.get(text, 'formattedString') ?? '';

    this.label.innerHTML = _text;

    HMI_RUNTIME.getGomCB(_uid, _inst, (value) => {
      if (value.byteLength < 6) {
        this.value.innerHTML = `INVALID`;
        return;
      }
      
      this.value.innerHTML = '';
      for (let i = 0; i < 6; i++) this.value.innerHTML += value[i].toString(16).padStart(2, '0').toUpperCase() + (i < 5 ? ':' : '');
    });
  }
}


export class GOM_IP implements ELEMENT {
  readonly root = create('div').addClasses('GOM');
  readonly label = this.root.appendChild(create('div'));
  readonly value = this.root.appendChild(create('div')).set({ innerHTML: 'loading...' });

  render(
    uid: ARG_CONST_NUMERICAL,
    inst: ARG_CONST_NUMERICAL,
    text?: ARG_CONST_ARRAY_USINT,
  ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _uid = HMI_RUNTIME.get(uid);
    const _inst = HMI_RUNTIME.get(inst);
    const _text = HMI_RUNTIME.get(text, 'formattedString') ?? '';

    this.label.innerHTML = _text;

    HMI_RUNTIME.getGomCB(_uid, _inst, (value) => {
      if (value.byteLength < 4) {
        this.value.innerHTML = `INVALID`;
        return;
      }
      
      this.value.innerHTML = '';
      for (let i = 3; i >= 0; i--) this.value.innerHTML += value[i] + (i > 0 ? '.' : '');
    });
  }
}