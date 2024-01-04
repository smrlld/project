// smooth scrolling

document.addEventListener("DOMContentLoaded", function() {

    var menuLinks = document.querySelectorAll('.rightbar2 a');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            scrollTo(targetElement);
        });
    });

    function scrollTo(targetElement) {
        var targetPosition = targetElement.offsetTop;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var duration = 1000; // время в миллисекундах

        var start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

});


function toggleTheme() {
    var body = document.body;
    var currentTheme = body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme';
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(currentTheme);
    console.log("Кнопка нажата");
}