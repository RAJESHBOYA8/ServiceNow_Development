//Total records count
var glideRecord = new GlideRecord('incident');
glideRecord.addQuery('short_description', 'CONTAINS', 'email');
glideRecord.query();
gs.info("Total Records :" + glideRecord.getRowCount())