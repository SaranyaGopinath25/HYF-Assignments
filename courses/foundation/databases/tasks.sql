SELECT * FROM task t 


-- 1. How many tasks are in the task table?
SELECT COUNT(*) from task t;

-- 2. How many tasks in the task table do not have a valid due date?
SELECT COUNT(*) from task t where t.due_date IS NULL 

-- 3. Find all the tasks that are marked as done.
SELECT * from task t JOIN status s on t.status_id = s.id where s.name = 'Done';

-- 4. Find all the tasks that are not marked as done.
SELECT * from task t JOIN status s on t.status_id = s.id where s.name != 'Done';

-- 5. Get all the tasks, sorted with the most recently created first.
SELECT * from task t ORDER BY created DESC 

-- 6. Get the single most recently created task.
SELECT * from task t ORDER BY created DESC LIMIT 1

-- 7. Get the title and due date of all tasks where the title or description contains database.
SELECT t.title, t.due_date  from task t where LOWER(t.title) LIKE "%database%" OR LOWER(t.description) LIKE  "%database%";

-- 8. Get the title and status (as text) of all tasks.
SELECT t.title, s.name as status FROM task t JOIN status s on t.status_id =s.id;

-- 9. Get the name of each status, along with a count of how many tasks have that status.
SELECT s.name as statusName, COUNT(t.status_id ) as NumOfTasks from status s JOIN task t on s.id = t.status_id GROUP BY s.name;

-- 10. Get the names of all statuses, sorted by the status with most tasks first.
SELECT s.name as statusName, COUNT(t.status_id ) as NumOfTasks from status s JOIN task t on s.id = t.status_id GROUP BY s.name ORDER BY NumOfTasks DESC 

