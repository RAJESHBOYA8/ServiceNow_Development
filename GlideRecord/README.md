# 📂 GlideRecord Script – Fetch Incidents with Category 'Software'

This script demonstrates how to use **GlideRecord** in ServiceNow to query and display incident records where the category is set to `'software'`.

---

## 📜 Script

```javascript
var incidentRecord = new GlideRecord("incident"); // Create GlideRecord object for the 'incident' table
incidentRecord.addQuery('category', 'software');  // Add filter: category = 'software'
incidentRecord.query();                           // Execute the query

while (incidentRecord.next()) {                   // Loop through matching records
    gs.info("incident numbers are: " + incidentRecord.number);
}
🧠 What is GlideRecord?
GlideRecord is a server-side JavaScript class used in ServiceNow to interact with database tables.

It allows developers to:

Query records from a table

Insert new records

Update existing records

Delete records

✅ What This Script Does
Connects to the incident table.

Filters records where category = "software".

Executes the query.

Logs each matching incident number to the system log.

📘 Example Output

*** Script: incident numbers are: INC0010012
*** Script: incident numbers are: INC0010034

📌 Note
This script is intended to run in the ServiceNow Script Editor (like Background Scripts or Business Rules). It will not work in a browser environment.

