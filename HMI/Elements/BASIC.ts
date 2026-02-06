import '../../hmi_runtime'; 

export class HMI_TEXT_P implements RUNTIME_ELEMENT {
  readonly p = document.createElement('p');
  readonly root = this.p;

  render(
    firstCall: boolean,
    text: ARG_CONST_ARRAY_USINT,
  ): void {
    if (firstCall) {
      this.p.innerHTML = HMI_RUNTIME.get(text, 'formattedString');
    }
  }
}

export class HMI_TEXT_H1 implements RUNTIME_ELEMENT { 
  readonly h1 = document.createElement('h1');
  readonly root = this.h1;

  render(
    firstCall: boolean,
    text: ARG_CONST_ARRAY_USINT,
  ): void {
    if (firstCall) {
      this.h1.innerHTML = HMI_RUNTIME.get(text, 'formattedString');
    }
  }
}

export class HMI_TEXT_H2 implements RUNTIME_ELEMENT {
  readonly h2 = document.createElement('h2');
  readonly root = this.h2;

  render(
    firstCall: boolean,
    text: ARG_CONST_ARRAY_USINT,
  ): void {
    if (firstCall) {
      this.h2.innerHTML = HMI_RUNTIME.get(text, 'formattedString');
    }
  }
}

export class HMI_TEXT_H3 implements RUNTIME_ELEMENT {
  readonly h3 = document.createElement('h3');
  readonly root = this.h3;

  render(
    firstCall: boolean,
    text: ARG_CONST_ARRAY_USINT,
  ): void {
    if (firstCall) {
      this.h3.innerHTML = HMI_RUNTIME.get(text, 'formattedString');
    }
  }
}

export class HMI_IMAGE implements RUNTIME_ELEMENT {
  readonly img = document.createElement('img');
  readonly root = this.img;

  render(
    firstCall: boolean,
    src: ARG_CONST_ARRAY_USINT,
  ): void {
    if (firstCall) {
      this.img.src = HMI_RUNTIME.getImageStr(HMI_RUNTIME.get(src, 'formattedString')) ?? '';
    }
  }
}

export class HMI_DISPLAY_VALUE implements RUNTIME_ELEMENT { 
  readonly p = document.createElement('p');
  readonly root = this.p;

  render(
    firstCall: boolean,
    value: ARG_VAL_NUMERICAL,
    before: ARG_CONST_ARRAY_USINT | undefined,
    after: ARG_CONST_ARRAY_USINT | undefined,
    decimals: ARG_CONST_NUMERICAL | undefined,
  ): void {
    const _value = HMI_RUNTIME.get(value);
    const _before = HMI_RUNTIME.get(before, 'formattedString') ?? '';
    const _after = HMI_RUNTIME.get(after, 'formattedString') ?? '';
    const _decimals = HMI_RUNTIME.get(decimals) ?? 0;

    const displayValue = +_value.toFixed(_decimals);
    this.p.innerHTML = `${_before}${displayValue}${_after}`;
  }
}

export class HMI_DISPLAY_ENUM implements RUNTIME_ELEMENT { 
  readonly p = document.createElement('p');
  readonly root = this.p;
  
  render(
    firstCall: boolean,
    value: ARG_VAL_NUMERICAL,
    strings: ARG_CONST_ARRAY_USINT,
    numbers: ARG_CONST_ARRAY_UDINT,
    before: ARG_CONST_ARRAY_USINT | undefined,
    after: ARG_CONST_ARRAY_USINT | undefined,
  ): void {
    const _value = HMI_RUNTIME.get(value);
    const _strings = HMI_RUNTIME.get(strings, 'formattedString').split(';');
    const _numbers = HMI_RUNTIME.get(numbers);
    const _before = HMI_RUNTIME.get(before, 'formattedString') ?? '';
    const _after = HMI_RUNTIME.get(after, 'formattedString') ?? '';

    const id = _numbers.indexOf(_value);
    const displayValue = id >= 0 && id < _strings.length ? _strings[id] : '';
    this.p.innerHTML = `${_before}${displayValue}${_after}`;
  }
}

export class HMI_DISPLAY_STRING implements RUNTIME_ELEMENT { 
  readonly p = document.createElement('p');
  readonly root = this.p;

  render(
    firstCall: boolean,
    value: ARG_VAL_ARRAY_USINT | ARG_CONST_ARRAY_USINT,
    before: ARG_CONST_ARRAY_USINT | undefined,
    after: ARG_CONST_ARRAY_USINT | undefined,
  ): void {
    const _value = HMI_RUNTIME.get(value, 'formattedString');
    const _before = HMI_RUNTIME.get(before, 'formattedString');
    const _after = HMI_RUNTIME.get(after, 'formattedString');

    this.p.innerHTML = `${_before}${_value}${_after}`;
  }
}

export class HMI_INPUT_BUTTON implements RUNTIME_ELEMENT { 
  readonly button = document.createElement('button');
  readonly root = this.button;

  render(
    firstCall: boolean,
    value: ARG_VAL_SIGNED | ARG_VAL_UNSIGNED,
    text: ARG_CONST_ARRAY_USINT | undefined,
    setValue: ARG_CONST_SIGNED | ARG_CONST_UNSIGNED | undefined,
  ): void {
    if (firstCall) {
      this.button.innerHTML = HMI_RUNTIME.get(text, 'formattedString') ?? '';;
      this.button.addEventListener('click', () => HMI_RUNTIME.set(value, HMI_RUNTIME.get(setValue) ?? 1));
    }
  }
}

export class HMI_INPUT_NUMBER implements RUNTIME_ELEMENT {
  readonly root = document.createElement('div');
  readonly Before = this.root.appendChild(document.createElement('p'));
  readonly input = this.root.appendChild(document.createElement('input'));
  readonly After = this.root.appendChild(document.createElement('p'));

  constructor() {
    this.input.type = 'number';
  }

  render(
    firstCall: boolean,
    value: ARG_VAL_NUMERICAL,
    before: ARG_CONST_ARRAY_USINT | undefined,
    after: ARG_CONST_ARRAY_USINT | undefined,
  ): void {
    if (firstCall) {
      this.Before.innerHTML = HMI_RUNTIME.get(before, 'formattedString') ?? '';
      this.After.innerHTML = HMI_RUNTIME.get(after, 'formattedString') ?? ''; 

      this.input.addEventListener('focusout', () => HMI_RUNTIME.set(value, this.input.valueAsNumber));
    }
    
    if (document.activeElement !== this.input) this.input.value = `${HMI_RUNTIME.get(value)}`;
  }
}

export class HMI_USER_MANAGEMENT_SIGN_IN implements RUNTIME_ELEMENT {
  readonly root = document.createElement('div');

  readonly p = this.root.appendChild(document.createElement('p'));

  readonly fieldSignedOut = this.root.appendChild(document.createElement('div'));
  readonly pwInput = this.fieldSignedOut.appendChild(document.createElement('input'));
  readonly signInBtn = this.fieldSignedOut.appendChild(document.createElement('button'));

  readonly fieldSignedIn = this.root.appendChild(document.createElement('div'));
  readonly signOutBtn = this.fieldSignedIn.appendChild(document.createElement('button'));

  constructor() {
    this.fieldSignedOut.classList.add('signed-out-field');
    this.pwInput.type = 'password';
    this.signInBtn.innerHTML = 'Sign In';
    this.signInBtn.addEventListener('click', async () => { 
      if(!await HMI_RUNTIME.signIn(this.pwInput.value)) {
        this.signInBtn.innerHTML = 'Sign In Failed';
        setTimeout(() => this.signInBtn.innerHTML = 'Sign In', 2000);
      }
      this.render(false);
    });

    this.fieldSignedIn.classList.add('signed-in-field');
    this.signOutBtn.innerHTML = 'Sign Out';
    this.signOutBtn.addEventListener('click', () => {
      HMI_RUNTIME.signOut();
      this.render(false);
    });
  }
 
  render(firstCall: boolean): void {
    const currentUser = HMI_RUNTIME.currentUser();

    if (currentUser) { 
      this.p.innerHTML = `Current User Level: ${currentUser}`;
      this.fieldSignedIn.style.display = 'block';
      this.fieldSignedOut.style.display = 'none';
    }
    else {
      this.p.innerHTML = 'Sign in with Password:';
      this.fieldSignedIn.style.display = 'none';
      this.fieldSignedOut.style.display = 'block';
    }
  }
}

export class HMI_USER_MANAGEMENT_CHANGE_PASSWORD implements RUNTIME_ELEMENT { 
  readonly root = document.createElement('div');

  readonly pwHeader = this.root.appendChild(document.createElement('p'));
  readonly pwInput = this.root.appendChild(document.createElement('input'));

  readonly pwRepeatedHeader = this.root.appendChild(document.createElement('p'));
  readonly pwRepeatedInput = this.root.appendChild(document.createElement('input'))

  readonly changeBtn = this.root.appendChild(document.createElement('button'));

  constructor() {
    this.pwHeader.innerHTML = 'New Password:';
    this.pwInput.type = 'password';
 
    this.pwRepeatedHeader.innerHTML = 'New Password (Repeated):';
    this.pwRepeatedInput.type = 'password';

    this.changeBtn.innerHTML = 'Change Password';
  }

  render(
    firstCall: boolean,
    id: ARG_CONST_UDINT
  ): void {
    this.changeBtn.addEventListener('click', async () => {
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
      if (result.result) displayMessage('Password Changed!');
      else displayMessage(result.reason);
    });
  }
}
