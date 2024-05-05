


export function saveToLocalStorag(task) {
      const arrTasks = JSON.parse(localStorage.getItem('tasks')) || [];

      arrTasks.push(task);

      localStorage.setItem('tasks', JSON.stringify(arrTasks));
};