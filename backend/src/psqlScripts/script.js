const sql = require('./db.js')
const csv = require('csv-parser');
const fs = require('fs');

// sql``.then(res => console.log(res))

// ######################################### 1
// sql`
// DROP TABLE IF EXISTS OPEN_SOURCE_PROJECTS;
// `.then(res => console.log(res))

// sql`
// CREATE TABLE OPEN_SOURCE_PROJECTS (
// projectID int,
// name varchar(255), 
// url varchar(255),
// language varchar(255),
// created_Since int,
// updated_Since int,
// contributor_Count int,
// org_Count int,
// commit_Frequency real,
// recent_Releases_Count int,
// updated_Issues_Count int,
// closed_Issues_Count int,
// comment_Frequency real,
// dependents_Count int,
// criticality_Score real
// );
// `.then(res => console.log(res))



// ######################################### 2: run 1 before 2
// let i = 0;
// fs.createReadStream('./open_source_projects.csv')
//   .pipe(csv())
//   .on('data', (row) => {
//     sql`
//       INSERT INTO OPEN_SOURCE_PROJECTS (
//         projectid, 
//         name,
//         url, 
//         language, 
//         created_Since, 
//         updated_Since, 
//         contributor_Count, 
//         org_Count,
//         commit_Frequency, 
//         recent_Releases_Count, 
//         updated_Issues_Count,
//         closed_Issues_Count,
//         comment_Frequency,
//         dependents_Count,
//         criticality_Score
//       )
//       VALUES(
//         ${i}, 
//         ${row['name']},
//         ${row['url']}, 
//         ${row['language']}, 
//         ${row['created_since']}, 
//         ${row['updated_since']}, 
//         ${row['contributor_count']}, 
//         ${row['org_count']},
//         ${row['commit_frequency']}, 
//         ${row['recent_releases_count']}, 
//         ${row['updated_issues_count']},
//         ${row['closed_issues_count']},
//         ${row['comment_frequency']},
//         ${row['dependents_count']},
//         ${row['criticality_score']}
//       );
//     `.then(res => console.log(res));
//     i += 1;
//   })
//   .on('end', () => {
//     sql``.then(res=>console.log(res, i));
//   });

// sql`
// SELECT * FROM OPEN_SOURCE_PROJECTS
// `.then(res => console.log(res));