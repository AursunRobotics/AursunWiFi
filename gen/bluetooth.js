Blockly.Arduino['b_start'] = function(block)
{ 
      Blockly.Arduino.addInclude("b_start_inc","#include\"BluetoothSerial.h\"\n");
      Blockly.Arduino.addDeclaration("b_start_144","BluetoothSerial SerialBT;");
      Blockly.Arduino.addSetup("b_start_144i","SerialBT.begin(\""+block.getFieldValue('NAME')+"\");");
      return "// Blutooth started !";
};

Blockly.Arduino['b_start_read'] = function(block) 
{
	  Blockly.Arduino.addInclude("b_start_inc","#include\"BluetoothSerial.h\"\n");
      Blockly.Arduino.addDeclaration("b_start_144","BluetoothSerial SerialBT;");
  var code = "SerialBT.readStringUntil('#')";
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['b_start_exit'] = function(block) 
{  Blockly.Arduino.addInclude("b_start_inc","#include\"BluetoothSerial.h\"\n");
      Blockly.Arduino.addDeclaration("b_start_144","BluetoothSerial SerialBT;");
   var code = 'SerialBT.available()';
  return [code, Blockly.Arduino.ORDER_NONE];
};


Blockly.Arduino['b_start_write'] = function(block) {
    Blockly.Arduino.addInclude("b_start_inc","#include\"BluetoothSerial.h\"\n");
      Blockly.Arduino.addDeclaration("b_start_144","BluetoothSerial SerialBT;");var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = ' SerialBT.println(String('+value_name+'));';
  return code;
};
