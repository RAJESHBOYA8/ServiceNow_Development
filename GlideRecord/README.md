# 📂 GlideRecord Script

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

📌 Note
This script is intended to run in the ServiceNow Script Editor (like Background Scripts or Business Rules).
It will not work in a browser environment.
