window.onload = function() {
  /* Tools functions */
  function $(query) {
    return document.querySelector(query);
  }

  function $$(query) {
    return document.querySelectorAll(query);
  }

  let isAnimated = null;

  /* Unit functions */
  function toggleExpand(element) {
    if (!isAnimated) {
      isAnimated = true;

      const duration = 300;

      if (element.style.display === 'block') {
        element.style.height = `${element.offsetHeight}px`;
        element.style.overflow = 'hidden';
        element.style.transition = `${duration}ms`;
        element.style.opacity = 1;

        setTimeout(function() {
          element.style.opacity = 0;
          element.style.height = 0;
        }, 10);

        setTimeout(function() {
          element.style = null;
          element.style.display = 'none';
          isAnimated = false;
        }, duration);
      } else {
        element.style.opacity = 0;
        element.style.display = 'block';

        setTimeout(function() {
          const height = element.offsetHeight;
          element.style.opacity = 1;

          element.style.height = 0;
          element.style.transition = `${duration}ms`;

          setTimeout(function() {
            element.style.overflow = 'hidden';
            element.style.height = `${height}px`;
          }, 10);
        }, 10);

        timeout = setTimeout(function() {
          element.style = null;
          element.style.display = 'block';
          isAnimated = false;
        }, duration);
      }
    }
  }

  /* Elements */
  const giftElements = $$('.gift');
  const btnToTopElement = $('.btn-to-top');

  /* Window events */
  window.onscroll = function() {
    display = 'none';

    if (this.scrollY > 0) {
      display = 'block';
    }

    btnToTopElement.style.display = display;
  };

  /* Events */
  giftElements.forEach(giftElement => {
    giftElement.onclick = function() {
      giftElements.forEach(giftElementEach => {
        giftElementEach.classList.remove('active');
      });

      this.classList.add('active');
    };
  });

  $('.expander').onclick = function() {
    toggleExpand($('.top_nav'));
  };

  $('.expander2').onclick = function() {
    toggleExpand($('.nav_games'));
  };

  btnToTopElement.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  $$('.redirect').forEach(redirect => {
    redirect.onclick = function() {
      document.location.href = 'https://ucmirror.com/';
    };
  });
};
