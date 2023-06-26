require'nvim-jest'.setup {
  -- Jest executable
  -- By default finds jest in the relative project directory
  -- To override with an npm script, provide 'npm test --' or similar
  jest_cmd = '/relative/project/dir/node_modules/jest/bin/jest.js',

  -- Prevents tests from printing messages
  silent = true,
}

vim.keymap.set("n", "<leader>J", vim.cmd.JestFile);
--      Description
--      :Jest   Run Jest on entire project
--      :JestFile 	Run Jest on file in current buffer
--      :JestSingle 	Run Jest on test name under cursor
--      :JestCoverage 	Run Jest on entire project with coverage
