VAR_GLOBAL
  gusiMachineRunning    : USINT;

  gStTank1              : TANK;
  gStTank2              : TANK;
  gStTank3              : TANK;
  gStTank4              : TANK;
  gStTank5              : TANK;

  gStOutput1            : OUTPUT;
  gStOutput2            : OUTPUT;
  gStOutput3            : OUTPUT;
  gStOutput4            : OUTPUT;
END_VAR

STRUCT TANK 
  usiEnabled            : USINT := 1;
  udiFillSpeed          : UDINT := 16#0000FFFF;
  udiLevel              : UDINT := 16#8FFFFFFF;
END_STRUCT

STRUCT OUTPUT 
  usiEnabled            : USINT := 0;
  udiOnTime             : UDINT := 1000;
  udiOffTime            : UDINT := 500;
  usiValue              : USINT := 0; // For HMI, to show the current output state (on/off). Can be written, but value is ignored
  tTimer                : TIMER; // Storage for the timer instance used in output control function.
END_STRUCT

VAR_GLOBAL
  usiCheckboxSample     : UDINT;
  usiToggleSample       : UDINT;
  usiFormSample         : UDINT;
  usiDropdownSample     : UDINT;
  usiButtonSample       : UDINT;
END_VAR

VAR_ALIAS
  ioOUTPUT_1            : ALIAS_IO(Output_Basic_DXP_Output_value_1);
  ioOUTPUT_2            : ALIAS_IO(Output_Basic_DXP_Output_value_2);
  ioOUTPUT_3            : ALIAS_IO(Output_Basic_DXP_Output_value_3);
  ioOUTPUT_4            : ALIAS_IO(Output_Basic_DXP_Output_value_4);
END_VAR

TASK mainTask   
  VAR
    initialized : USINT; 
  END_VAR
  IF (initialized = 0) THEN 
    initialized := 1;
    SYS_GOM_SET_DWORD(16#004900A0, 0, 4); // Allow 4 additional passwords to be used.
  END_IF

  IF (gusiMachineRunning = 0) THEN RETURN; END_IF

  IF (gStTank1.usiEnabled) THEN gStTank1.udiLevel := gStTank1.udiLevel + gStTank1.udiFillSpeed; END_IF  
  IF (gStTank2.usiEnabled) THEN gStTank2.udiLevel := gStTank2.udiLevel + gStTank2.udiFillSpeed; END_IF  
  IF (gStTank3.usiEnabled) THEN gStTank3.udiLevel := gStTank3.udiLevel + gStTank3.udiFillSpeed; END_IF  
  IF (gStTank4.usiEnabled) THEN gStTank4.udiLevel := gStTank4.udiLevel + gStTank4.udiFillSpeed; END_IF  
  IF (gStTank5.usiEnabled) THEN gStTank5.udiLevel := gStTank5.udiLevel + gStTank5.udiFillSpeed; END_IF  
END_TASK 

TASK outputControl 
  ioOUTPUT_1 := OUTPUT_CONTROL(ioOUTPUT_1, gStOutput1);
  ioOUTPUT_2 := OUTPUT_CONTROL(ioOUTPUT_2, gStOutput2);
  ioOUTPUT_3 := OUTPUT_CONTROL(ioOUTPUT_3, gStOutput3);
  ioOUTPUT_4 := OUTPUT_CONTROL(ioOUTPUT_4, gStOutput4);
END_TASK

FUNCTION OUTPUT_CONTROL: USINT
  VAR_INPUT 
    outputValue       : USINT;
  END_VAR
  VAR_IN_OUT
    stOutput          : OUTPUT;
  END_VAR
  VAR
    stOutTestArr    : ARRAY[0..4] OF OUTPUT; // Local array to test if passing structure by reference works correctly.
  END_VAR

  stOutTestArr[0].udiOffTime := stOutTestArr[0].udiOffTime + 1;

  IF (stOutput.usiEnabled & outputValue = 0 & EXPIRED(stOutput.tTimer)) THEN
    OUTPUT_CONTROL := 1;
    START_TIMER(stOutput.tTimer, stOutput.udiOnTime);
  ELSIF (stOutput.usiEnabled & outputValue = 1 & EXPIRED(stOutput.tTimer)) THEN
    OUTPUT_CONTROL := 0;
    START_TIMER(stOutput.tTimer, stOutput.udiOffTime);
  ELSIF (stOutput.usiEnabled = 0) THEN
    START_TIMER(stOutput.tTimer, 0);
    OUTPUT_CONTROL := 0;
  ELSE 
    OUTPUT_CONTROL := outputValue;
  END_IF

  stOutput.usiValue := OUTPUT_CONTROL; // Update the output state for HMI display.
END_FUNCTION