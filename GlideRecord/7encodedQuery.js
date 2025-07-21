// Encoded Query
var glideRecord = new GlideRecord('incident')

glideRecord.addEncodedQuery('priority=1^category=software'); //to execute multiple querys
glideRecord.query();

while (glideRecord.next()) {
    gs.info("Short Description:" + glideRecord.short_description);
}
gs.info("total ractive records:" + glideRecord.getRowCount())