:echo ">^.^<"

" базовые сеты {{{
"Таб - 4пробелла
:set      tabstop=2
:set      shiftwidth=2
:set      softtabstop=2

"Если строка начинается с таба, то это таб, а не пробеллы
":set      smarttab

"Заменяет таб на пробел
":set      expandtab

"Подсветка поиска отключить
:set      nohlsearch

"Поиск во время набора текста
:set      incsearch

"Поиск не будет заходить на второй круг по файлу
:set      nowrapscan

"Врубает синтаксис
:syntax   enable
:syntax   on

"Грузит плагин при инициализации вим, улучшает поиск %
packadd!  matchit

"Делает невозможным создание строки более 78 символов
:set      textwidth=78

"Подрубает невидимые символы
":set      list

"Меняет отображение таба, следующего пробела, конца линии
:set      listchars=trail:-,eol:<

"Отображает омера срок
:set      number
:set			relativenumber

"Скрывает содержимое по отступам
:set foldmethod=indent foldcolumn=2

"Подсветка складок
:hi Folded  ctermbg=232
:hi FoldColumn ctermbg=232

"Подрубает плагины, отступы в зависимости от типа файлов
filetype plugin indent on
"}}}

"Mappings ну или мапы {{{
":tab h key-notation - Объяснение как написать кнопки

:let mapleader="-"                        "Префикс для мапов
:let maplocalleader="\\"                  "Префикс для локальных мапов

"Выделить слово
:nnoremap <space> viw

"Перемещает строку выше предидущей, не работает с последней строкой
"Надо переделать под блок выделенного текста
:nnoremap <leader><up> ddkP
"Ниже следующей
:nnoremap <leader><down> ddp

"Обрамить выделенный текст двойной кавычкой
:vnoremap <leader>" v`<i"<esc>`>la"<esc>

"Обрамить выделенный текст одинарной кавычкой
:vnoremap <leader>' v`<i'<esc>`>la'<esc>

"Обрамить выделенный текст обратной кавычкой
:vnoremap <leader>` v`<i`<esc>`>la`<esc>

"Открывает вимрц для правки
:nnoremap <leader>erc :80vs $MYVIMRC<cr>

"Применяет правки в вимрц к открытому файлу
:nnoremap <leader>src :source $MYVIMRC<cr>
"}}}

"Автокоманды {{{
"tab h autocmd-events

"Общие автокоманды
:augroup common
: autocmd!
"При выходе из вима сохрвняет складки и подгружает их при входе в вим
": autocmd BufWinLeave *.* mkview
": autocmd BufWinEnter *.* silent loadview

"Скрывает содержимое в вимрц по маркерам
: autocmd FileType vim setlocal foldmethod=marker
:augroup END

"HTML автокоманды

:augroup ft_html
: autocmd!
"Доктайп html
: autocmd FileType html :iabbrev <buffer> <!D <!DOCTYPE html><cr><html lang="en"><cr><head><cr><meta charset="utf-8"><cr><meta name="viewport" content="width=device-width, initial-scale=1.0"><cr><meta name="author" content="Ultima"><cr><meta name="description" content=""><cr><link rel="stylesheet" href=""><cr><title></title><cr></head><cr><body><cr></body><cr></html>

: autocmd FileType html :nnoremap <buffer> <localleader>s o<script src="@"></script><esc>?@<cr>s

"Добиваем теги пока только добивает тег на новой строке и заменяет только . на
"class
:	autocmd FileType html :nnoremap <buffer> <localleader>t :s/<\([a-z1-9]*\)\.\([a-z-]*\)/<\1 class="\2"><\/\1>/<cr>
:augroup END


"Нормализует буфер перед записью, вся фишка в значке =. normal - тип мода
"в котором это все вбивается перед записью
:augroup lint 
: autocmd!
: autocmd BufWritePre,BufRead *.js :normal gg=G
: autocmd BufWritePre,BufRead *.html :normal gg=G
: autocmd BufWritePre,BufRead *.css :normal gg=G

"Коммент
:	autocmd FileType html :vnoremap <buffer><localleader>c v`<O<!--<esc>`>o--><esc>
:augroup END

"CSS Автокоманды
:augroup ft_css
: autocmd!
"Коммент
:	autocmd FileType css :nnoremap <buffer> <localleader>c I/*<C-o>$*/<esc>
:augroup END

"JS АВТОКОМАНДЫ
:augroup ft_js
: autocmd!

"В js файлах табы по 4 пробела
: autocmd FileType javascript setlocal tabstop=4 shiftwidth=4 softtabstop=4

"Аббр для use strict
: autocmd FileType javascript :iabbrev <buffer> ustr "use strict";

"for abbr
: autocmd FileType javascript :iab <buffer> forii@ for(let i = 0; i < @; i++) {<cr>}<esc>?@<cr>s

"class abbr
: autocmd FileType javascript :iab <buffer> class@ class <esc>mci{<cr>}<esc>Oconstructor() {<cr>}<esc>`ci

"try
: autocmd FileType javascript vnoremap <buffer> <localleader>t v`<Otry {<C-o>`><cr>} catch(@) {<cr>}<esc>?@<cr>s
"Комментим строку в js
: autocmd FileType javascript nnoremap <buffer> <localleader>c I//<esc>

"Раскоментим строку
: autocmd FileType javascript nnoremap <buffer> <localleader>u 0ebxx

"Комментируем выделенный кусок
: autocmd FileType javascript vnoremap <buffer> <localleader>c v`<O/*<esc>`>o*/<esc>
"Раскоментим выделенный кусок
: autocmd FileType javascript vnoremap <buffer> <localleader>u v`<xx`>xx
:augroup END
"}}}
