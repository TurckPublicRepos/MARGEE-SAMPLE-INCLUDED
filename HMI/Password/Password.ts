export class SIGN_IN implements ELEMENT {
  readonly root = create('div');

  readonly formInput = this.root.appendChild(create('input').set({ type: 'password' }));
  readonly buttonRoot = this.root.appendChild(create('button').addClasses('BUTTON_STYLE_BLACK', "BUTTON_SIZE_NORMAL"));

  render(): void {
    if (HMI_RUNTIME.currentUser()) { 
      this.formInput.style.display = 'none';
      this.buttonRoot.innerHTML = 'SIGN OUT';
    }
    else {
      this.formInput.style.display = 'block';
      this.buttonRoot.innerHTML = 'SIGN IN';
    }

    if (HMI_RUNTIME.isRendered) return;

    this.buttonRoot.onclick = () => {
      if (HMI_RUNTIME.currentUser()) HMI_RUNTIME.signOut();
      else HMI_RUNTIME.signIn(this.formInput.value);
    };
  }
}

export class CHANGE_PASSWORD implements ELEMENT { 
  readonly root = create('div');

  readonly pwHeader = this.root.appendChild(create('div').set({ innerHTML: 'New Password:' }));
  readonly pwInput = this.root.appendChild(create('input').set({ type: 'password' }));
  readonly pwRepeatedHeader = this.root.appendChild(create('div').set({ innerHTML: 'New Password (Repeated):' }));
  readonly pwRepeatedInput = this.root.appendChild(create('input').set({ type: 'password' }));
  readonly changeBtn = this.root.appendChild(create('button').set({ innerHTML: 'Change Password' })).addClasses('BUTTON_STYLE_BLACK', "BUTTON_SIZE_NORMAL");

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
