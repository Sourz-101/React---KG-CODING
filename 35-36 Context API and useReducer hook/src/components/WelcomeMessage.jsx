import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';
import styles from './WelcomeMessage.module.css'

const WelcomeMessage = () => {

    // const contextObj =  useContext(TodoItemsContext);
    // const todoItems = contextObj.todoItems;

    const {todoItems} = useContext(TodoItemsContext);

    return todoItems.length === 0 && <p className={styles.welcome}>No Task Pending Enjoy Your Day </p>
}

export default WelcomeMessage;