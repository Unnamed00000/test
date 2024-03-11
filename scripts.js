function showContent(contentId) {
  // Скрывает все блоки контента
  var contents = document.querySelectorAll('.content');
  contents.forEach(function(content) {
    content.classList.add('hidden');
  });

  // Показывает выбранный блок контента
  var selectedContent = document.getElementById(contentId);
  selectedContent.classList.remove('hidden');
}
