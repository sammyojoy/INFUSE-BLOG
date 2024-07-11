


document.addEventListener('DOMContentLoaded', function() {
  const animatedDiv = document.getElementById("animatedDiv");
  const colorNav = document.getElementById("colorNav");

  const changeHeight = () => {
      const scrollVal = window.pageYOffset;
      const newHeight = Math.max(7, 15 - scrollVal * 0.1);
      animatedDiv.style.height = newHeight + "vh";

      if (newHeight <= 7) {
          animatedDiv.style.borderBottom = '1px solid ';
          animatedDiv.style.borderColor = 'red';
      } else {
          animatedDiv.style.backgroundColor = '';
          animatedDiv.style.borderBottom = '';
          animatedDiv.style.borderColor = '';
      }
  }

  const handleScroll = () => {
      requestAnimationFrame(changeHeight);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
});