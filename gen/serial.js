 
Blockly.Blocks['serial_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Serial Settings ");
    this.appendDummyInput()
        .appendField("Baud ")
        .appendField(new Blockly.FieldTextInput("115200"), "baud");
    this.setColour("#001aaa");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['serial_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Serial read");
    this.setOutput(true);
    this.setColour("#001aaa");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['serial_send'] = {
  init: function() 
  {
    this.appendValueInput("NAME")
        .appendField("Serial Write");
    this.setPreviousStatement(true);
    this.setNextStatement(true); 
	this.setColour("#001aaa");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
 

Blockly.Blocks['serial_exit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Serial exit");
    this.setOutput(true);
    this.setColour("#001aaa");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

var text_baud='115200';

Blockly.Arduino['serial_set'] = function(block)
 {	
      text_baud = block.getFieldValue('baud');  
       Blockly.Arduino.addSetup("j12","Serial.begin("+text_baud+");");

  var code = '';
  return code;
};

Blockly.Arduino['serial_read'] = function(block) {
  Blockly.Arduino.addSetup("j12","Serial.begin("+text_baud+");");

  var code = "Serial.readStringUntil('#')";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['serial_send'] = function(block) 
{
   Blockly.Arduino.addSetup("j12","Serial.begin("+text_baud+");");

   var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_NONE);
 
  var code = 'Serial.println('+value_name+');';
  return code;
};

Blockly.Arduino['serial_exit'] = function(block) {
   Blockly.Arduino.addSetup("j12","Serial.begin("+text_baud+");");

  var code = 'Serial.available()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};