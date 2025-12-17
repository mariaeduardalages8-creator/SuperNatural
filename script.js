window.onload = function() {
  const quoteElement = document.querySelector('.quote-text');

  let currentQuoteIndex = 0;
  const typingSpeed = 100;
  
  function typeQuote(quote) {
    let i = 0;
    quoteElement.textContent = '';
    quoteElement.style.opacity = 1;

    function typeChar() {
      if (i < quote.length) {
        quoteElement.textContent += quote.charAt(i);
        i++;
        setTimeout(typeChar, typingSpeed);
      }
    }

    typeChar();
  }

  typeQuote(quotes[currentQuoteIndex]);

  setInterval(() => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    typeQuote(quotes[currentQuoteIndex]);
  }, 5000);
};
const curiosidades = document.querySelectorAll('.curiosidade-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

curiosidades.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(40px)';
  observer.observe(card);
});
const cards = document.querySelectorAll('.curiosidade-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('unlocked');

    const lock = card.querySelector('.lock');
    lock.textContent = card.classList.contains('unlocked') ? '🔓' : '🔒';
  });
});
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

const startTime = 285;
let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    music.currentTime = startTime;
    music.play();
    btn.textContent = "⏸ Música";
  } else {
    music.pause();
    btn.textContent = "▶ Música";
  }

  playing = !playing;
});

