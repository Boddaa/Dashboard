document.addEventListener("DOMContentLoaded", () => {
  // Listen for click events on task list trash icons to remove the task
  const deleteIcons = document.querySelectorAll('.last-tasks i.delete');
  deleteIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent triggering the task-row click event
      const taskRow = e.target.closest('.task-row');
      if (taskRow) {
        taskRow.remove();
      }
    });
  });

  // Add functionality to click on tasks to toggle the .done class (crossing them out)
  const taskRows = document.querySelectorAll('.last-tasks .task-row');
  taskRows.forEach(row => {
    row.addEventListener('click', (e) => {
      // Avoid toggling if the user clicked the delete icon
      if (!e.target.classList.contains('delete')) {
        row.classList.toggle('done');
      }
    });
  });
});
