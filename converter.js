const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

// Path to your CSV file
const csvFilePath = path.join(__dirname, 'jup_release_schedule.csv');

// Convert CSV to JSON and save it
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    fs.writeFileSync(
      path.join(__dirname, 'jup_release_schedule.json'),
      JSON.stringify({ data: jsonObj }, null, 2)
    );
    console.log('✅ Converted CSV to JSON successfully!');
  })
  .catch((error) => {
    console.error('❌ Error during conversion:', error);
  });