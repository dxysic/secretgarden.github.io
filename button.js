const likeButtons = document.querySelectorAll('.like-btn');
const likeCounts = document.querySelectorAll('.like-count');

likeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    let count = parseInt(likeCounts[index].textContent) + 1;
    likeCounts[index].textContent = count;
  });
});