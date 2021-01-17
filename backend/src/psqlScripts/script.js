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
// project_id int,
// name varchar(255),
// full_name varchar(255),
// url varchar(255),
// language varchar(255),
// created_since int,
// updated_since int,
// contributor_count int,
// org_count int,
// commit_frequency real,
// recent_releases_Count int,
// updated_issues_Count int,
// closed_issues_Count int,
// comment_frequency real,
// dependents_count int,
// criticality_score real
// );
// `.then(res => console.log(res))



// ######################################### 2: run 1 before 2
// let i = 0;
// fs.createReadStream('./open_source_projects.csv')
//   .pipe(csv())
//   .on('data', async (row) => {

//     const git = 'github.com'
//     const url = row['url'];
//     const idx = url.indexOf(git);
//     const fullName = url.substring(idx + git.length + 1);
//     console.log('fullName', fullName);
//     try {
//       const res = await sql`
//         INSERT INTO OPEN_SOURCE_PROJECTS (
//           project_id, 
//           name,
//           url,
//           full_name,
//           language, 
//           created_since, 
//           updated_since, 
//           contributor_count, 
//           org_count,
//           commit_frequency, 
//           recent_releases_count, 
//           updated_issues_count,
//           closed_issues_count,
//           comment_frequency,
//           dependents_count,
//           criticality_score
//         )
//         VALUES(
//           ${i++}, 
//           ${row['name']},
//           ${row['url']},
//           ${fullName},
//           ${row['language']}, 
//           ${row['created_since']}, 
//           ${row['updated_since']}, 
//           ${row['contributor_count']}, 
//           ${row['org_count']},
//           ${row['commit_frequency']}, 
//           ${row['recent_releases_count']}, 
//           ${row['updated_issues_count']},
//           ${row['closed_issues_count']},
//           ${row['comment_frequency']},
//           ${row['dependents_count']},
//           ${row['criticality_score']}
//         );
//       `
//     console.log(res);
//     } catch (e) {
//       console.log('err', e);
//     }
    
//   })
//   .on('end', () => {
//     console.log("DONE");
//   });

sql`
SELECT * FROM OPEN_SOURCE_PROJECTS
`.then(res => console.log(res));