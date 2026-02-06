import '../../hmi_runtime'; 

export class HMI_DISPLAY_GOM_STRING implements RUNTIME_ELEMENT {
  readonly p = document.createElement('p');
  readonly root = this.p;

  render(
    firstCall: boolean,
    uid: ARG_CONST_NUMERICAL,
    inst: ARG_CONST_NUMERICAL,
    txtBefore: ARG_CONST_ARRAY_USINT | undefined,
    txtAfter: ARG_CONST_ARRAY_USINT | undefined,
  ): void {
    const _uid = HMI_RUNTIME.get(uid);
    const _inst = HMI_RUNTIME.get(inst);
    const _txtBefore = HMI_RUNTIME.get(txtBefore, 'formattedString') ?? '';
    const _txtAfter = HMI_RUNTIME.get(txtAfter, 'formattedString') ?? '';

    if (firstCall) {
      this.p.innerHTML = `${_txtBefore}loading...${_txtAfter}`;

      HMI_RUNTIME.getGOMval(_uid, _inst, (value) => {
        this.p.innerHTML = `${_txtBefore}${HMI_RUNTIME.arrToString(value)}${_txtAfter}`;
      });
    }
  }
}

export class HMI_DISPLAY_GOM_INT implements RUNTIME_ELEMENT {
  readonly p = document.createElement('p');
  readonly root = this.p;

  render(
    firstCall: boolean,
    uid: ARG_CONST_NUMERICAL,
    inst: ARG_CONST_NUMERICAL,
    txtBefore: ARG_CONST_ARRAY_USINT | undefined,
    txtAfter: ARG_CONST_ARRAY_USINT | undefined,
  ): void {
    const _uid = HMI_RUNTIME.get(uid);
    const _inst = HMI_RUNTIME.get(inst);
    const _txtBefore = HMI_RUNTIME.get(txtBefore, 'formattedString') ?? '';
    const _txtAfter = HMI_RUNTIME.get(txtAfter, 'formattedString') ?? '';

    if (firstCall) {
      this.p.innerHTML = `${_txtBefore}loading...${_txtAfter}`;

      HMI_RUNTIME.getGOMval(_uid, _inst, (value) => {
        this.p.innerHTML = `${_txtBefore}${HMI_RUNTIME.fromBytesInt32(value)}${_txtAfter}`;
      });
    }
  }
}
export class HMI_DISPLAY_GOM_UINT implements RUNTIME_ELEMENT {
  readonly p = document.createElement('p');
  readonly root = this.p;

  render(
    firstCall: boolean,
    uid: ARG_CONST_NUMERICAL,
    inst: ARG_CONST_NUMERICAL,
    txtBefore: ARG_CONST_ARRAY_USINT | undefined,
    txtAfter: ARG_CONST_ARRAY_USINT | undefined,
  ): void {
    const _uid = HMI_RUNTIME.get(uid);
    const _inst = HMI_RUNTIME.get(inst);
    const _txtBefore = HMI_RUNTIME.get(txtBefore, 'formattedString') ?? '';
    const _txtAfter = HMI_RUNTIME.get(txtAfter, 'formattedString') ?? '';

    if (firstCall) {
      this.p.innerHTML = `${_txtBefore}loading...${_txtAfter}`;

      HMI_RUNTIME.getGOMval(_uid, _inst, (value) => {
        this.p.innerHTML = `${_txtBefore}${HMI_RUNTIME.fromBytesUint32(value)}${_txtAfter}`;
      });
    }
  }
}

export class HMI_DISPLAY_GOM_REAL implements RUNTIME_ELEMENT {
  readonly p = document.createElement('p');
  readonly root = this.p;

  render(
    firstCall: boolean,
    uid: ARG_CONST_NUMERICAL,
    inst: ARG_CONST_NUMERICAL,
    txtBefore: ARG_CONST_ARRAY_USINT | undefined,
    txtAfter: ARG_CONST_ARRAY_USINT | undefined,
  ): void {
    const _uid = HMI_RUNTIME.get(uid);
    const _inst = HMI_RUNTIME.get(inst);
    const _txtBefore = HMI_RUNTIME.get(txtBefore, 'formattedString') ?? '';
    const _txtAfter = HMI_RUNTIME.get(txtAfter, 'formattedString') ?? '';

    if (firstCall) {
      this.p.innerHTML = `${_txtBefore}loading...${_txtAfter}`;

      HMI_RUNTIME.getGOMval(_uid, _inst, (value) => {
        this.p.innerHTML = `${_txtBefore}${HMI_RUNTIME.fromBytesReal(value)}${_txtAfter}`;
      });
    }
  }
}

export class HMI_DISPLAY_GOM_VERSION implements RUNTIME_ELEMENT {
  readonly p = document.createElement('p');
  readonly root = this.p;

  render(
    firstCall: boolean,
    uid: ARG_CONST_NUMERICAL,
    inst: ARG_CONST_NUMERICAL,
    txtBefore: ARG_CONST_ARRAY_USINT | undefined,
    txtAfter: ARG_CONST_ARRAY_USINT | undefined,
  ): void {
    const _uid = HMI_RUNTIME.get(uid);
    const _inst = HMI_RUNTIME.get(inst);
    const _txtBefore = HMI_RUNTIME.get(txtBefore, 'formattedString') ?? '';
    const _txtAfter = HMI_RUNTIME.get(txtAfter, 'formattedString') ?? '';

    if (firstCall) {
      this.p.innerHTML = `${_txtBefore}loading...${_txtAfter}`;

      HMI_RUNTIME.getGOMval(_uid, _inst, (value) => {
        this.p.innerHTML = `${_txtBefore}${value[3]}.${value[2]}.${value[1]}.${value[0]}${_txtAfter}`;
      });
    }
  }
}

export class HMI_DISPLAY_GOM_MAC implements RUNTIME_ELEMENT {
  readonly p = document.createElement('p');
  readonly root = this.p;

  render(
    firstCall: boolean,
    uid: ARG_CONST_NUMERICAL,
    inst: ARG_CONST_NUMERICAL,
    txtBefore: ARG_CONST_ARRAY_USINT | undefined,
    txtAfter: ARG_CONST_ARRAY_USINT | undefined,
  ): void {
    const _uid = HMI_RUNTIME.get(uid);
    const _inst = HMI_RUNTIME.get(inst);
    const _txtBefore = HMI_RUNTIME.get(txtBefore, 'formattedString') ?? '';
    const _txtAfter = HMI_RUNTIME.get(txtAfter, 'formattedString') ?? '';

    if (firstCall) {
      this.p.innerHTML = `${_txtBefore}loading...${_txtAfter}`;

      HMI_RUNTIME.getGOMval(_uid, _inst, (value) => {
        if (value.byteLength < 6) {
          this.p.innerHTML = `${_txtBefore}invalid value${_txtAfter}`;
          return;
        }
        
        this.p.innerHTML = _txtBefore;
        for (let i = 0; i < 6; i++) this.p.innerHTML += value[i].toString(16).padStart(2, '0') + (i < 5 ? ':' : '');
        this.p.innerHTML += _txtAfter;
      });
    }
  }
}