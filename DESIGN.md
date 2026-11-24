# DESIGN.md — Portfólio Miguel Laube

Direção: **portfólio técnico, escuro por padrão, sério e direto**. Mantém a identidade
que o site já tinha (slate + azul, DM Serif Display + DM Sans) e adiciona uma fonte
mono para rótulos, como num editor de código. Os prints dos projetos são o destaque;
o resto da página fica neutro para não competir com eles.

> Sem referências externas: o conector UXKIN não conectou nesta sessão, então a direção
> parte da identidade existente e das regras abaixo.

Todos os valores vivem como variáveis CSS em `style.css` (`:root` e `[data-theme="light"]`).
As páginas usam os nomes, nunca valores soltos.

## Cor

| Token | Escuro | Claro | Papel |
|---|---|---|---|
| `--bg` | `#0a0d14` | `#f8fafc` | fundo da página |
| `--surface` | `#111622` | `#ffffff` | cards, menu, blocos |
| `--surface-2` | `#171d2b` | `#f1f5f9` | chips, campos, hover de card |
| `--border` | `#222b3d` | `#e2e8f0` | bordas e divisórias |
| `--border-strong` | `#334155` | `#cbd5e1` | bordas em hover/foco |
| `--text` | `#e5e9f0` | `#0f172a` | títulos e texto principal |
| `--text-2` | `#a3adbf` | `#475569` | texto de apoio (≥ 4.5:1 nos dois temas) |
| `--text-3` | `#7b869a` | `#64748b` | legendas, rótulos mono |
| `--primary` | `#60a5fa` | `#2563eb` | links, destaques, foco |
| `--primary-solid` | `#3b82f6` | `#2563eb` | botão principal (texto branco) |
| `--primary-hover` | `#2563eb` | `#1d4ed8` | hover do botão principal |
| `--primary-soft` | `rgba(96,165,250,.12)` | `rgba(37,99,235,.08)` | fundo de tags e realces |
| `--success` | `#34d399` | `#059669` | status "aberto a emprego" |

Um só azul de ação. Verde só para o status. Sem gradientes roxo-azul, sem texto em gradiente.

## Tipografia

- **DM Serif Display** — nome e títulos de seção (h1, h2).
- **DM Sans** 400/500/600 — corpo e interface. Corpo 16px, linha 1.65, até ~68ch.
- **DM Mono** 400/500 — rótulos de seção, tags de stack, card de código.

Escala (clamp fluido): `--fs-xs .75rem` · `--fs-sm .875rem` · `--fs-base 1rem` ·
`--fs-md 1.125rem` · `--fs-lg 1.375rem` · `--fs-xl clamp(1.75rem,3vw,2.25rem)` ·
`--fs-2xl clamp(2.5rem,6vw,4.25rem)`.

## Espaço

Escala de 4px: `--s-1 4px` · `--s-2 8px` · `--s-3 12px` · `--s-4 16px` · `--s-5 24px` ·
`--s-6 32px` · `--s-7 48px` · `--s-8 64px` · `--s-9 96px`.
Conteúdo até `1120px`, margem lateral `clamp(16px, 5vw, 32px)`, seções separadas por
`clamp(64px, 10vw, 112px)`.

## Forma e profundidade

Raios: `--r-sm 6px` (chips, tags) · `--r-md 10px` (botões, campos) · `--r-lg 16px` (cards).
Uma sombra: `--shadow` para cards em hover e o menu mobile. Bordas de 1px fazem o resto.

## Componentes

- **Botões**: primário (azul sólido, texto branco), secundário (borda, fundo surface),
  discreto (só texto + ícone). Hover muda fundo/borda; foco = anel `--primary` de 2px
  com 3px de afastamento; nenhum estado depende só de cor.
- **Links**: `--primary`, sublinhado no hover.
- **Card de projeto**: print em moldura de navegador (barra com 3 pontos + domínio),
  título, uma linha de descrição, destaques em lista curta, tags mono, links "Ver site" /
  "Código". O projeto principal (EncoMed) ocupa a largura toda; os demais em grade de 2.
- **Chips de skill**: mono, fundo `--surface-2`, agrupados por categoria.
- **Menu**: fixo no topo, fundo sólido com borda inferior ao rolar; no celular vira
  painel com botão hambúrguer (aria-expanded).
- **Rodapé**: uma linha, contatos repetidos.

## Imagens e ícones

- Prints reais dos projetos em `assets/projetos/` (WebP 1280×800 + versão 640 para celular),
  sempre com `width`/`height`, `loading="lazy"` fora da primeira dobra e `alt` descritivo.
- Ícones: SVG inline, traço 2px, estilo Lucide. Nada de emoji como ícone.

## Movimento

- Entrada do hero em cascata, card de código com digitação, revelação suave ao rolar,
  print do projeto desliza no hover, barra de progresso de leitura, menu marca a seção atual.
- Tudo desliga com `prefers-reduced-motion: reduce`.
