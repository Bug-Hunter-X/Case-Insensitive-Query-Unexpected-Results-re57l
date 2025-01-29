```javascript
//For accurate case-insensitive search, use the $regex operator with the i flag
const query = { name: { $regex: 'John', $options: 'i' } };

db.collection('users').find(query).toArray((err, result) => {
  if (err) throw err;
  console.log(result); // Outputs users with names exactly matching 'John' regardless of case
});
```