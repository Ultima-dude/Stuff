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
filetype  plugin indent on                "узнает тип файла, подрубает плгин
:set      list                            "Подрубает невидимые символы
:set      listchars=tab:>-,trail:-,eol:<  "Меняет отображение таба, следующего пробела, конца линии
