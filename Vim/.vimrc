:echo ">^.^<"

"Подрубаю Jslint :SaveAndJsLint
:source ~/.vim/jslint_wrapper_vim.vim

"Таб - 4пробелла
:set      tabstop=2
:set      shiftwidth=2

"Если строка начинается с таба, то это таб, а не пробеллы
:set      smarttab

"Заменяет таб на пробел
:set      expandtab

"Подсветка поиска
:set      hlsearch

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

"узнает тип файла, подрубает плгин
filetype  plugin indent on

"Подрубает невидимые символы
:set      list

"Меняет отображение таба, следующего пробела, конца линии
:set      listchars=tab:>-,trail:-,eol:<

"Отображает омера срок
:set      number

"Скрывает содержимое по отступам
:set foldmethod=indent foldcolumn=2

"
:hi Folded  ctermbg=232
:hi FoldColumn ctermbg=232

"Mappings ну или мапы
":tab h key-notation - Объяснение как написать кнопки

:let mapleader="-"                        "Префикс для мапов
:let maplocalleader="\\"                  "Префикс для локальных мапов

"Выделить слово
:nnoremap <space> viw

"Копировать строку вниз
:nnoremap <leader>J ^v$y$a<cr><esc>p

"Перемещает строку выше предидущей, не работает с последней строкой
:nnoremap <leader><up> ddkP
"Ниже следующей
:nnoremap <leader><down> ddp

"Обрамить выделенный текст двойной кавычкой
:vnoremap <leader>" v`<i"<esc>`>la"<esc>

"Обрамить выделенный текст одинарной кавычкой
:vnoremap <leader>' v`<i'<esc>`>la'<esc>

"Обрамить выделенный текст обратной кавычкой
:vnoremap <leader>` v`<i`<esc>`>la`<esc>

"Закрываем скобочки

"Открывает вимрц для правки
:nnoremap <leader>erc :80vs $MYVIMRC<cr>

"Применяет правки в вимрц к открытому файлу
:nnoremap <leader>src :source $MYVIMRC<cr>

"Автокоманды
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

"Вставить тег скрипта
: autocmd FileType html :nnoremap <buffer> <localleader>s o<script src=""></script><esc>bbla
:augroup END

"Автодополнения тегов
:augroup complete_html
: autocmd!
:augroup END
"Нормализует буфер перед записью, вся фишка в значке =. normal - тип мода
"в котором это все вбивается перед записью
:augroup normalize
: autocmd!
: autocmd BufWritePre *.js :normal gg=G
: autocmd BufWritePre *.html :normal gg=G
: autocmd BufWritePre *.css :normal gg=G
:augroup END

"CSS Автокоманды
:augroup ft_css
: autocmd!
:augroup END

"JS АВТОКОМАНДЫ
:augroup ft_js
: autocmd!

"В js файлах табы по 4 пробела
: autocmd FileType javascript setlocal tabstop=4 shiftwidth=4

"Аббр для use strict
: autocmd FileType javascript :iabbrev <buffer> ustr "use strict";

"Комментим строку в js
: autocmd FileType javascript nnoremap <buffer> <localleader>c I//<esc>

"Комментируем выделенный кусок
: autocmd FileType javascript vnoremap <buffer> <localleader>c v`<O/*<esc>`>o*/<esc>
:augroup END
