var dec_oled="#include <Wire.h>\n"+
"#include <SSD1306Wire.h>\n" +
"SSD1306Wire display(0x3c, 18,19);";
var set_oled=
 "display.init();\n"+
  "display.flipScreenVertically();";
  
Blockly.Blocks['oled_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ALIGN_LEFT", "TEXT_ALIGN_LEFT"], ["ALIGN_CENTER", "TEXT_ALIGN_CENTER"], ["ALIGN_RIGHT", "TEXT_ALIGN_RIGHT"]]), "align")
        .appendField(new Blockly.FieldDropdown([["SIZE_10", "ArialMT_Plain_10"], ["SIZE_14", "ArialMT_Plain_14"], ["SIZE_24", "ArialMT_Plain_24"]]), "size");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X")
        .appendField(new Blockly.FieldTextInput("128"), "X")
        .appendField(" ")
        .appendField("Y")
        .appendField(new Blockly.FieldTextInput("64"), "Y");
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("TEXT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#001fff");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_text'] = function(block) {
  var dropdown_align = block.getFieldValue('align');
  var dropdown_size = block.getFieldValue('size');
  var text_x = block.getFieldValue('X');
  var text_y = block.getFieldValue('Y');
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
 Blockly.Arduino.addInclude("oled",dec_oled);
  Blockly.Arduino.addSetup("oled1",set_oled);

var code=  "display.setTextAlignment("+dropdown_align+");\n"+
    "display.setFont("+dropdown_size+");\n"+
    "display.drawString("+text_x+","+text_y+",String("+value_name+"));\n";
 
  return code;
};


Blockly.Blocks['oled_circle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw Circle")
        .appendField("Fill")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X")
        .appendField(new Blockly.FieldTextInput("64"), "X");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y")
        .appendField(new Blockly.FieldTextInput("64"), "Y");
		   this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Radius")
        .appendField(new Blockly.FieldTextInput("5"), "r");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#001fff");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Arduino['oled_circle'] = function(block) {
  var c = block.getFieldValue('NAME') == 'TRUE';
  var x = block.getFieldValue('X');
  var y = block.getFieldValue('Y');
  var r = block.getFieldValue('r');
   Blockly.Arduino.addInclude("oled",dec_oled);
  Blockly.Arduino.addSetup("oled1",set_oled);

  var code = (c==1?"display.fillCircle("+x+","+y+","+r+");":"display.drawCircle("+x+","+y+","+r+");");
  return code;
};


// rect


Blockly.Blocks['oled_rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw Rectangle")
        .appendField("Fill")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X")
        .appendField(new Blockly.FieldTextInput("64"), "X");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y")
        .appendField(new Blockly.FieldTextInput("64"), "Y");
		  this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Height")
        .appendField(new Blockly.FieldTextInput("64"), "h")
		 .appendField("Width")
        .appendField(new Blockly.FieldTextInput("64"), "w");
		  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
        this.setColour("#001fff");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Arduino['oled_rect'] = function(block) {
  var c = block.getFieldValue('NAME') == 'TRUE';
  var x = block.getFieldValue('X');
  var y = block.getFieldValue('Y');
  var height = block.getFieldValue('h');
  var width = block.getFieldValue('w');
    Blockly.Arduino.addInclude("oled",dec_oled);
  Blockly.Arduino.addSetup("oled1",set_oled);

  var code =(c==1?"display.fillRect("+x+","+y+","+height+","+width+");\n":"display.drawRect("+x+","+y+","+height+","+width+");\n");
  return code;
};

 Blockly.Blocks['oled_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw Line");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X")
        .appendField(new Blockly.FieldTextInput("64"), "X");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y")
        .appendField(new Blockly.FieldTextInput("64"), "Y");
		this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Length")
        .appendField(new Blockly.FieldTextInput("12"), "l");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Vertical", "2"], ["Horizontal", "1"]]), "state");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#001fff");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_line'] = function(block) {
  var text_x = block.getFieldValue('X');
  var l = block.getFieldValue('l');
  var text_y = block.getFieldValue('Y');
  
  var dropdown_state = block.getFieldValue('state');
 var h= " display.drawHorizontalLine("+text_x+","+text_y+","+l+");\n";
 var v= "  display.drawVerticalLine("+text_x+","+text_y+","+l+");\n";
  Blockly.Arduino.addInclude("oled",dec_oled);
  Blockly.Arduino.addSetup("oled1",set_oled);

  var code = '';
if(dropdown_state=='1')
code=h;
else 
code=v;
  return code;
};


Blockly.Blocks['oled_dot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw DotPixel");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X")
        .appendField(new Blockly.FieldTextInput("128"), "X");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y")
        .appendField(new Blockly.FieldTextInput("64"), "Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#001fff");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Arduino['oled_dot'] = function(block) {
  var text_x = block.getFieldValue('X');
  var text_y = block.getFieldValue('Y');
   Blockly.Arduino.addInclude("oled",dec_oled);
  Blockly.Arduino.addSetup("oled1",set_oled);

  var code = "display.setPixel("+text_x+","+text_y+");";
  return code;
};

Blockly.Blocks['oled_col'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("COLOR")
        .appendField(new Blockly.FieldDropdown([["WHITE", "WHITE"], ["BLACK", "BLACK"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
     this.setColour("#001fff");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_col'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var code = "display.setColor("+dropdown_name+");";
   Blockly.Arduino.addInclude("oled",dec_oled);
  Blockly.Arduino.addSetup("oled1",set_oled);

  return code;
};

Blockly.Blocks['oled_update'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("* Display Show");         
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
     this.setColour("#001ff1");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_update'] = function(block) {
 
   Blockly.Arduino.addInclude("oled",dec_oled);
  Blockly.Arduino.addSetup("oled1",set_oled);

  return " display.display();\n";
};

Blockly.Blocks['oled_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Display Clear");         
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
     this.setColour("#001fff");
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_clear'] = function(block) {
 
   Blockly.Arduino.addInclude("oled",dec_oled);
  Blockly.Arduino.addSetup("oled1",set_oled);

  return " display.clear();\n";
};