import '../../hmi_runtime';

export class HMI_SCREEN implements RUNTIME_ELEMENT {
  readonly root = document.createElement('div');
  
  readonly header = this.root.appendChild(document.createElement('div'));
  readonly headerText = this.header.appendChild(document.createElement('p'));
  readonly headerLogo = this.header.appendChild(document.createElement('img'));

  readonly bottom = this.root.appendChild(document.createElement('div'));
  readonly bottomText = this.bottom.appendChild(document.createElement('p'));

  readonly navigation = this.root.appendChild(document.createElement('div'));
  readonly navigationList = this.navigation.appendChild(document.createElement('ul'));

  readonly content = this.root.appendChild(document.createElement('div'));

  constructor() {
    this.header.classList.add('header');
    this.bottom.classList.add('bottom');
    this.navigation.classList.add('navigation');
    this.content.classList.add('content');

    this.headerLogo.src = HMI_RUNTIME.getImageStr('logo.jpg') ?? '';
    this.bottomText.innerHTML = 'Made with ❤️ by TURCK in the Netherlands';
  }

  render(
    firstCall: boolean,
    name: ARG_CONST_ARRAY_USINT
  ): void {
    if (firstCall) {
      const _name = HMI_RUNTIME.get(name, 'formattedString');

      this.headerText.innerHTML = _name;
      for (const [i, screen] of HMI_RUNTIME.screenNames().entries()) {
        const a = this.navigationList.appendChild(document.createElement('li')).appendChild(document.createElement('a'));
        a.href = `#${i}`;
        a.innerHTML = screen;
        a.onclick = () => HMI_RUNTIME.changeScreen(i);
        if (_name === screen) a.classList.add('active');
      }
    }
  }
}

export class HMI_GRID implements RUNTIME_ELEMENT { 
  readonly root = document.createElement('div');

  render(
    firstCall: boolean,
    columnSizes: ARG_CONST_ARRAY_USINT | undefined,
    rowSizes: ARG_CONST_ARRAY_USINT | undefined,
  ) {
    if (firstCall) {
      this.root.style.gridTemplateColumns = HMI_RUNTIME.get(columnSizes, 'string') ?? 'auto';
      this.root.style.gridTemplateRows = HMI_RUNTIME.get(rowSizes, 'string') ?? 'auto';
    }
  }
}

export class HMI_CONTAINER implements RUNTIME_ELEMENT { 
  readonly root = document.createElement('div');

  render(
    firstCall: boolean,
    column: ARG_CONST_NUMERICAL | undefined,
    columnSpan: ARG_CONST_NUMERICAL | undefined,
    row: ARG_CONST_NUMERICAL | undefined,
    rowSpan: ARG_CONST_NUMERICAL | undefined,
    visible: ARG_VAL_NUMERICAL | ARG_CONST_NUMERICAL | undefined,
    acceptedUsers: ARG_CONST_ARRAY_NUMERICAL | undefined,
  ) {
    if (firstCall) {
      this.root.style.gridColumnStart = `${(HMI_RUNTIME.get(column) ?? 0)}`;
      this.root.style.gridColumnEnd = `${(HMI_RUNTIME.get(column) ?? 0) + (HMI_RUNTIME.get(columnSpan) ?? 1)}`;
      this.root.style.gridRowStart = `${(HMI_RUNTIME.get(row) ?? 0)}`;
      this.root.style.gridRowEnd = `${(HMI_RUNTIME.get(row) ?? 0) + (HMI_RUNTIME.get(rowSpan) ?? 1)}`;
    }

    const _visible = HMI_RUNTIME.get(visible) ?? 1;
    if (_visible) this.root.classList.remove('hidden');
    else this.root.classList.add('hidden');
    
    const _acceptedUsers = HMI_RUNTIME.get(acceptedUsers) ?? [];
    if (_acceptedUsers.length && !_acceptedUsers.includes(HMI_RUNTIME.currentUser())) this.root.classList.add('not-in-user-list');
    else this.root.classList.remove('not-in-user-list');
  }
}
