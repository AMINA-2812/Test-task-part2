// script.js
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('background-video');
  const canvases = document.querySelectorAll('.video-canvas');

  // Запускаем рендеринг видео на каждом canvas
  canvases.forEach(canvas => {
      const ctx = canvas.getContext('2d');

      // Устанавливаем размеры canvas
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      function drawFrame() {
          // Рисуем текущий кадр видео на canvas
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          // Зацикливаем анимацию
          requestAnimationFrame(drawFrame);
      }

      // Начинаем рендеринг, когда видео начинает проигрываться
      video.addEventListener('play', () => {
          drawFrame();
      });
  });
});