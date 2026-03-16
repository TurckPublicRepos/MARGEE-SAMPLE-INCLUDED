import '../../hmi_runtime'; 

export class HMI_SCREEN implements CONTAINER_ELEMENT {
  readonly root = create('div');
  
  readonly header = this.root.add(create('div').addClasses('header'));
  readonly bottom = this.root.add(create('div').addClasses('bottom'));
  readonly navigation = this.root.add(create('div').addClasses('navigation')); 
  readonly content = this.root.add(create('div').addClasses('content'));

  readonly headerText = this.header.add(create('p'));
  readonly headerLogo = this.header.add(create('img').set({ src: HMI_RUNTIME.getImageStr('logo.jpg') ?? '' }));

  readonly bottomText = this.bottom.add(create('p').set({ innerHTML: 'Made with ❤️ by TURCK in the Netherlands' }));

  readonly navigationList = this.navigation.add(create('ul'));

  render(name: ARG_CONST_ARRAY_USINT): void { 
    if (HMI_RUNTIME.isRendered) return; 
    this.headerText.innerHTML = HMI_RUNTIME.get(name, 'formattedString');

    for (const [i, screen] of HMI_RUNTIME.screenNames().entries()) {
      this.navigationList.add(create('li')).add(create('a').set({
        href: `#${i}`,
        innerHTML: screen,
        onclick: () => HMI_RUNTIME.changeScreen(i)
      }).addClasses(this.headerText.innerHTML === screen ? 'active' : 'inactive'));
    }
  }
}

export class HMI_GRID implements CONTAINER_ELEMENT { 
  readonly root = create('div');
  readonly content = this.root;

  render(
    columnSizes?: ARG_CONST_ARRAY_USINT,
    rowSizes?: ARG_CONST_ARRAY_USINT,
  ) {
    if (HMI_RUNTIME.isRendered) return;

    this.root.style.gridTemplateColumns = HMI_RUNTIME.get(columnSizes, 'string') ?? 'auto';
    this.root.style.gridTemplateRows = HMI_RUNTIME.get(rowSizes, 'string') ?? 'auto';
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
    visible?: ARG_VAL_NUMERICAL | ARG_CONST_NUMERICAL,
    acceptedUsers?: ARG_CONST_ARRAY_NUMERICAL,
  ) {
    if (!HMI_RUNTIME.isRendered) {
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
