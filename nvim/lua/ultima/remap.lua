--Заходим в экс-мод
vim.keymap.set("n", "<leader>pv", vim.cmd.Ex)

--Двигаем блок выделенный V вверх-вниз
vim.keymap.set("v", "J", ":m'>+1<cr>gv=gv")
vim.keymap.set("v", "K", ":m'<-2<CR>gv=gv")

--При склеивании следю строки с текущей возвращает курсор на место
vim.keymap.set("n", "J", "mzJ`z")

--Сохраняет курсор на центре экрана при скролле странички
vim.keymap.set("n", "<C-d>", "<C-d>zz")
vim.keymap.set("n", "<C-u>", "<C-u>zz")
vim.keymap.set("n", "n", "nzzzv")
vim.keymap.set("n", "N", "Nzzzv")

--Ремап вставки, не заменяет буфер заменяемым значением, а скидывает его в воид
vim.keymap.set("x", "<leader>p", "\"_dp")

--Скопировать
vim.keymap.set("n", "<leader>y", "\"+y")
vim.keymap.set("v", "<leader>y", "\"+y")
vim.keymap.set("n", "<leader>Y", "\"+Y")

vim.keymap.set("n", "<leader>f", function()
    vim.lsp.buf.format()
end)

--Включает автозамену слов под курсором
vim.keymap.set("n", "<leader>s", [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]])

--Очень криво пастит скелет доктайпа
vim.keymap.set("n", "<leader>pdt", ":r ~/nvim/html_skeleton/index.html<cr>")

--Включить игрулю. Обязательно в путом файле!
vim.keymap.set("n", "<leader>vbg", ":VimBeGood<cr>")

--Выделить слово под курсором
vim.keymap.set("n", "<Space>", "viw")
