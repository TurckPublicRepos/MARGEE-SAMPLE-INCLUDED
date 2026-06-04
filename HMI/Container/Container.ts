import '../../hmi_runtime'; 

export class HMI_SCREEN implements CONTAINER_ELEMENT {
  readonly root = create('div');
  
  readonly header = this.root.appendChild(create('div'));
  readonly navigation = this.root.appendChild(create('div')); 
  readonly content = this.root.appendChild(create('div'));

  constructor() {
    this.header.innerHTML = 'MARGEE SAMPLE PROGRAM';
    this.header.appendChild(HMI_RUNTIME.getIMG('logo.svg')!);
    this.navigation.appendChild(create('div')).innerHTML = 'NAVIGATION';
  }
  
  render(name: ARG_CONST_ARRAY_USINT): void { 
    if (HMI_RUNTIME.isRendered) return; 
    
    const navigationList = this.navigation.appendChild(create('ul'));
    for (const [i, screen] of HMI_RUNTIME.screenNames().entries()) {
      navigationList.appendChild(create('li')).appendChild(create('a').set({
        href: `#${i}`,
        innerHTML: (HMI_RUNTIME.getIMGContent(`${screen.toLowerCase()}.svg`) ?? '') + screen,
        onclick: () => HMI_RUNTIME.changeScreen(i)
      }).addClasses(HMI_RUNTIME.get(name, 'formattedString') === screen ? 'active' : 'inactive'));
    }
  }
}

export class HMI_GRID implements CONTAINER_ELEMENT { 
  readonly root = create('div');
  readonly content = this.root;

  render(
    columnSizes?: ARG_CONST_ARRAY_USINT,
    rowSizes?: ARG_CONST_ARRAY_USINT,
    gap?: ARG_CONST_ARRAY_USINT,
  ) {
    if (HMI_RUNTIME.isRendered) return;

    this.root.style.gridTemplateColumns = HMI_RUNTIME.get(columnSizes, 'string') ?? 'auto';
    this.root.style.gridTemplateRows = HMI_RUNTIME.get(rowSizes, 'string') ?? 'auto';
    this.root.style.gap = HMI_RUNTIME.get(gap, 'string') ?? '0';
  }
}

export class HMI_CONTAINER implements CONTAINER_ELEMENT { 
  readonly root = create('div');
  readonly content = this.root;

  render(
    column?: ARG_CONST_NUMERICAL,
    columnSpan?: ARG_CONST_NUMERICAL,
    row?: ARG_CONST_NUMERICAL,
    rowSpan?: ARG_CONST_NUMERICAL,
    visibleMask?: ARG_CONST_NUMERICAL, 
    visible_0?: ARG_VAL_NUMERICAL | ARG_CONST_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    visible_1?: ARG_VAL_NUMERICAL | ARG_CONST_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    visible_2?: ARG_VAL_NUMERICAL | ARG_CONST_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
    visible_3?: ARG_VAL_NUMERICAL | ARG_CONST_NUMERICAL | ARG_VAL_BITFIELD_NUMERICAL,
  ) {
    let visibleMaskValue = HMI_RUNTIME.get(visibleMask) ?? 0;
    const visibilityArgs = [visible_0, visible_1, visible_2, visible_3];
    const missingVisibilityArgs = visibilityArgs.filter((arg) => !arg).length;
    visibleMaskValue = visibleMaskValue << missingVisibilityArgs;

    const isVisible = visibilityArgs.every((arg, index) => {
      const currentValue = (HMI_RUNTIME.get(arg) ?? 0) ? 1 : 0;
      const expectedValue = (visibleMaskValue >> (3 - index)) & 0b1;
      return currentValue === expectedValue;
    });
    this.root.classList.toggle('hidden', !isVisible);

    if (HMI_RUNTIME.isRendered) return;

    const _column = HMI_RUNTIME.get(column);
    const _columnSpan = HMI_RUNTIME.get(columnSpan) ?? 1;
    const _row = HMI_RUNTIME.get(row);
    const _rowSpan = HMI_RUNTIME.get(rowSpan) ?? 1;

    if (_column) {
      this.root.style.gridColumnStart = `${_column}`;
      this.root.style.gridColumnEnd = `${_column + _columnSpan}`;
    }
    if (_row) {
      this.root.style.gridRowStart = `${_row}`;
      this.root.style.gridRowEnd = `${_row + _rowSpan}`;
    }
  }
}

export class HMI_USER_CONTAINER implements CONTAINER_ELEMENT {
  readonly root = create('div');
  readonly content = this.root;

  render(acceptedUsers: ARG_CONST_ARRAY_NUMERICAL): void {
    const _acceptedUsers = HMI_RUNTIME.get(acceptedUsers);
    const inUserList = _acceptedUsers.includes(HMI_RUNTIME.currentUser());
    
    this.root.classList.toggle('not-in-user-list', !inUserList);
  }
}

export class RAW implements ELEMENT {
  readonly root = create('div');

  render(
    html: ARG_CONST_ARRAY_USINT,
    ): void {
    if (HMI_RUNTIME.isRendered) return;

    const _html = HMI_RUNTIME.get(html, 'string');
    this.root.innerHTML = _html;
  }
}