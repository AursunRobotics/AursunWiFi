	var name='"autoaim"';
	var pass='""';
	
	var setupwi=
" "+
"#include <WiFiClient.h>\n #include <WiFi.h>\n"+
"WiFiServer  server(123);\n"+
"WiFiClient TCPClient;\n"+
"";
		 
  var dewi= "\nIPAddress ip(192,168,4,1);"+
      " \n IPAddress netmask(255, 255, 255, 0); "+
      "\n WiFi.mode(WIFI_AP);\n"+
      " WiFi.softAP("+name+","+pass+"); \n "+
      " delay(2000); \n"+
      " WiFi.softAPConfig(ip, ip, netmask); \n server.begin(); ";

Blockly.Arduino['ap_connected'] = function(block)
{
	   

  var statements_name = Blockly.Arduino.statementToCode(block, 'NAME');
  
  var code =  
 '\nWiFiClient client=server.available();\n '+
   'if (client) \n { \n while (client.connected())\n '+
  '{\n' +
     statements_name+
  ' } \n '+
  'client.stop();\n }';

	Blockly.Arduino.addSetup("ap_connected",dewi);
	Blockly.Arduino.addDeclaration("ap_connected1",setupwi);
	  
 
  return code;
};

Blockly.Arduino['ap_read'] = function(block) {

 
	 
	Blockly.Arduino.addSetup("ap_connected",dewi);
	Blockly.Arduino.addDeclaration("ap_connected1",setupwi);
	  
  var code = "client.readStringUntil('#')";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

 
 
Blockly.Arduino['ap_write'] = function(block)
{
 
	Blockly.Arduino.addSetup("ap_connected",dewi);
	Blockly.Arduino.addDeclaration("ap_connected1",setupwi);
	  
   var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_NONE);
  var code = 'client.println('+value_name+');';
  return code;
};

Blockly.Arduino['ap_exit'] = function(block) 
{
	Blockly.Arduino.addSetup("ap_connected",dewi);
	Blockly.Arduino.addDeclaration("ap_connected1",setupwi);
	  
   var code = 'client.available()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};
