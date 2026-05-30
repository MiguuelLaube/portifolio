<p align="center">
  <img src="foto.jpg" alt="Miguel Viana Laube" width="120" style="border-radius: 50%;" />
</p>

<h1 align="center">Miguel Viana Laube — Portfólio Pessoal</h1>

<p align="center">
  <em>Portfólio profissional de página única, construído com HTML, CSS e JavaScript puros.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

---

## 📋 Portifolio no GithubPages
 https://miguuellaube.github.io/portifolio/

---

## 🎯 Sobre o Projeto

Este é o portfólio pessoal de **Miguel Viana Laube**, estudante de **Análise e Desenvolvimento de Sistemas (ADS)** em Taubaté, SP. O objetivo do projeto é apresentar de forma profissional e elegante:

- **Informações pessoais** e resumo profissional
- **Competências técnicas** (Python, SQL, FastAPI, AWS, Redes, etc.)
- **Projetos desenvolvidos** com links diretos para os repositórios no GitHub
- **Informações de contato** e download do currículo em PDF

O portfólio foi projetado para funcionar como um cartão de visita digital completo, transmitindo profissionalismo e domínio técnico ao visitante.

---

## 🖥️ Demonstração

O portfólio apresenta um layout **dark mode** minimalista e moderno com as seguintes seções:

| Seção | Descrição |
|-------|-----------|
| **Header** | Foto, nome, tagline e links rápidos (LinkedIn, GitHub, CV) |
| **Sobre** | Resumo profissional e objetivos de carreira |
| **Competências** | Badges interativas com as tecnologias dominadas |
| **Projetos** | Cards com descrição, tags e links para cada projeto |
| **Contato** | Links para redes sociais e botão de download do currículo |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|-----------|
| **HTML5** | Estrutura semântica da página |
| **CSS3** | Estilização completa (variáveis CSS, Flexbox, Grid, media queries) |
| **Google Fonts** | Tipografia premium — fontes *DM Serif Display* e *DM Sans* |
| **SVG Inline** | Ícones vetoriais para LinkedIn e GitHub |

> **Nota:** O projeto foi construído **sem frameworks ou bibliotecas externas** — apenas HTML e CSS puros com fontes do Google Fonts. Isso garante carregamento ultrarrápido e zero dependências.

---

## 📁 Estrutura do Projeto

```
portifolio/
├── index.html                # Página principal (HTML estrutural)
├── style.css                 # Estilos separados (CSS)
├── foto.jpg                  # Foto de perfil exibida no header
├── CurriculoMiguelLaube.pdf  # Currículo em PDF disponível para download
└── README.md                 # Este arquivo
```

O HTML e o CSS foram separados em arquivos independentes (`index.html` + `style.css`), seguindo boas práticas de organização de código e facilitando a manutenção.

---

## 🔨 Como Foi Feito

### 1. Planejamento e Estrutura

O portfólio foi planejado como uma **Single Page Application (SPA)** estática, sem necessidade de servidor backend. A estrutura HTML segue uma hierarquia semântica clara:

```
<header>          → Identidade visual (foto, nome, links)
  <section>       → Sobre
  <section>       → Competências
  <section>       → Projetos
  <section>       → Contato
<footer>          → Copyright
```

### 2. Sistema de Design com CSS Custom Properties

Foi criado um **sistema de design coeso** utilizando variáveis CSS (Custom Properties) para garantir consistência visual:

```css
:root {
  --navy: #e2e8f0;
  --blue: #60a5fa;        /* Cor de destaque principal */
  --blue-mid: #3b82f6;    /* Tom intermediário */
  --blue-light: #1e40af;  /* Bordas e acentos */
  --ink: #cbd5e1;          /* Texto principal */
  --muted: #94a3b8;        /* Texto secundário */
  --border: #1e293b;       /* Bordas dos elementos */
  --bg: #0a0a0a;           /* Fundo da página */
  --white: #111827;        /* Fundo dos cards */
  --accent: #0f172a;       /* Fundo de destaque */
}
```

Essa paleta de cores segue a escala **Slate** do sistema de cores moderno, criando um dark mode sofisticado com acentos em azul.

### 3. Layout Responsivo

O layout utiliza **CSS Flexbox** e **CSS Grid** para organização dos elementos:

- **Header:** `display: flex` com `gap` para alinhar foto e informações
- **Skills:** `display: flex` com `flex-wrap` para badges adaptáveis
- **Projetos:** `display: grid` para cards empilhados uniformemente
- **Media Queries:** Breakpoint em `520px` para adaptar o layout em dispositivos móveis

```css
@media (max-width: 520px) {
  header { flex-direction: column; align-items: flex-start; }
  .project-card { flex-direction: column; }
  .btn-link { align-self: flex-start; }
}
```

### 4. Micro-interações e Transições

Todos os elementos interativos possuem **transições suaves** para uma experiência premium:

- **Hover nos links:** Mudança de cor com `transition: 0.18s`
- **Hover nos cards de projeto:** Sombra sutil e borda destacada
- **Hover nas skills:** Mudança de borda e fundo
- **Hover nos contatos:** Sombra e borda em azul

### 5. Tipografia Profissional

Foram utilizadas duas fontes do **Google Fonts** para criar hierarquia tipográfica:

- **DM Serif Display** — Fonte serifada elegante para o nome/título principal
- **DM Sans** — Fonte sans-serif moderna para corpo de texto e elementos de interface

### 6. Ícones SVG Inline

Os ícones de redes sociais (LinkedIn e GitHub) foram implementados como **SVG inline**, sem dependência de bibliotecas de ícones externas. Isso garante:

- Carregamento instantâneo (sem requisições HTTP extras)
- Personalização completa de cor e tamanho via atributos
- Sem dependência de CDN externo

---

## 🚀 Como Utilizar

### Visualizar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MiguuelLaube/portifolio.git
   ```

2. **Abra o arquivo no navegador:**
   ```bash
   cd portifolio
   ```
   Abra o arquivo `portfolio.html` diretamente no navegador (duplo clique ou arraste para o navegador).

> **Não é necessário servidor web, node_modules, npm install ou qualquer configuração.** Basta abrir o HTML.

---

## 🎨 Design e Decisões Técnicas

| Decisão | Justificativa |
|---------|---------------|
| **Arquivo único (HTML + CSS)** | Máxima portabilidade — funciona em qualquer lugar sem build |
| **Zero dependências JS** | Página 100% estática, sem JavaScript runtime necessário |
| **Dark mode nativo** | Tendência moderna, confortável para os olhos, aparência premium |
| **CSS Custom Properties** | Fácil manutenção e troca de temas no futuro |
| **Fontes do Google** | Tipografia profissional sem custo de licenciamento |
| **SVG inline** | Ícones sem dependência externa, carregamento zero |
| **Responsivo (mobile-first)** | Acessível em qualquer dispositivo |

---

## ✏️ Personalização

Para adaptar este portfólio para seu próprio uso:

1. **Informações pessoais** — Edite o `<header>` com seu nome, tagline e links
2. **Foto** — Substitua o arquivo `foto.jpg` pela sua foto
3. **Currículo** — Substitua `CurriculoMiguelLaube.pdf` pelo seu PDF
4. **Cores** — Altere as variáveis no bloco `:root` do CSS
5. **Projetos** — Adicione ou remova cards na seção de projetos seguindo o modelo:

```html
<div class="project-card">
  <div class="project-body">
    <strong>Nome do Projeto</strong>
    <p>Descrição breve do projeto.</p>
    <div class="project-tags">
      <span class="project-tag">Tecnologia</span>
    </div>
  </div>
  <a href="URL_DO_REPOSITORIO" class="btn-link" target="_blank">Ver projeto</a>
</div>
```

### Projetos Incluídos

| Projeto | Descrição | Tecnologias | Link |
|---------|-----------|-------------|------|
| **Mini Jogo do Mario** | Jogo de plataforma desenvolvido durante o curso de ADS no Senai | HTML, CSS, JavaScript | [Repositório](https://github.com/MiguuelLaube/Jogomario.git) |
| **Site de Venda de Tênis** | E-commerce desenvolvido durante o curso de ADS no Senai | HTML, CSS, JavaScript | [Repositório](https://github.com/MiguuelLaube/Site-Tenis-Senai-Outlet.git) |
| **API de Gerenciamento de Figurinhas** | API REST para gerenciamento de figurinhas e organização de coleções | Python, FastAPI, API REST | [Repositório](https://github.com/MiguuelLaube/API-de-figurinhas.git) |

---

## 👤 Autor

<table>
  <tr>
    <td align="center">
      <strong>Miguel Viana Laube</strong><br/>
      Estudante de ADS · Taubaté, SP<br/><br/>
      <a href="https://www.linkedin.com/in/miguel-laube-67540333a/">LinkedIn</a> · 
      <a href="https://github.com/MiguuelLaube">GitHub</a>
    </td>
  </tr>
</table>

---

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como inspiração ou template para seu próprio portfólio.

---

<p align="center">
  Feito com 💙 por <strong>Miguel Viana Laube</strong> · © 2026
</p>
