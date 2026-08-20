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
      if (!value) {
        this.value.innerHTML = 'FAILED TO RETRIEVE';
        return;
      }

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
      if (!value) {
        this.value.innerHTML = 'FAILED TO RETRIEVE';
        return;
      }

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
      if (!value) {
        this.value.innerHTML = 'FAILED TO RETRIEVE';
        return;
      }

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
      if (!value) {
        this.value.innerHTML = 'FAILED TO RETRIEVE';
        return;
      }

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
      if (!value || value.byteLength < 4) {
        this.value.innerHTML = 'FAILED TO RETRIEVE';
        return;
      }
      
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
      if (!value || value.byteLength < 6) {
        this.value.innerHTML = 'FAILED TO RETRIEVE';
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
      if (!value || value.byteLength < 4) {
        this.value.innerHTML = 'FAILED TO RETRIEVE';
        return;
      }
      
      this.value.innerHTML = '';
      for (let i = 3; i >= 0; i--) this.value.innerHTML += value[i] + (i > 0 ? '.' : '');
    });
  }
}

export const stringToBuffer = (str: string): Uint8Array => new TextEncoder().encode(str);

export function bufferToString(buffer: Uint8Array | number[], terminateOnNull: boolean): string {
  if (Array.isArray(buffer)) buffer = toBytesUint8Array(buffer);
  if (terminateOnNull && buffer.includes(0)) {
    return new TextDecoder().decode(buffer.slice(0, buffer.findIndex(_ => _ === 0)));
  }
  else {
    return new TextDecoder().decode(buffer);
  }
}

export function toBytesUint32Array(arr: number[], litteEndian: boolean = true): Uint8Array {
  const byteArr = new Uint8Array(arr.length * 4);
  const byteArrDV = new DataView(byteArr.buffer);
  arr.forEach((e, i) => byteArrDV.setUint32(i * 4, e, litteEndian));
  return byteArr;
}

export function toBytesUint16Array(arr: number[], litteEndian: boolean = true): Uint8Array {
  const byteArr = new Uint8Array(arr.length * 2);
  const byteArrDV = new DataView(byteArr.buffer);
  arr.forEach((e, i) => byteArrDV.setUint16(i * 2, e, litteEndian));
  return byteArr;
}

export function toBytesUint8Array(arr: number[]): Uint8Array {
  const byteArr = new Uint8Array(arr.length);
  const byteArrDV = new DataView(byteArr.buffer);
  arr.forEach((e, i) => byteArrDV.setUint8(i, e));
  return byteArr;
}


export function fromBytesFloat(arr: Uint8Array, litteEndian: boolean = true): number {
  const arrDV = new DataView(arr.buffer);
  return arrDV.getFloat32(0, litteEndian);
}

export function fromBytesInt32(arr: Uint8Array, litteEndian: boolean = true): number {
  if (arr.byteLength <= 2) return fromBytesInt16(arr, litteEndian);
  const arrDV = new DataView(arr.buffer);
  return arrDV.getInt32(0, litteEndian);
}

export function fromBytesInt16(arr: Uint8Array, litteEndian: boolean = true): number {
  if (arr.byteLength <= 1) return fromBytesInt8(arr);
  const arrDV = new DataView(arr.buffer);
  return arrDV.getInt16(0, litteEndian);
}

export function fromBytesInt8(arr: Uint8Array): number {
  const arrDV = new DataView(arr.buffer);
  return arrDV.getInt8(0);
}

export function fromBytesUint32(arr: Uint8Array, litteEndian: boolean = true): number {
  if (arr.byteLength <= 2) return fromBytesUint16(arr, litteEndian);
  const arrDV = new DataView(arr.buffer);
  return arrDV.getUint32(0, litteEndian);
}

export function fromBytesUint16(arr: Uint8Array, litteEndian: boolean = true): number {
  if (arr.byteLength <= 1) return fromBytesUint8(arr);
  const arrDV = new DataView(arr.buffer);
  return arrDV.getUint16(0, litteEndian);
}

export function fromBytesUint8(arr: Uint8Array): number {
  const arrDV = new DataView(arr.buffer);
  return arrDV.getUint8(0);
}
