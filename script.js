const counters = document.querySelectorAll('.counter');
const speed = 200;

function kFormatter(num) {
   return Math.abs(num) > 9999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

counters.forEach(counter => {
   const updateCount = () => {
      var target = +counter.getAttribute('data-target');
      var count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
         counter.innerText = Math.ceil(count + inc);
         setTimeout(updateCount, 1);
      } else {
         counter.innerText = kFormatter(target);
      }
   }
   updateCount();
});


 // function to set a given theme/color-scheme
 function setTheme(themeName) {
   localStorage.setItem('theme', themeName);
   document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}

// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
       document.getElementById('slider').checked = false;
   } else {
       setTheme('theme-light');
     document.getElementById('slider').checked = true;
   }
})();