// null Query
var glideRecord = new GlideRecord('incident')

glideRecord.addNullQuery('description') //to check where description field is null
    // glideRecord.addNotNullQuery -> used for fileds which are not null
glideRecord.query();

while (glideRecord.next()) {
    gs.info("Short Description:" + glideRecord.short_description); //output is to the short_description where description field is null
}
gs.info("total ractive records:" + glideRecord.getRowCount())