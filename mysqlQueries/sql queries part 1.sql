show databases;
use scholarege;
use world;
show tables;

describe articles;

select * from city; 
select * from city where Name in ("Recife","Qandahar") or CountryCode in ("AFG"); 

select * from articles where articleID = "4ed0c0af-da2f-40f0-bcf4-474d4f61db35";
select * from articles where heading like "%he%"; 

select * from articles where heading like "%he%" and category in ("Intermediate");

select * from articles where heading like "%hello%" and category in ("Intermediate","Pakistan");
select * from articles where heading like "%hello%" and category
             in ("Intermediate","phd") and region in ("Intermediate","phd");

 


ALTER TABLE comments ADD COLUMN created_at DATETIME default current_timestamp;
describe users;

select * from users;
DELETE FROM users WHERE userID = "b577da90-cf0d-4add-b87a-bcd16a11d278";


UPDATE articles 
SET article = '<p>Good News for Undergraduate Students of Sindh, SINDH EDUCATION ENDOWMENT FUND announced Scholarships those who are under universities in the session 2020 &amp; 2021. This scholarship is available for 2022-2023 year. SEEF is to provide support and assistance for merit/need scholarship in order to help deserving and need students of Sindh Province. This scholarship is all about to promote graduation and post-graduation in the field of IT, Engineering, Medicine and Business Administration.<br></p><p><br></p><p style="text-align: justify"><span style="font-size: 14px"><em><span style="font-family: Arial"><strong>Support to&nbsp;<strong>Internships:</strong></strong></span></em></span></p><p style="text-align: justify">It covers annual/two semesters tuition fee</p><p style="text-align: justify">All scholarship grants are subject to renewal by SEEF BoT. The students must be eligible for renewal of Endowment Fund.</p><p style="text-align: justify"><strong><br></strong></p><p style="text-align: justify"><strong>SCHOLARSHIP CRITERIA: &nbsp;</strong></p><p style="text-align: justify">The Sindh Educational Endowment Fund (SEEF) will be awarded scholarships only to following:</p><p style="text-align: justify">Regular, full time, deserving meritorious and needy students at graduate and post graduate level at institutions already approved by SEEF.</p><p style="text-align: justify">Special Quota Scholarships will be awarded to meritorious and deserving students who fall in at least one of the following categories:</p><p style="text-align: justify">Orphan students</p><p style="text-align: justify">Children of government employees</p><p style="text-align: justify">students belonging to minorities</p><p style="text-align: justify">student with special needs (Disabled persons quota)</p><p style="text-align: justify">disciplines to apply for SEEF</p><p style="text-align: justify">Following disciplines are eligible to apply for SEEF including</p><p style="text-align: justify">Information Technology</p><p style="text-align: justify">Engineering</p><p style="text-align: justify">Medical (MBBS/BDS)</p><p style="text-align: justify">Business Administration</p><p style="text-align: justify">LLB (Five-years program)</p><p style="text-align: justify">B&amp;D Pharmacy</p><p style="text-align: justify">Veterinary Medicine DVM</p><p style="text-align: justify">Doctor of Physiotherapy</p><p style="text-align: justify">BS in Social Sciences</p><p style="text-align: justify"><br></p><p style="text-align: justify"><strong>Eligibility:</strong></p><ol><li style="text-align: justify;">A candidate’s parents/Guardian annual net income must not be more than 1.5 million</li><li style="text-align: justify;">A candidate must have minimum CGPA would be 2.5 or 60%</li><li style="text-align: justify;">A candidate must be living in the Sindh and Domicile of Sindh</li><li style="text-align: justify;">A candidate’s university must be in the list of approved Universities/institutes by SEED Board of Trustees</li></ol><p style="text-align: justify;"><strong><br></strong></p><p style="text-align: justify;"><strong>*Note:&nbsp;</strong>Please read all the information carefully before you apply.</p><ul><li><strong>Details:</strong></li><li><strong>Date of Publishing: &nbsp;</strong>08-07-2022</li><li><strong>Last to apply:&nbsp;</strong>30-8-2022</li><li><strong>Application process:</strong></li></ul><p><br></p><p style="text-align: justify"><strong>FOR DIRECT REGISTRATION FORM&nbsp;<a href="http://seccap.dgcs.gos.pk/#/seef" alt="Apply here">Apply here</a></strong></p><p style="text-align: justify"><strong><a href="https://seef.sindh.gov.pk/about-us" alt="VISIT WEBSITE">VISIT WEBSITE</a></strong></p><p style="text-align: justify"><br></p><p style="text-align: justify"><strong>*Note: SEEF Scholarship is considered to your respective universities. Please read all the instruction and steps before apply.</strong></p><p style="text-align: justify"><br><strong>STUDENT SCHOLARSHIP CORNER</strong></p><p><br>For joining our whatsapp group, please click on below link</p><p style="text-align: justify"><a href="https://chat.whatsapp.com/DhmHR05ebZjBL9JkOA1XSD"><u>https://chat.whatsapp.com/DhmHR05ebZjBL9JkOA1XSD</u></a></p><p style="text-align: justify">For joining our<strong>&nbsp;INSTAGRAM,</strong>&nbsp;please click on below link</p><p style="text-align: justify"><a href="https://www.instagram.com/studentscholarshipcorner/"><u>https://www.instagram.com/studentscholarshipcorner/</u></a></p><p style="text-align: justify">For Joining our&nbsp;<strong>LINKDIN,</strong>&nbsp;Please Click on Below Link</p><p style="text-align: justify"><a href="https://www.linkedin.com/in/student-scholarship-corner-1667a6247/"><u>https://www.linkedin.com/in/student-scholarship-corner-1667a6247/</u></a><u>&nbsp;</u></p><p style="text-align: justify">For joining our Facebook Page, Please Click on below link</p><p style="text-align: justify"><a href="https://www.facebook.com/Studentscholarshipcorner"><u>https://www.facebook.com/Studentscholarshipcorner</u></a></p>'
WHERE articleID = "4ed0c0af-da2f-40f0-bcf4-474d4f61db35";

select * from articles; 
DELETE FROM articles WHERE articleID = "4b7fb208-4057-4fb9-b5cd-742e3f16fc34";

select * from articles where heading like "%this%" and category in ("Conference","Events","Interships") and region in ("USA");
select * from articles where heading like "%this%"  and region in (USA);
select * from articles where  category in ('');














