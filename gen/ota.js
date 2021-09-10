var wireless_setup11='IPAddress ip(192,168,4,1);'+
 'IPAddress netmask(255, 255, 255, 0);'+
 'WiFi.mode(WIFI_AP);'+
 'WiFi.softAP("autoaim","");'+
 'delay(2000);'+
 'WiFi.softAPConfig(ip, ip, netmask);'+
 'ArduinoOTA.onStart([]() { String type; if (ArduinoOTA.getCommand() == U_FLASH) type = "sketch";else type = "filesystem";}).onEnd([]() {}).onProgress([](unsigned int progress, unsigned int total) { }).onError([](ota_error_t error){}); ArduinoOTA.begin();';
 
Blockly.Blocks['wireless'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("           Wireless Mode        ");
    this.appendStatementInput("setup")
        .setCheck(null)
        .appendField("Setup");
    this.appendStatementInput("loop")
        .setCheck(null)
        .appendField("Loop");
  
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['wireless'] = function(block) {
  


	  var statements_setup = Blockly.Arduino.statementToCode(block, 'setup');
	  var statements_loop = Blockly.Arduino.statementToCode(block, 'loop');
	
	     Blockly.Arduino.addSetup("ap_connected","\n"+
		 wireless_setup11+statements_setup);
         Blockly.Arduino.addInclude("ap_connected1",
		 "#include <esp_wifi.h>\n#include <WiFi.h> \n#include <ArduinoOTA.h>");		

		 return "ArduinoOTA.handle();\n"+statements_loop;
 };
 