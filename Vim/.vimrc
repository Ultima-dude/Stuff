:echo ">^.^<"

:set      tabstop=2                       "Таб - 2пробелла
:set      shiftwidth=2
:set      smarttab                        "Если строка начинается с таба, то это таб, а не пробеллы
:set      expandtab                       "Заменяет таб на пробел
:set      hlsearch                        "Подсветка поиска
:set      incsearch                       "Поиск во время набора текста
:set      nowrapscan                      "Поиск не будет заходить на второй круг по файлу
:syntax   enable                          "Врубает синтаксис
:syntax   on
packadd!  matchit                         "Грузит плагин при инициализации вим, улучшает поиск %
:set      textwidth=78                    "Делает невозможным создание строки более 78 символов
filetype  plugin indent on               "узнает тип файла, подрубает плгин
:set      list                            "Подрубает невидимые символы
:set      listchars=tab:>-,trail:-,eol:<  "Меняет отображение таба, следующего пробела, конца линии
:set      number                          "Отображает омера срок
:set      relativenumber                  "Показывает номер относительно курсора"

"Mappings ну или мапы
":tab h key-notation - Объяснение как написать кнопки

:let mapleader="-"                        "Префикс для мапов
:let maplocalleader="\\"                  "Префикс для локальных мапов

"Вырубаем стрелочки в инсерте
:inoremap <up> <nop>
:inoremap <left> <nop>
:inoremap <down> <nop>
:inoremap <right> <nop>

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

"Открывает вимрц для правки
:nnoremap <leader>erc :80vs $MYVIMRC<cr>

"Применяет правки в вимрц к открытому файлу
:nnoremap <leader>src :source $MYVIMRC<cr>

"Аббры

"Автокоманды
"tab h autocmd-events

"HTML автокоманды
"Доктайп html

:augroup ft_html
: autocmd!
: autocmd FileType html :iabbrev <buffer> <!D <!DOCTYPE html><cr><html lang="en"><cr><head><cr><meta charset="utf-8"><cr><meta name="viewport" content="width=device-width, initial-scale=1.0"><cr><meta name="author" content="Ultima"><cr><meta name="description" content=""><cr><link rel="stylesheet" href=""><cr><title></title><cr></head><cr><body><cr></body><cr></html>
:augroup END

"Нормализует HTML файлы перед записью, вся фишка в значке =. normal - тип мода
"в котором это все вбивается перед записью
:augroup normalize
: autocmd!
: autocmd BufWritePre *.html :normal gg=G
:augroup END

"CSS Автокоманды
:augroup ft_css
: autocmd!
"Дополнение скобочки, стартануть с одной скобочкой { не могу... пока
: autocmd FileType css :iabbrev <buffer> {} {<cr>}<esc>O
:augroup END

"JS АВТОКОМАНДЫ
:augroup ft_js
: autocmd!
"Комментим строку в js
: autocmd FileType javascript nnoremap <buffer> <localleader>c I//<esc>

"If дописываем
: autocmd FileType javascript :iabbrev <buffer> iff if () {<cr>}<esc>k2ei
:augroup END
