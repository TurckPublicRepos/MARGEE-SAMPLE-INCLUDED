VAR_GLOBAL       
    reg1 : UDINT;
    reg2 : UINT;
    reg3 : INT;
    toggleExecute : USINT := 1;
    execute : USINT;
END_VAR   

TASK mainTask   
  VAR
    initialized : USINT; 
  END_VAR
  IF (initialized = 0) THEN 
    initialized := 1;
    //With the below call we allow 4 additional passwords to be used.
    SYS_GOM_SET_DWORD(16#004900A0, 0, 4); 
  END_IF
  
  IF (toggleExecute) THEN 
    toggleExecute := 0; 
    execute := !execute; //Note this is a bitwise not!
  END_IF
  IF (execute = 0) THEN RETURN; END_IF

  reg1 := reg1 + 123456;
  reg2 := reg2 + 2; 
  reg3 := reg3 - 1;  
END_TASK 

TASK circumferenceTask 
  VAR
    radius : REAL := 2.5; 
    circumference : REAL;
  END_VAR
    circumference := radius * 2.0 * 3.14;
END_TASK

TASK communication 
  PLC_OUT_reg1 := reg1; 
  PLC_OUT_reg2 := reg2; 
  PLC_OUT_reg3 := TO_UINT(reg3); 
  PLC_OUT_executeState := execute;

  IF R_TRIG(PLC_IN_toggleExecute) THEN toggleExecute := 1; END_IF
END_TASK
