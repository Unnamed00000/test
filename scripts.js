var currentContent = null; // Добавлено для хранения текущего блока контента

function showContent(contentId) {
  // Скрывает текущий блок контента, если он существует
  if (currentContent !== null) {
    currentContent.classList.add('hidden');
  }

  // Показывает выбранный блок контента
  var selectedContent = document.getElementById(contentId);
  selectedContent.classList.remove('hidden');

  // Обновляет текущий блок контента
  currentContent = selectedContent;
}
