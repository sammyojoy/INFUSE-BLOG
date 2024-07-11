document.addEventListener('DOMContentLoaded', function() {
  const searchBar = document.getElementById('search-bar');
  let isWide = true; // Initialize based on the `wide` prop in React component

  const handleMouseEnter = () => {
      isWide = false;
      searchBar.style.width = '400px';
  };

  const handleMouseLeave = () => {
      isWide = true;
      searchBar.style.width = '250px';
  };

  searchBar.addEventListener('mouseenter', handleMouseEnter);
  searchBar.addEventListener('mouseleave', handleMouseLeave);
});