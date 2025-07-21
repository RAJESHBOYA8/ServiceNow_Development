// Ascending order and descending order
var glideRecord = new GlideRecord('incident')
glideRecord.addActiveQuery();
glideRecord.setLimit(10);
glideRecord.orderBy('short_description') //Ascending order
    // glideRecord.orderByDesc('')  -> Descending order
glideRecord.query();

while (glideRecord.next()) {
    gs.info("Short Description:" + glideRecord.short_description);
}
gs.info("total ractive records:" + glideRecord.getRowCount())