import { nanoid } from "nanoid";
import { saveToLocalStorag } from "./saveToLocalStorag";
import { createTaskMarkup } from "./createTaskMarkup";
import { refs } from "./refs";

export function submitForm(ev) {
    ev.preventDefault();
    console.log(ev.currentTarget.elements.taskText.value);

    const task = {
        id : nanoid(),
        taskText: ev.currentTarget.elements.taskText.value,
        taskName: ev.currentTarget.elements.taskName.value,
    };

     saveToLocalStorag(task);
     const markup = createTaskMarkup(task);

    refs.taskList.insertAdjacentHTML('beforeend', markup);
    

}