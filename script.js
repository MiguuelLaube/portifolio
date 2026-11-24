// Portfólio Miguel Laube — interações e animações (sem dependências)
(function () {
  'use strict';

  var root = document.documentElement;
  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- ano no rodapé ---------- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---------- tema claro/escuro ---------- */
  var btnTema = document.getElementById('tema');
  var metaCor = document.querySelector('meta[name="theme-color"]');

  function aplicarTema(t) {
    root.setAttribute('data-theme', t);
    if (btnTema) btnTema.setAttribute('aria-label', t === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
    if (metaCor) metaCor.setAttribute('content', t === 'dark' ? '#0a0d14' : '#f8fafc');
  }

  aplicarTema(root.getAttribute('data-theme') || 'dark');

  if (btnTema) {
    btnTema.addEventListener('click', function () {
      var novo = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      aplicarTema(novo);
      try { localStorage.setItem('tema', novo); } catch (e) { /* armazenamento bloqueado */ }
    });
  }

  /* ---------- menu mobile ---------- */
  var nav = document.getElementById('nav');
  var btnMenu = document.getElementById('menu-btn');
  var menu = document.getElementById('menu');

  function abrirMenu(abrir) {
    nav.classList.toggle('is-open', abrir);
    btnMenu.setAttribute('aria-expanded', String(abrir));
    btnMenu.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
  }

  if (btnMenu && menu) {
    btnMenu.addEventListener('click', function () {
      abrirMenu(!nav.classList.contains('is-open'));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) abrirMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        abrirMenu(false);
        btnMenu.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target)) abrirMenu(false);
    });
    window.matchMedia('(min-width: 860px)').addEventListener('change', function (m) {
      if (m.matches) abrirMenu(false);
    });
  }

  /* ---------- barra ao rolar + progresso de leitura ---------- */
  var barra = document.querySelector('.progress span');
  var agendado = false;

  function aoRolar() {
    agendado = false;
    var y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 8);
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (barra) barra.style.setProperty('--p', max > 0 ? Math.min(y / max, 1) : 0);
  }

  window.addEventListener('scroll', function () {
    if (!agendado) {
      agendado = true;
      requestAnimationFrame(aoRolar);
    }
  }, { passive: true });
  aoRolar();

  /* ---------- digitação do card de código ---------- */
  var codigo = document.getElementById('codigo');
  if (codigo && !reduz) {
    var linhas = codigo.querySelectorAll('.ln');
    var atraso = 0.55; // espera a entrada do hero
    linhas.forEach(function (ln) {
      var n = Math.max(ln.textContent.length, 1);
      var dur = Math.min(0.022 * n + 0.08, 0.9);
      ln.style.setProperty('--steps', n);
      ln.style.setProperty('--dur', dur.toFixed(2) + 's');
      ln.style.setProperty('--delay', atraso.toFixed(2) + 's');
      atraso += dur + 0.06;
    });
    codigo.classList.add('typing');
  }

  /* ---------- índices para a cascata dos chips ---------- */
  document.querySelectorAll('.chips').forEach(function (lista) {
    lista.querySelectorAll('li').forEach(function (li, i) {
      li.style.setProperty('--i', i);
    });
  });

  /* ---------- revelação ao rolar ---------- */
  var reveals = document.querySelectorAll('.reveal');

  // pequenos atrasos em cascata para itens lado a lado
  document.querySelectorAll('.projects-grid, .skills, .edu__side').forEach(function (grupo) {
    Array.prototype.forEach.call(grupo.children, function (el, i) {
      el.style.setProperty('--rd', (i % 3) * 0.08 + 's');
    });
  });

  if ('IntersectionObserver' in window && !reduz) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          obs.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { obs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- menu marca a seção atual ---------- */
  var links = document.querySelectorAll('.nav__menu a[href^="#"]');
  var porId = {};
  links.forEach(function (a) { porId[a.getAttribute('href').slice(1)] = a; });

  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.remove('is-active');
          a.removeAttribute('aria-current');
        });
        var a = porId[en.target.id];
        if (a) {
          a.classList.add('is-active');
          a.setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });
  }

  /* ---------- copiar e-mail ---------- */
  var btnCopiar = document.getElementById('copiar');
  var toast = document.getElementById('toast');
  var timerToast;

  function avisar(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(timerToast);
    timerToast = setTimeout(function () { toast.classList.remove('is-visible'); }, 2200);
  }

  function copiarFallback(texto) {
    var campo = document.createElement('textarea');
    campo.value = texto;
    campo.setAttribute('readonly', '');
    campo.style.position = 'fixed';
    campo.style.opacity = '0';
    document.body.appendChild(campo);
    campo.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(campo);
    return ok;
  }

  if (btnCopiar) {
    btnCopiar.addEventListener('click', function () {
      var email = btnCopiar.getAttribute('data-email');
      var rotulo = btnCopiar.querySelector('span');
      function feito(ok) {
        avisar(ok ? 'E-mail copiado!' : 'Não deu para copiar. O e-mail é ' + email);
        if (ok && rotulo) {
          rotulo.textContent = 'Copiado';
          setTimeout(function () { rotulo.textContent = 'Copiar e-mail'; }, 2200);
        }
      }
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(function () { feito(true); }, function () { feito(copiarFallback(email)); });
      } else {
        feito(copiarFallback(email));
      }
    });
  }
})();
