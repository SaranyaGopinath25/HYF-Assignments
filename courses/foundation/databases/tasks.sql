SELECT * FROM task t 


-- 1. How many tasks are in the task table?
SELECT COUNT(*) from task t;

-- 2. How many tasks in the task table do not have a valid due date?
SELECT COUNT(*) from task t where t.due_date IS NULL 

-- 3. Find all the tasks that are marked as done.
SELECT * from task t where t.status_id = 3;

-- 4. Find all the tasks that are not marked as done.
SELECT * from task t where t.status_id != 3;

-- 5. Get all the tasks, sorted with the most recently created first.
SELECT * from task t ORDER BY created DESC 

-- 6. Get the single most recently created task.
SELECT * from task t ORDER BY created DESC LIMIT 1

-- 7. Get the title and due date of all tasks where the title or description contains database.
SELECT title, t.due_date  from task t where t.title LIKE "%database%" OR t.description LIKE  "%database%";

-- 8. Get the title and status (as text) of all tasks.
SELECT title, CASE status_id when 1 then "New Task" when 2 then "In Progress" when 3 then "Completed" END AS status from task t 	

-- 9. Get the name of each status, along with a count of how many tasks have that status.
--Step 1 -  Select distinct status 
SELECT DISTINCT CASE status_id when 1 then "New Task" when 2 then "In Progress" when 3 then "Completed" END AS status from task t 

--Step 2 - Count the number of status
SELECT COUNT (*) from task t where t.status_id IN (2);

SELECT DISTINCT CASE status_id when 1 then "New Task" when 2 then "In Progress" when 3 then "Completed" END AS status, COUNT(*) AS tasks_count from task t GROUP BY status 


-- 10. Get the names of all statuses, sorted by the status with most tasks first.
SELECT DISTINCT CASE status_id when 1 then "New Task" when 2 then "In Progress" when 3 then "Completed" END AS status, COUNT(*) AS tasks_count from task t GROUP BY status ORDER BY tasks_count DESC 



