//activeQuery
var glideRecord = new GlideRecord('incident')
    //glideRecord.addQuery('active',true)
glideRecord.addActiveQuery();
glideRecord.query();
gs.info("total ractive records:" + glideRecord.getRowCount())