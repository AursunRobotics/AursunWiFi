
function no(a,value)
{
	   return ' <value name="'+a+'">'+
       '   <shadow type="math_number">'+
       '     <field name="NUM">'+value+'</field>'+
       '   </shadow>'+
       ' </value>';
}
  function text(a,value)
{
	   return ' <value name="'+a+'">'+
       '   <shadow type="text">'+
       '     <field name="TEXT">'+value+'</field>'+
       '   </shadow>'+
       ' </value>';
	   
}
function state(a,value)
{
	if(value==1)
	return ' <value name="'+a+'">'+
       '   <shadow type="io_highlow">'+
       '     <field name="STATE">'+'HIGH'+'</field>'+
       '   </shadow>'+
       ' </value>';
	   if(value==0)
	return ' <value name="'+a+'">'+
       '   <shadow type="io_highlow">'+
       '     <field name="STATE">'+'LOW'+'</field>'+
       '   </shadow>'+
       ' </value>';

}
///////////////////////////////////////////////////////////
var data="";
var arduino=
' <xml id="toolbox" style="display: none">' +
'  <category colour="#FF5722"  name="Input/Output">'+
'    <block type="io_digitalwrite">' +
state('STATE',1)+
'    </block>' +

'    <block type="io_digitalread"></block>' +

'    <block type="io_builtin_led">' +
state('STATE',1)+
'    </block>' +

'    <block type="io_analogwrite">'+
no('NUM','10')+
'</block>' +
'    <block type="io_analogread"></block>' +
'    <block type="io_highlow"></block>' +
'    <block type="var_1"></block>' +
'    <block type="variables_get"></block>' +
'</category>'+

'    <category colour="#E123FF" name="Cretile">' +
'    <block  type="cretile_start"></block>' +
'    <block  type="cretile_start1"></block>' +
'    <block  type="cretile_start2"></block>' +
'    <block  type="cretile_start3"></block>' +
'    <block  type="cretile_start4"></block>' +

'    <block type="cretile_input">'+no('in','1')+'</block>' +
'    <block type="cretile_out">'+
no('output','1')+
no('value','100')+
'</block>' +
'    </category>'+
'  <category colour="#E91E63" name="Logic !">' +
'    <block  type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="bitwise_"></block>' +
'    <block type="convert_to"></block>' +

'    <block type="logic_operation"></block>'+
'    <block type="logic_negate">'
+'</block>' +
'    <block type="logic_boolean"></block>' +
'    <block type="logic_null"></block>' +
'    <block type="increment_">'+
no('before','1')+
'</block>' +
'    <block type="decrement_">'+
no('before','1')+
'</block>' +
'  </category>' +

'  <category name="Variable" colour="#9C27B0" custom="VARIABLE">'+

'</category>'+
/////////////////////   Control 
'  <category colour="#009688" name="Control">' +
/*
'    <block type="for_1">'+
no('a','100')+
no('b','101')+
no('c','102')+
'</block>' +
*/
'    <block type="while_1">'+
no('a','100')+
'</block>' +
'    <block type="controls_repeat_ext">' +
no('TIMES','10')+
'    </block>' +
'    <block type="controls_whileUntil">'+
'</block>' +
'    <block type="controls_for">' +
no('FROM','1')+
no('TO','2')+
no('BY','1')+
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'  </category>' +

'  <category id="catMath" colour="#8BC34A" name="Math">' +
'    <block id="cat" type="math_number"></block>' +
'    <block type="math_arithmetic"></block>' +
'    <block type="math_single"></block>' +
'    <block type="math_trig"></block>' +
'    <block type="math_constant"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="include_"></block>' +
'    <block type="math_change">' +
'      <value name="DELTA">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_round"></block>' +
'    <block type="math_modulo"></block>' +
'    <block type="math_constrain">' +
'      <value name="LOW">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="HIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_int">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_float"></block>'+
'  </category>' +

'  <category id="catText" colour="#CDDC39" name="Text">' +
'    <block type="text"></block>' +
'    <block type="text_join"></block>' +
'    <block type="text_append">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="text_length"></block>' +
'    <block type="text_isEmpty"></block>' +
//'    <!--block type="text_trim"></block Need to update block -->' +
//'    <!--block type="text_print"></block Part of the serial comms -->' +
'  </category>' +

'  <category id="catFunctions" colour="#FFC107" name="Functions" custom="PROCEDURE">'+

'</category>' +


'<category colour="#795548" name="Time">'+
'    <block type="time_micros">'+
no('DELAY_TIME_MICRO','1000')+
'</block>'+
'    <block type="infinite_loop"></block>'+
'    <block type="time_delaymicros"></block>'+
'    <block type="time_millis"></block>'+
'    <block type="delay_time">'+
no('delay','100')+
'</block>' +
'</category>'+


/*
'<category name="Android Apps">'+

'<category name="Automation(IOT)">'+
'</category>'+

'<category name="Arduino Serial">'+
'</category>'+

'<category name="Mobile Robot">'+
'</category>'+

'<category name="Mobile Sensors">'+
'</category>'+

'<category name="Virtual Sheld">'+
'</category>'+

'<category name="ESP8266 IOT">'+
'</category>'+
'</category>'+
*//*

'<category colour="#00c066" name="『 1 』  𝐒𝐞𝐧𝐬𝐨𝐫𝐬">'+



'<category  colour="#00c066" name="𝐌𝐨𝐭𝐢𝐨𝐧 𝐒𝐞𝐧𝐬𝐨𝐫 ">'+
'    <block type="motion_detect"></block>' +
'</category>'+
/*
'<category  colour="#00c066" name="𝐒𝐩𝐞𝐞𝐝 𝐃𝐞𝐭𝐞𝐜𝐭𝐨𝐫">'+
'    <block type="speed_detect"></block>' +
'</category>'+
*//*
'<category colour="#00c066"   name="𝐒𝐨𝐮𝐧𝐝 𝐃𝐞𝐭𝐞𝐜𝐭𝐨𝐫">'+
'    <block type="sound_detect"></block>' +
'</category>'+

'<category  colour="#00c066" name="𝐋𝐢𝐠𝐡𝐭 𝐒𝐞𝐧𝐬𝐨𝐫">'+
'    <block type="ldr"></block>' +
'</category>'+

'<category colour="#00c066"  name="𝐈𝐑">'+
'    <block type="ir_detect"></block>' +
'</category>'+


'<category  colour="#00c066" name="𝐀𝐜𝐜𝐞𝐫𝐨𝐦𝐞𝐭𝐞𝐫">'+
'    <block type="acc_x"></block>' +
'    <block type="acc_y"></block>' +
'   <block type="acc_z"></block>' +
'</category>'+

'<category colour="#00c066"  name=" 𝐓𝐞𝐦𝐩𝐞𝐫𝐚𝐭𝐮𝐫𝐞">'+
'    <block type="temp_read"></block>' +
'</category>'+

/*
'<category name=" 𝐑𝐚𝐢𝐧 𝐃𝐫𝐨𝐩 𝐒𝐞𝐧𝐬𝐨𝐫">'+
'    <block type="rain_drop"></block>' +
'</category>'+
*/
/*
'<category name=" 𝐅𝐥𝐞𝐱 𝐒𝐞𝐧𝐬𝐨𝐫">'+
'    <block type="flex_sensor"></block>' +
'</category>'+
*/
/*
'<category name=" 𝐏𝐮𝐥𝐬𝐞 𝐑𝐚𝐭𝐞 𝐒𝐞𝐧𝐬𝐨𝐫">'+
'    <block type="pulse_sensor"></block>' +
'</category>'+ 
*/
/*
'<category name="𝐀𝐢𝐫 𝐐𝐮𝐚𝐥𝐢𝐭𝐲 𝐒𝐞𝐧𝐬𝐨𝐫">'+
'    <block type="air_quality"></block>' +
'</category>'+

*/
/*
'<category name=" 𝐆𝐚𝐬 𝐒𝐞𝐧𝐬𝐨𝐫 ">'+
'    <block type="gas_sensor"></block>' +
'</category>'+  *//*
'<category  colour="#00c066"  name=" 𝐇𝐮𝐦𝐢𝐝𝐢𝐭𝐲 𝐒𝐞𝐧𝐬𝐨𝐫 ">'+
'    <block type="humidty"></block>' +
'</category>'+

/*
'<category name="𝐌𝐚𝐠𝐧𝐞𝐭𝐨𝐦𝐞𝐭𝐞𝐫">'+
'    <block type="mag_x"></block>' +
'    <block type="mag_y"></block>' +
'    <block type="mag_z"></block>' +
'</category>'+

*//*
'<category colour="#00c066"   name="𝐔𝐥𝐭𝐫𝐚𝐬𝐨𝐧𝐢𝐜 𝐒𝐞𝐧𝐬𝐨𝐫">'+
'    <block type="ultrasonic"></block>' +
'</category>'+
*/
/*
'<category name="𝐂𝐚𝐩𝐚𝐜𝐢𝐭𝐢𝐯𝐞 𝐓𝐨𝐮𝐜𝐡 𝐒𝐞𝐧𝐬𝐨𝐫">'+
'</category>'+
'<category name="𝐏𝐢𝐞𝐳𝐨𝐞𝐥𝐞𝐜𝐭𝐫𝐢𝐜 𝐏𝐥𝐚𝐭𝐞 ">'+
'</category>'+

'<category name=" 𝐌𝐞𝐭𝐚𝐥 𝐓𝐨𝐮𝐜𝐡 𝐒𝐞𝐧𝐬𝐨𝐫">'+
'</category>'+

*//*
'<category colour="#00c066"  name=" 𝐌𝐨𝐢𝐬𝐭𝐮𝐫𝐞 𝐒𝐞𝐧𝐬𝐨𝐫 ">'+
'    <block type="mositure_"></block>' +
'</category>'+


'</category>'+

*/

'<category colour="#FF99CC" name="Wireless Networks">'+
'  <sep></sep>' +
'<category colour="#FF99CC"  name="Bluetooth">'+
'<block type="blue_preset"></block>'+
'<block type="bluetooth_settings"></block>'+
'<block type="bluetooth_write">'+
text('send','?')+
'</block>'+
'<block type="bluetooth_read"></block>'+
'</category>'+
'  <sep></sep>' +
'<category colour="#FF99CC"  name="2.4Ghz RF">'+
'<block type="blue_preset"></block>'+
'<block type="bluetooth_settings"></block>'+
'<block type="bluetooth_write">'+
text('send','?')+
'</block>'+
'<block type="bluetooth_read"></block>'+
'</category>'+
'  <sep></sep>' +
'</category>'+

/*
'<category name="𝐄𝐒𝐏𝟖𝟐𝟔𝟔">'+
'</category>'+

*//*
'<category colour="#FF99CC"  name="𝐈𝐑 𝐑𝐞𝐦𝐨𝐭𝐞">'+
'<block type="ir_read"></block>'+
'</category>'+
'</category>'+
*/
'<category colour ="#00CCCC"  name="LCD">'+
'    <block type="lcd_settings"></block>' +
'    <block type="lcd_clear"></block>' +
'    <block type="lcd_right">'+
no('speed','10')+
'</block>' +
'    <block type="lcd_left">'+
no('speed','10')+
'</block>' +
'    <block type="lcd_light">'+
state('on_pos',1)+
'</block>' + 

'    <block type="lcd_println">'+
text('show_text','?')+
'</block>' + 
'</category>'+

/*
//'<category name="  🆂🅴🅽🆂🅾🆁🆂">'+

'<category colour="#FF9999" id= "toolbox" name="𝐑𝐆𝐁 𝐋𝐄𝐃">'+
'    <block type="rgb_settings">'+
no('red_','10')+
no('blue_','10')+
no('green_','10')+

'</block>' +
'    <block type="rgb_light">'+
no('red_','10')+
no('blue_','10')+
no('green_','10')+

'</block>' +
'    <block type="rgb_blink">'+
no('red','10')+
no('blue','11')+
no('green','12')+

'</block>' +
'    <block type="rgb_on">'+
no('Delay','10')+
'</block>' +
'    <block type="rgb_off">'+
no('Delay','10')+
'</block>' +
'    <block type="rgb_brightness">'+
no('brightness','10')+
'</block>' +
'    <block type="rgb_fadein">'+
no('step','9')+
no('red','10')+
no('blue','11')+
no('time','9')+
no('green','12')+
'</block>' +
'    <block type="rgb_fadeout">'+
no('time','9')+
no('step','1')+
no('red','10')+
no('blue','11')+
no('green','12')+
'</block>' +
'</category>'+
*/
'<category colour="#990033" name="8x8 Dot matrix Display">'+

'<block type="dot_setting"></block>'+
'<block type="digit_show">'+
no('NAME','5')+

'</block>'+
'<block type="dot_off"></block>'+
'<block type="dot_on"></block>'+

'<block type="dot_brit">'+
no('NAME','100')+
'</block>'+
'<block type="dot_scroll">'+
no('speed','100')+
text('text','AURSUN')+
'</block>'+
'<block type="dot_set">'+
no('X','1')+
no('Y','1')+
no('chip','1')+
state('state',1)+
'</block>'+
'<block type="dot_clear">'+

'</block>'+

'</category>'+
'<category colour="345" name="MPU6050">'+
'<category colour="345" name="Accerometer">'+
'<block type="accerometer_x">'+
'</block>'+
'<block type="accerometer_y">'+
'</block>'+
'<block type="accerometer_z">'+
'</block>'+
'<block type="acc_angle_x">'+
'</block>'+
'<block type="acc_angle_y">'+
'</block>'+
'</category>'+
'  <sep></sep>' +
'<category colour="345" name="Tempreature">'+
'<block type="accerometer_temp">'+
'</block>'+
'</category>'+
'  <sep></sep>' +
'<category colour="345" name="Gyroscope">'+
'<block type="gyro_x">'+
'</block>'+
'<block type="gyro_y">'+
'</block>'+
'<block type="gyro_z">'+
'</block>'+
'<block type="gyro_angle_x">'+
'</block>'+
'<block type="gyro_angle_y">'+
'</block>'+
'<block type="gyro_angle_z">'+
'</block>'+
'</category>'+
'  <sep></sep>' +
'<category colour="345" name="Angle">'+
'<block type="angle_x">'+
'</block>'+
'<block type="angle_y">'+
'</block>'+
'<block type="angle_z">'+
'</block>'+
'</category>'+
'  <sep></sep>' +
'</category>'+
/*
'<category colour ="#00FF77" name="𝐉𝐨𝐲𝐬𝐭𝐢𝐜𝐤">'+
'    <block type="joystick_settings"></block>' +
'<block type="joystick_x"></block>'+
'<block type="joystick_y"></block>'+
'<block type="joystick_up"></block>'+
'<block type="joystick_down"></block>'+
'<block type="joystick_left"></block>'+
'<block type="joystick_right"></block>'+
'<block type="joystick_button"></block>'+


'</category>'+
*/
/*
 
'<category  colour="#339999" name="🅺🅴🆈🅿🅰🅳">'+
'<block type="keypad_settings"></block>'+

'</category>'+
 
'<category  colour="#339999" name="GPS">'+
'</category>'+

*/
  
'<category   colour ="210" name="Ultrasonic">'+
'<block type="read_sense">'+
'</block>'+
'</category>'+

'<category   colour ="333" name="Button">'+
'<block type="button_settings">'+
'</block>'+
'<block type="button_clicked">'+
'</block>'+
'<block type="button_double_click">'+
'</block>'+
'<block type="button_pressed">'+
'</block>'+
'<block type="button_released">'+
'</block>'+
'<block type="button_hold">'+
'</block>'+
'<block type="button_long_hold">'+
'</block>'+
'</category>'+
'<category colour="#FF99CC"  name="Serial">'+
'<block type="serial_settings"></block>'+
'<block type="serial_pre"></block>'+
'<block type="serial_read">'+
'</block>'+
'<block type="serial_write">'+
text('TEXT','Hello')+

'</block>'+
'<block type="serial_write_only">'+
text('TEXT','Hello')+

'</block>'+

'</category>'+
'<category   colour ="#000000" name="Buzzer">'+
'<block type="buzzer_tone1233">'+
'</block>'+
'<block type="buzzer_notone1233">'+
'</block>'+
'</category>'+

'<category   colour ="#FF4500" name="Android Phone">'+
'<category   colour ="#FF4500" name="Bluetooth Remote">'+
'<block type="robot_start"></block>'+
'<block type="android_read">'+'</block>'+
'<block type="forward_press">'+'</block>'+
'<block type="backward_press">'+'</block>'+
'<block type="left_press">'+'</block>'+
'<block type="right_press">'+'</block>'+
'<block type="is_idle">'+'</block>'+
'<block type="buzzer_press">'+'</block>'+
'<block type="light_press">'+'</block>'+
'<block type="forward_rel">'+'</block>'+
'<block type="backward_rel">'+'</block>'+
'<block type="left_rel">'+'</block>'+
'<block type="right_rel">'+'</block>'+
'<block type="light_rel">'+'</block>'+
'<block type="voice">'+'</block>'+
'<block type="buzzer_rel">'+'</block>'+

'</category>'+
'  <sep></sep>' +
'</category>'+
'<category   colour ="#FF4500" name="Robot">'+
'<block type="robot_start"></block>'+
'<block type="forward_move_motor">'+'</block>'+
'<block type="backward_move_motor">'+'</block>'+
'<block type="left_move_motor">'+'</block>'+
'<block type="right_move_motor">'+'</block>'+
'<block type="stop_move_motor">'+'</block>'+
'<block type="light_on_motor">'+'</block>'+
'<block type="light_off_motor">'+'</block>'+
'<block type="Buzzer_on_motor">'+'</block>'+
'<block type="Buzzer_off_motor">'+'</block>'+
'</category>'+

/*

'<category colour="#663300" name=" 𝐏𝐎𝐓">'+
'<block type="pot_detect"></block>'+
'</category>'+
/*

//'</category>'+
'<category colour="#FFEB3B" name="𝐋𝐄𝐃">'+
'    <block type="led_check"></block>' +
'    <block type="led_fade">'+
'      <value name="up_time">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="on_time">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="stop_time">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="times">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="off_time">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="digit">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'</block>' +

'    <block type="led_on">'+'</block>' +
'    <block type="led_off">'+'</block>' +

'    <block type="led_blink">'+
'      <value name="on">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="off">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="times">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'</block>' +
'</category>'+

'<category colour="#D2F34B" name=" 𝐑𝐅𝐈𝐃" >'+
'<block type="RFID"> </block>'+    // RFID READ
'</category>'+
' <sep></sep>' +
'<category colour ="#4BC7F3" name="𝐁𝐮𝐳𝐳𝐞𝐫 ">'+
'<block type="buzzer_tone"></block>'+
'<block type="buzzer_notone"></block>'+
'<block type="buzzer_on"></block>'+
'<block type="buzzer_off"></block>'+

'<block type="buzzer_on">'+
'      <value name="freq">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="time">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +

'</block>'+
'<block type="buzzer_off">'+
'</block>'+
'</category>'+


/*
'<category name=" 𝐋𝐚𝐬𝐞𝐫 𝐃𝐢𝐨𝐝𝐞 𝐄𝐦𝐢𝐭𝐭𝐞𝐫">'+
'</category>'+


'<category name="𝐆𝐒𝐌">'+
'</category>'+
'<category name=" 𝐆𝐏𝐒 ">'+
'</category>'+



'<category name=" 𝐑𝐞𝐥𝐚𝐲 𝐂𝐨𝐧𝐭𝐫𝐨𝐥𝐥𝐞𝐫 ">'+
'</category>'+

'<category name=" 𝐕𝐢𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐌𝐨𝐭𝐨𝐫">'+
'</category>'+


'<category name="𝐒𝐨𝐮𝐧𝐝 𝐏𝐥𝐚𝐲𝐛𝐚𝐜𝐤 𝐌𝐨𝐝𝐮𝐥𝐞">'+
'</category>'+


'<category name="𝐖𝐚𝐭𝐞𝐫 𝐏𝐮𝐦𝐩 𝐌𝐨𝐝𝐮𝐥𝐞">'+
'</category>'+

*/
'<category colour="#00FF91" name=" 𝐒𝐞𝐫𝐯𝐨">'+
'<block type="servo_write">'+
'      <value name="SERVO_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'</block>'+
'<block type="servo_read"></block>'+
'</category>'+

'</xml>';



/////////////////////////////////

data=arduino;