#!/usr/bin/env python3
"""Собирает одностраничную версию сайта для хостинга claude.ai (Artifact).

Хостинг сам оборачивает страницу в <html>/<head>/<body> и пускает скрипты
только из своих файлов или разрешённых CDN, поэтому CSS и JS встраиваются
прямо в страницу. Кадры для версии без WebGL публикуются отдельными файлами.

Запуск: python3 build-artifact.py  (сначала ./build.sh, если менялся js/)
Результат: dist/event-horizon.html
"""
import re
from pathlib import Path

root = Path(__file__).resolve().parent
src = (root / 'index.html').read_text(encoding='utf-8')
css = (root / 'css/style.css').read_text(encoding='utf-8')
js = (root / 'js/bundle.js').read_text(encoding='utf-8')

head = src[src.index('<head>') + 6:src.index('</head>')]
body = src[src.index('<body>') + 6:src.index('</body>')]

# из <head> оставляем только нужное для работы страницы
fonts = re.search(r'<link rel="stylesheet" href="https://fonts\.googleapis\.com[^>]*>', head).group(0)
endpoint = re.search(r'<meta name="eh-form-endpoint"[^>]*>', head).group(0)
boot = re.search(r'<script>\s*// До загрузки модулей.*?</script>', head, re.S).group(0)

css = css.replace('url("../assets/frames/', 'url("assets/frames/')
# единый тёмный облик: фон и цвет заданы явно, элементы управления — тёмные
css = ':root { color-scheme: dark; }\n' + css

body = re.sub(r'<script src="js/bundle\.js[^"]*" defer></script>', '', body)
body = body.replace('<!-- Собранный бандл (build.sh) — работает и при открытии файла двойным щелчком -->', '')
js_safe = js.replace('</script', '<\\/script')
assert '</script' not in js_safe

page = f'''<title>Event Horizon</title>
<meta name="description" content="Студия иммерсивных цифровых миров: сайт-полёт к чёрной дыре.">
<meta name="color-scheme" content="dark">
{endpoint}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
{fonts}
<style>
{css}
</style>
{boot}
{body.strip()}
<script>
{js_safe}
</script>
'''
out = root / 'dist' / 'event-horizon.html'
out.parent.mkdir(exist_ok=True)
out.write_text(page, encoding='utf-8')
print(f'{out.relative_to(root)}: {len(page.encode()) / 1024:.0f} KB')
