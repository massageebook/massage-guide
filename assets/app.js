'use strict';
// Set your own payment page here to update every purchase button together.
const CHECKOUT_URL = 'https://superprofile.bio/vp/diusahfudS?checkout=true';
document.querySelectorAll('a.cta').forEach(link => { link.href = CHECKOUT_URL; });
// Native details elements also work if JavaScript is disabled.
const questions = [...document.querySelectorAll('.faq details')];
questions.forEach(item => item.addEventListener('toggle', () => {
  if (item.open) questions.forEach(other => { if (other !== item) other.open = false; });
}));
const filter = document.querySelector('#review-filter');
filter?.addEventListener('change', () => {
  document.querySelector('.review-count').textContent = filter.value === 'ebook'
    ? 'Showing all 8 reviews for Male Therapist Business Ebook.' : '';
});
