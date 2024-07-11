document.addEventListener('DOMContentLoaded', function() {
  const defaultWidthRef = { current: null };

  const adjustImageWidth = () => {
      const mundiImg = document.getElementById('mundi');
      if (mundiImg) {
          defaultWidthRef.current = mundiImg.style.width;
          mundiImg.style.width = '65%';
      }
  };

  const resetImageWidth = () => {
      const mundiImg = document.getElementById('mundi');
      if (mundiImg && defaultWidthRef.current) {
          mundiImg.style.width = defaultWidthRef.current;
      }
  };

  adjustImageWidth();

  window.addEventListener('beforeunload', resetImageWidth);
});