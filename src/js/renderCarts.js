import{createTaskMarkup} from './createTaskMarkup'
import { refs } from './refs'


export function renderCarts() {
  const arrTasks = JSON.parse(localStorage.getItem('tasks'))|| [];

  const markup = arrTasks.map(createTaskMarkup).join('');

  refs.taskList.insertAdjacentHTML('beforeend', markup);
}