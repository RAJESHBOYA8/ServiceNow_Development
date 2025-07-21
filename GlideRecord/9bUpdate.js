//CREATING A NEW RECORD
var glideRecord = new GlideRecord('incident');
glideRecord.addQuery('short_description', 'reset');
glideRecord.setValue('short_description', 'Developer')
glideRecord.updateMultiple(); //updates mutiple records at a time
while (glideRecord.next()) {
    gs.info(glideRecord.number);
}