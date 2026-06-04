VAR_GLOBAL
  gMachineRunning   : USINT;

  gStTank1          : TANK;
  gStTank2          : TANK;
  gStTank3          : TANK;
  gStTank4          : TANK;
  gStTank5          : TANK;

  gOutput1         : OUTPUT;
  gOutput2         : OUTPUT;
  gOutput3         : OUTPUT;
  gOutput4         : OUTPUT;
END_VAR

STRUCT TANK 
  enabled     : USINT := 1;
  fillSpeed   : UDINT := 16#0000FFFF;
  level       : UDINT := 16#8FFFFFFF;
END_STRUCT

STRUCT OUTPUT 
  enabled     : USINT := 0;
  onTime      : UDINT := 1000;
  offTime     : UDINT := 500;
  value       : USINT := 0; // For HMI, to show the current output state (on/off). Can be written, but value is ignored
  _timer      : TIMER; // Storage for the timer instance used in output control function.
END_STRUCT

VAR_GLOBAL
  CHECKBOX_VAL    : UDINT;
  TOGGLE_VAL      : UDINT;
  FORM_VAL        : UDINT;
  DROPDOWN_VAL    : UDINT;
  BUTTON_VAL      : UDINT;
END_VAR

VAR_ALIAS
  ioOUTPUT_1      : ALIAS_IO(Output_Basic_DXP_Output_value_1);
  ioOUTPUT_2      : ALIAS_IO(Output_Basic_DXP_Output_value_2);
  ioOUTPUT_3      : ALIAS_IO(Output_Basic_DXP_Output_value_3);
  ioOUTPUT_4      : ALIAS_IO(Output_Basic_DXP_Output_value_4);
END_VAR

TASK mainTask   
  VAR
    initialized : USINT; 
  END_VAR
  IF (initialized = 0) THEN 
    initialized := 1;
    SYS_GOM_SET_DWORD(16#004900A0, 0, 4); // Allow 4 additional passwords to be used.
  END_IF

  IF (gMachineRunning = 0) THEN RETURN; END_IF

  IF (gStTank1.enabled) THEN gStTank1.level := gStTank1.level + gStTank1.fillSpeed; END_IF  
  IF (gStTank2.enabled) THEN gStTank2.level := gStTank2.level + gStTank2.fillSpeed; END_IF  
  IF (gStTank3.enabled) THEN gStTank3.level := gStTank3.level + gStTank3.fillSpeed; END_IF  
  IF (gStTank4.enabled) THEN gStTank4.level := gStTank4.level + gStTank4.fillSpeed; END_IF  
  IF (gStTank5.enabled) THEN gStTank5.level := gStTank5.level + gStTank5.fillSpeed; END_IF  
END_TASK 

TASK outputControl 
  ioOUTPUT_1 := OUTPUT_CONTROL(ioOUTPUT_1, gOutput1);
  ioOUTPUT_2 := OUTPUT_CONTROL(ioOUTPUT_2, gOutput2);
  ioOUTPUT_3 := OUTPUT_CONTROL(ioOUTPUT_3, gOutput3);
  ioOUTPUT_4 := OUTPUT_CONTROL(ioOUTPUT_4, gOutput4);
END_TASK

FUNCTION OUTPUT_CONTROL: USINT
  VAR_INPUT 
    outputValue   : USINT;
  END_VAR
  VAR_IN_OUT
    stOutput          : OUTPUT;
  END_VAR

  IF (stOutput.enabled & outputValue = 0 & EXPIRED(stOutput._timer)) THEN
    OUTPUT_CONTROL := 1;
    START_TIMER(stOutput._timer, stOutput.onTime);
  ELSIF (stOutput.enabled & outputValue = 1 & EXPIRED(stOutput._timer)) THEN
    OUTPUT_CONTROL := 0;
    START_TIMER(stOutput._timer, stOutput.offTime);
  ELSIF (stOutput.enabled = 0) THEN
    START_TIMER(stOutput._timer, 0);
    OUTPUT_CONTROL := 0;
  ELSE 
    OUTPUT_CONTROL := outputValue;
  END_IF

  stOutput.value := OUTPUT_CONTROL; // Update the output state for HMI display.
END_FUNCTION