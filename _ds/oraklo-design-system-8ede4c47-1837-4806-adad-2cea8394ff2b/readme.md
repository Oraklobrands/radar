# Oraklo Design System

**Oraklo — Inteligência de Marca.** Consultoria brasileira de estratégia e design de marcas ("Consultoria de Estratégia e Design de Marcas"), operada 100% de forma remota por dois sócios — Guilherme Lacerda (Sócio e Diretor Estratégico) e Petroneo (Sócio e Diretor Criativo) — com uma rede de especialistas. Serviços: Posicionamento, Naming, Branding, Identidade Visual e Verbal, Direção Criativa, Design Estratégico. Método: "As 4 lentes Oraklo" — Inteligência, Narrativa, Identidade e Gestão de Marca (Visão → Significado → Expressão → Coerência). Cases citados: Tropzz, Mais Braza, Imparáveis.

## Superfícies representadas
1. **Site** (home de oraklo.com) — `references/site.png` → `ui_kits/website/`
2. **Apresentação de proposta** ("Orçamento de Branding", 1920×1080) — `references/proposta-*.png` → `slides/`
3. **Instagram** — stories (1080×1920) e posts de feed (1080×1350/1440) — `references/social/` → `social/`
4. Capas do Notion — `assets/backgrounds/capa-notion*.png`

## Fontes de referência
Tudo enviado como upload (sem Figma, sem código): `Oraklo_símbolo.svg`, `Oraklo_Wordmark.svg`, `Efeito degradê.svg`, PNG/JPGs do logo, `Site.png` (home completa), 4 slides de proposta, ~16 posts sociais, 3 capas do Notion e os arquivos da Figtree. Originais copiados para `references/` e `assets/`.

---

## FUNDAMENTOS DE CONTEÚDO
- **Idioma:** português brasileiro. Mantenha os acentos (estratégia, negócio, ç). Inglês só nos nomes de disciplina (Branding, Naming) e na legenda dupla `NOMEAÇÃO.NAMING`.
- **Voz:** "nós" falando com "você/sua marca". Verbos na primeira pessoa do plural abrem as frases: *Criamos, Estruturamos, Investigamos, Definimos, Construímos, Orientamos, Projetamos.*
- **Tom:** consultor confiante com um jeito carioca, caloroso e informal. Vocabulário estratégico (posicionamento, vantagem, valor percebido, relevância, coerência, ativo estratégico) misturado a CTAs bem-humorados: **"Bora dale!"**, "Nossos conteudinhos estão aqui :)", "Últimas blogueiragens", "Fale com a gente".
- **Caixa:** caixa de frase em tudo. CAIXA-ALTA só nas legendas de 12px do rodapé editorial. Nome da marca: minúsculo no logo (`oraklo`), "Oraklo" no texto corrido.
- **Estrutura:** uma ideia por quadro. Um título-afirmação (3–5 linhas), às vezes seguido de uma linha mais leve, muitas vezes terminando em pergunta + seta ↘ de CTA ("Quer entender como a Oraklo pode ajudar sua marca?").
- **Ênfase:** palavras em azul, sublinhado ou **negrito** no termo-chave — "Marca é <ativo estratégico> para <gestão de valor>."
- **Padrão de texto de serviço:** uma linha começando pelo verbo: "Criamos o nome que impulsiona seu negócio e torna a sua marca única e memorável."
- **Emoji:** nenhum. O emoticon ":)" aparece uma vez, de forma casual. Ponto final em títulos é comum.

## FUNDAMENTOS VISUAIS
- **Cor:** praticamente monocromático com uma cor. Azul Oraklo `#2155E9` + preto + branco. Os tons (`#E7EEFD` núcleo de luz, `#BDCCF8`, `#7394F1`) existem só como dissolução de degradê. Navy `#0A1946` para cápsulas sobre preto. Sem cores secundárias, sem vermelho/verde semânticos.
- **Motivo assinatura — "a luz":** uma elipse suave de luz branca/azul-clara que se espalha no Azul Oraklo e depois dissolve em preto (posts escuros) ou branco (posts claros). A posição varia: foco no topo, horizonte embaixo, cantos, atrás do símbolo. Vetor-fonte: `assets/backgrounds/efeito-degrade.svg`.
- **Granulado:** todo degradê tem ruído de filme visível. Nunca entregue um degradê CSS limpo — aplique `--grain` (classe `.ok-grain` ou `GlowBackground`).
- **Arco de horizonte:** uma enorme elipse preta cortando a base de um brilho (hero do site, posts de naming) — borda de planeta/nascer do sol.
- **Logotipo cortado:** o logotipo em tamanho enorme, sangrando pelas duas bordas (capa da proposta, capas de story, rodapé do site).
- **Tipografia:** uma única sans geométrico-humanista, a **Figtree**. Regular 400 para títulos, Light 300 para afirmações longas de manifesto sobre branco, Medium 500 para títulos de card/botões, Bold 700 para ênfase. Entrelinha justa no display (1.05–1.12), centralizado ou alinhado à esquerda na margem.
- **Layout:** tipo grande, muito respiro. Posts sociais usam margem de 66px e um rodapé editorial: `ORAKLO INTELIGÊNCIA DE MARCA` à esquerda, `CATEGORIA.TEMA` em 55% da largura, fio de 1px abaixo. No site, coluna de conteúdo de ~960–1200px; as seções são faixas de cor de sangria total (preto / azul / branco) que se alternam.
- **Cards:** chapados, sem sombra, sem borda em fundo claro. Cards de projeto/blog/foto: azul sólido ou foto, raio 24px. Cápsulas de serviço sobre preto: fundo navy, fio de 1px azul mais claro, raio ~32px. Listas usam divisores de 1px.
- **Cantos:** 4px em campos, 24px em cards, 32px em cápsulas, pílula em todo botão e tag de vidro. O selo do símbolo tem forma arredondada própria.
- **Sombras / elevação:** nenhuma. A profundidade vem da luz (brilhos) e do halo em volta do CTA branco.
- **Transparência e desfoque:** pílulas de vidro fosco (10% de branco, borda 35% branca, backdrop blur) com nomes "trancados" desfocados — usadas como teaser. Círculos vazados desfocados no diagrama das 4 lentes (o foco aumenta da esquerda para a direita).
- **Imagens:** retratos de estúdio dos sócios, frios e dessaturados, sobre degradê vertical azul→cinza com granulado. Sem ilustrações.
- **Iconografia:** mínima — setas finas (↘, ↓, →), chevrons ›, um cadeado. Ver abaixo.
- **Movimento (inferido; nenhum vídeo enviado):** lento e suave — fades e deslizes com ease-out (`--ease-out`, 300–700ms). Os brilhos podem flutuar. Sem bounce.
- **Hover:** o CTA glow intensifica o halo; o azul sólido escurece para `#1A44C2`; botões outline ganham preenchimento; cards dão leve zoom na imagem; o chevron avança para a direita. **Press:** scale .97.
- **Fundos:** nunca com padronagem; sempre brilho de sangria total, preto, branco ou azul.

## ICONOGRAFIA
- Nenhum conjunto de ícones foi enviado. Os materiais usam poucos glifos de traço fino: seta diagonal ↘ (CTA), setas longas para baixo (listas de pilares), seta para a direita (linha do tempo), chevron › (cards/botões), botões circulares com chevron (carrossel), cadeado (teaser de naming) e as marcas de Pinterest/Behance/Instagram no rodapé.
- **Substituição (sinalizada):** os glifos usam a geometria do **Lucide** (`components/core/Icon.jsx`, traço 1.5–2). As marcas sociais vêm do **CDN Simple Icons** (`https://cdn.simpleicons.org/<nome>/ffffff`).
- Sem emoji, sem icon font, sem ícones unicode, exceto o chevron "›" em texto após títulos de card (como no site).
- Logos: `assets/logo/` — SVGs do logotipo e do símbolo em preto/branco/azul, mais os lockups originais em PNG/JPG (símbolo sobre azul, símbolo em círculo preto, logotipo sobre degradê azul).

## Fontes
**Figtree** (variável, pesos 300–900, romana + itálica) — a fonte da marca. Arquivos em `assets/fonts/`, declarados em `tokens/fonts.css`.

---

## Índice
- `styles.css` — ponto de entrada; importa `tokens/{fonts,colors,typography,spacing,effects,base}.css`
- `assets/logo/` · `assets/backgrounds/` · `assets/imagery/` (fotos dos sócios) · `assets/fonts/`
- `references/` — uploads originais (site, proposta, social)
- `guidelines/` — cards de fundamentos (Cores, Tipografia, Espaçamento, Efeitos, Marca)
- `components/` — primitivos React (abaixo)
- `ui_kits/website/` — recriação da home (`index.html`)
- `slides/` — tipos de slide da proposta (1920×1080)
- `social/` — templates de story/feed do Instagram
- `SKILL.md` — entrada da agent skill

## Componentes
- **core/** — `Button` (glow, solid, outline, outline-light, dark), `IconButton` (seta circular), `Icon` (glifos Lucide)
- **brand/** — `Logo`, `GlowBackground`, `EditorialFooter`
- **forms/** — `TextField`, `NewsletterInput`
- **content/** — `ServiceRow`, `ServiceCard`, `ProjectCard`, `BlogCard`, `Highlight`, `GlassPill`

Não havia biblioteca de componentes de origem; este conjunto foi derivado dos padrões visíveis no site e nos posts. **Adições intencionais:** `Icon` (wrapper dos glifos Lucide substitutos), `GlowBackground` (empacota o motivo degradê + granulado).
