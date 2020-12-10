# Explanation of Part Two

> The program is supposed to terminate by **attempting to execute an
  instruction immediately after the last instruction in the file**. By changing
  exactly one jmp or nop, you can repair the boot code and make it terminate
  correctly.
  
The only way to get rid of infinite loop is change `jpm` to `nop`.
Without any if statements in code, the jmp instruction that is broken,
has a last instruction's index in Part One solution
