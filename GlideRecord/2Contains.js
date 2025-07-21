//Contains - method of gliderecord
var glideRecord = new GlideRecord('incident');
glideRecord.addQuery('short_description', 'CONTAINS', 'email'); //contains
glideRecord.query();
while (glideRecord.next()) {
    gs.info("The NUmbers is : " + glideRecord.numbers)
}