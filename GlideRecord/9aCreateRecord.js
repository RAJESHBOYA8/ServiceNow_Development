//CREATING A NEW RECORD
var glideRecord = new GlideRecord('incident');
glideRecord.intialize(); //record will be created
glideRecord.caller_id = "Rajesh"
glideRecord.short_description = "HI This is Raj";
var test = glideRecord.insert();
gs.info(test); //sys_ID