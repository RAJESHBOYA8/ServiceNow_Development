var incidentRecord = new GlideRecord("incident"); //creation of GLIDERECORD OBJECT
incidentRecord.addQuery('category', 'software')
incidentRecord.query(); //ececute query
//print result
while (incidentRecord.next()) {
    gs.info("incident numbers are: " + incidentRecord.number);
}