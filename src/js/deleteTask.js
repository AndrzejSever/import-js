export function deleteTask(ev) {

    console.log();
if (ev.target.nodeName === 'BUTTON') {
    
    ev.target.closest('.task-list-item').remove();
    const id = ev.target.dataset.id;
    console.log(id);

    const taskArr = JSON.parse(localStorage.getItem('tasks'));
    const abdateTaskArr = taskArr.filter(el => el.id !== id);
    localStorage.setItem('tasks', JSON.stringify(abdateTaskArr));
    console.log(taskArr);
}

}