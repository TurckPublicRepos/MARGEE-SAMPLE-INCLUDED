import '../../hmi_runtime'; 

export class HMI_TEXT_P implements ELEMENT { 
  readonly root = create('p');

  /**
   * This displays text.
   * @param text The text to display.
   */
  render(text: ARG_CONST_ARRAY_USINT): void {  
    if (HMI_RUNTIME.isRendered) return;  

    this.root.innerHTML = HMI_RUNTIME.get(text, 'formattedString'); 
  }
} 
 
export class HMI_TEXT_H1 implements ELEMENT { 
  readonly root = create('h1');
 
  render(text: ARG_CONST_ARRAY_USINT): void {
    if (HMI_RUNTIME.isRendered) return; 

    this.root.innerHTML = HMI_RUNTIME.get(text, 'formattedString');
  } 
}

export class HMI_TEXT_H2 implements ELEMENT {
  readonly root = create('h2');

  render(text: ARG_CONST_ARRAY_USINT): void { 
    if (HMI_RUNTIME.isRendered) return; 

    this.root.innerHTML = HMI_RUNTIME.get(text, 'formattedString');
  }
}

export class HMI_TEXT_H3 implements ELEMENT { 
  readonly root = create('h3');

  render(text: ARG_CONST_ARRAY_USINT): void {
    if (HMI_RUNTIME.isRendered) return;

    this.root.innerHTML = HMI_RUNTIME.get(text, 'formattedString');
  }
}

export class HMI_IMAGE implements ELEMENT {
  readonly root = create('img');

  render(src: ARG_CONST_ARRAY_USINT): void {
    if (HMI_RUNTIME.isRendered) return;

    this.root.src = HMI_RUNTIME.getImageStr(HMI_RUNTIME.get(src, 'formattedString')) ?? '';
  }
}

export class HMI_DISPLAY_VALUE implements ELEMENT { 
  readonly root = create('p');

  render(
    value: ARG_VAL_NUMERICAL,
    before?: ARG_CONST_ARRAY_USINT, 
    after?: ARG_CONST_ARRAY_USINT,
    decimals?: ARG_CONST_NUMERICAL,
  ): void {
    const _value = HMI_RUNTIME.get(value);
    const _before = HMI_RUNTIME.get(before, 'formattedString') ?? '';
    const _after = HMI_RUNTIME.get(after, 'formattedString') ?? '';
    const _decimals = HMI_RUNTIME.get(decimals) ?? 0;

    const displayValue = +_value.toFixed(_decimals);
    this.root.innerHTML = `${_before}${displayValue}${_after}`;
  }
}

export class HMI_DISPLAY_ENUM implements ELEMENT { 
  readonly root = create('p');
  
  render(
    value: ARG_VAL_NUMERICAL,
    strings: ARG_CONST_ARRAY_USINT,
    numbers: ARG_CONST_ARRAY_UDINT, 
    before?: ARG_CONST_ARRAY_USINT,
    after?: ARG_CONST_ARRAY_USINT,
  ): void {
    const _value = HMI_RUNTIME.get(value); 
    const _strings = HMI_RUNTIME.get(strings, 'formattedString').split(';');
    const _numbers = HMI_RUNTIME.get(numbers);
    const _before = HMI_RUNTIME.get(before, 'formattedString') ?? '';
    const _after = HMI_RUNTIME.get(after, 'formattedString') ?? '';

    const id = _numbers.indexOf(_value);
    const displayValue = id >= 0 && id < _strings.length ? _strings[id] : '';
    this.root.innerHTML = `${_before}${displayValue}${_after}`;
  }
}

export class HMI_DISPLAY_STRING implements ELEMENT { 
  readonly root = create('p');

  render(
    value: ARG_VAL_ARRAY_USINT | ARG_CONST_ARRAY_USINT,
    before?: ARG_CONST_ARRAY_USINT,
    after?: ARG_CONST_ARRAY_USINT,
  ): void {
    const _value = HMI_RUNTIME.get(value, 'formattedString');
    const _before = HMI_RUNTIME.get(before, 'formattedString');
    const _after = HMI_RUNTIME.get(after, 'formattedString');

    this.root.innerHTML = `${_before}${_value}${_after}`;
  }
}

export class HMI_INPUT_BUTTON implements ELEMENT { 
  readonly root = create('button').addClasses('default');

  render(
    value: ARG_VAL_SIGNED | ARG_VAL_UNSIGNED,
    text?: ARG_CONST_ARRAY_USINT,
    setValue?: ARG_CONST_SIGNED | ARG_CONST_UNSIGNED,
  ): void {
    if (!HMI_RUNTIME.isRendered) {
      this.root.innerHTML = HMI_RUNTIME.get(text, 'formattedString') ?? '';;
      this.root.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue) ?? 1));
    }
  }
} 

export class HMI_REBOOT implements ELEMENT { 
  readonly root = create('button').addClasses('default');

  render(): void {
    if (!HMI_RUNTIME.isRendered) {
      this.root.innerHTML = 'Reboot';
      this.root.addEventListener('click', () => HMI_RUNTIME.setGom(0x000C0001, 0, 0));
    }
  }
}

export class HMI_INPUT_NUMBER implements ELEMENT {
  readonly root = create('div');
  readonly Before = this.root.add(create('p'));
  readonly input = this.root.add(create('input').set({ type: 'number' }));
  readonly After = this.root.add(create('p'));

  render(
    value: ARG_VAL_NUMERICAL,
    before?: ARG_CONST_ARRAY_USINT,
    after?: ARG_CONST_ARRAY_USINT,
  ): void {
    if (document.activeElement !== this.input) this.input.valueAsNumber = HMI_RUNTIME.get(value);
    if (HMI_RUNTIME.isRendered) return
    
    this.input.addEventListener('focusout', () => HMI_RUNTIME.set(value, this.input.valueAsNumber));
    this.Before.innerHTML = HMI_RUNTIME.get(before, 'formattedString') ?? '';
    this.After.innerHTML = HMI_RUNTIME.get(after, 'formattedString') ?? ''; 
  }
}

export class HMI_USER_MANAGEMENT_SIGN_IN implements ELEMENT {
  readonly root = create('div');

  readonly header = this.root.add(create('p'));
  readonly fieldSignedOut = this.root.add(create('div').addClasses('signed-out-field'));
  readonly fieldSignedIn = this.root.add(create('div').addClasses('signed-in-field'));
  readonly pwInput = this.fieldSignedOut.add(create('input').set({ type: 'password' }));
  readonly signInBtn = this.fieldSignedOut.add(create('button').set({ innerHTML: 'Sign In', onclick: () => { HMI_RUNTIME.signIn(this.pwInput.value) } }));
  readonly signOutBtn = this.fieldSignedIn.add(create('button').set({ innerHTML: 'Sign Out', onclick: () => { HMI_RUNTIME.signOut(); } }));
 
  render(): void {
    const currentUser = HMI_RUNTIME.currentUser();

    if (currentUser) { 
      this.header.innerHTML = `Current User Level: ${currentUser}`;
      this.fieldSignedIn.style.display = 'block';
      this.fieldSignedOut.style.display = 'none';
    }
    else {
      this.header.innerHTML = 'Sign in with Password:';
      this.fieldSignedIn.style.display = 'none';
      this.fieldSignedOut.style.display = 'block';
    }
  }
}

export class HMI_USER_MANAGEMENT_CHANGE_PASSWORD implements ELEMENT { 
  readonly root = create('div');

  readonly pwHeader = this.root.add(create('p').set({ innerHTML: 'New Password:' }));
  readonly pwInput = this.root.add(create('input').set({ type: 'password' }));
  readonly pwRepeatedHeader = this.root.add(create('p').set({ innerHTML: 'New Password (Repeated):' }));
  readonly pwRepeatedInput = this.root.add(create('input').set({ type: 'password' }));
  readonly changeBtn = this.root.add(create('button').set({ innerHTML: 'Change Password' }));

  render(id: ARG_CONST_UDINT): void {
    this.changeBtn.onclick = async () => {
      const displayMessage = (msg: string) => { 
        this.changeBtn.innerHTML = msg;
        setTimeout(() => {
          this.changeBtn.innerHTML = 'Change Password';
          this.changeBtn.disabled = false;
        }, 2000);
      };

      if (this.pwInput.value !== this.pwRepeatedInput.value) {
        displayMessage('Passwords do not match!');
        return;
      }

      this.changeBtn.innerHTML = 'Changing...';
      this.changeBtn.disabled = true;

      const result = await HMI_RUNTIME.changePassword(HMI_RUNTIME.get(id), this.pwInput.value);
      if (result.result === true) displayMessage('Password Changed!');
      else displayMessage(result.reason);
    };
  }
}
