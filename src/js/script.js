window.onload = function() {
  /* Tools functions */
  function $(query) {
    return document.querySelector(query);
  }

  function $$(query) {
    return document.querySelectorAll(query);
  }

  /* Unit functions */
  function toggleExpand(element) {
    let display = 'block';

    if (element.style.display === 'block') {
      display = 'none';
    }

    element.style.display = display;
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
