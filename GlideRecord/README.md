# 🧾 ServiceNow GlideRecord Examples

This repository contains a collection of **GlideRecord** script examples used in ServiceNow to perform various database operations on the `incident` table.

Each script is written in server-side JavaScript and intended for use in Background Scripts, Business Rules, or Script Includes.

---

## 🔹 Script Summary

### 1. **Basic Query by Category**
Fetches all incidents where the category is set to `software`.

### 2. **CONTAINS Operator**
Finds incidents where the short description contains a specific keyword (e.g., "email").

### 3. **Total Record Count**
Counts the number of incidents matching a specific condition using `getRowCount()`.

### 4. **Active Records Only**
Uses `addActiveQuery()` to return only active incidents.

### 5. **Limit Returned Records**
Limits the number of results returned using `setLimit()`.

### 6. **Order Results**
Sorts incidents based on the `short_description` field in ascending or descending order.

### 7. **Encoded Query**
Uses `addEncodedQuery()` to combine multiple conditions in a single query string.

### 8. **Null and Not Null Checks**
Fetches records where a field (like `description`) is null or not null.

### 9. **Insert, Update, and Retrieve Records**
- **9a**: Inserts a new record into the `incident` table.
- **9b**: Updates multiple records matching a specific condition.
- **9c**: Retrieves a record by its `sys_id` using the `get()` method.

---

## 📌 Usage

These examples are meant for learning and demonstration purposes. Always test in a **sub-production** environment before deploying scripts to production instances.

---

## 📚 Topics Covered

- GlideRecord Query Methods
- Filtering with `addQuery()`, `addActiveQuery()`, and `addEncodedQuery()`
- Record manipulation: Insert, Update, Get
- Sorting and limiting results
- Null/Not Null field checks

---

## 📂 Folder Structure

- `gliderecord_examples/` — Contains `.js` files for each example
- `README.md` — Brief explanation of each script

---

## 🙌 Contributions

Feel free to fork the repo and add more GlideRecord use cases like `GlideAggregate`, `deleteMultiple()`, or queries on custom tables.

---

