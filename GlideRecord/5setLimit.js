//to view few records
var glideRecord = new GlideRecord('incident')
glideRecord.addActiveQuery();
glideRecord.setLimit(10);
glideRecord.query();
gs.info("total ractive records:" + glideRecord.getRowCount())