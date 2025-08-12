package com.todo.todolist.repository;

import com.todo.todolist.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

// This interface gives us built-in methods like findAll(), save(), deleteById(), etc.
public interface TaskRepository extends JpaRepository<Task, Long> {
}
