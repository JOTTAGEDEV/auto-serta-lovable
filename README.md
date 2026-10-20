# Auto Serta Mecânica

Site institucional responsivo em preto e amarelo. Código-fonte editável em HTML, CSS e JavaScript, sem dependências, banco de dados, credenciais ou serviços pagos obrigatórios.

## Executar e editar

- Abra `index.html` diretamente, ou execute `node server.cjs` e acesse http://127.0.0.1:4173.
- `npm run dev` é equivalente, se npm estiver instalado.
- Para gerar os arquivos estáticos de publicação: `node build.cjs` (ou `npm run build`). Pasta final: `dist/`.
- Conteúdo, serviços, contatos, fotos e Reel: `index.html`.
- Paleta e layout: `style.css`. Amarelo #f5c928; preto #0b0b0b.
- Telefone do WhatsApp e comportamento: `app.js`.
- Fotos e logo ficam na raiz para facilitar o envio manual pelo GitHub. Preserve os nomes ou atualize as referências no HTML.

## Funcionalidades

- Layout adaptado para celular, tablet e desktop; menu móvel.
- Sequência de quatro fotografias com sobreposição suave vinculada à rolagem, sem bloquear o scroll nativo.
- Entrada suave de títulos, cartões e galeria; barra de progresso e efeitos ao passar o mouse.
- Galeria com ampliação, fechamento por Escape e retorno do foco.
- Respeito a `prefers-reduced-motion`: imagens estáticas e animações desativadas.
- Oito serviços: motor, suspensão, freios, embreagem, óleo e filtros, câmbio automático, revisão automotiva, injeção eletrônica.
- WhatsApp e telefone: (48) 98845-0189.
- Reel fornecido pelo cliente: https://www.instagram.com/reel/DdkHaGPqnco/ . Player incorporado e link alternativo. O vídeo depende da disponibilidade do Instagram, das permissões da publicação, da conexão e das restrições do navegador. Não há MP4 local.

## Importar e publicar no Lovable

Documentação consultada em 20/10/2026: https://docs.lovable.dev/features/projects/import-project

1. No GitHub, use Code → Download ZIP. Ou utilize o ZIP entregue com este projeto.
2. No dashboard do Lovable, clique em + → Import project to Lovable → Upload code.
3. Envie o ZIP e inicie a importação. A função está em liberação gradual e pode ainda não aparecer na sua conta.
4. O Lovable reconstrói o projeto na plataforma. Verifique fotos, animações, menu, contatos e vídeo na prévia antes de clicar em Publish.
5. A importação usa créditos da sua conta. Este projeto não exige importar usuários, banco ou chaves.

Git sync não importa repositórios já existentes. A documentação orienta usar o ZIP e conectar a sincronização posteriormente. Não foi realizado deploy no Lovable.

## Fontes e conteúdo

- Logo enviada pelo usuário (arquivo original 150 × 150 px). Use uma versão de maior resolução quando disponível; o arquivo não foi artificialmente ampliado.
- Quatro fotos: estrutura-nova-1, estrutura-nova-2, estrutura-nova-3 e equipe, obtidas em https://autosertamecanica.site/ . Nenhuma fotografia gerada por IA.
- O usuário ainda não forneceu o restante das novas fotos. As imagens atuais podem ser substituídas ou complementadas.
- Serviços e endereço: site da oficina. Telefone confirmado pelo usuário.
- Nota 4,8, 205 avaliações e trechos: divulgados pelo site da oficina como avaliações do Google. Não confirmados diretamente no Google; a página identifica a fonte e a data. Atualize ou substitua por dados verificados antes de uma campanha pública.
- Fonte tipográfica Google Fonts. Se estiver indisponível, o navegador usa a fonte local de fallback.

## Orientação para o Lovable

Preserve a identidade preta e amarela e a logo fornecida. Reproduza o layout e a sequência sticky de quatro fotos com crossfade orientado pelo scroll. Preserve a galeria, as oito categorias de serviços, o número de WhatsApp, os textos de origem das avaliações e o Reel. Não invente depoimentos, fotos, preços ou garantias. Mantenha navegação acessível, redução de movimento e as imagens em tamanho integral no modal.
