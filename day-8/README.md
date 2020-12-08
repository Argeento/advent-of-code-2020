# Explanation of Part Two

> The program is supposed to terminate by **attempting to execute an
  instruction immediately after the last instruction in the file**. By changing
  exactly one jmp or nop, you can repair the boot code and make it terminate
  correctly.
  
The only way to get rid of infinitive loop is change `jpm` to `nop`.
Lets look at commands' indexes which are executed (in my input these are): 
 
```
0
1
2
3
279
280
163
164
165
166
167
179 <
180
181
182
...
208
209
210 <-- return to 179
179 <
180
181
182
...
208
209
210 <-- return to 179
179 <
180
181
182
...
```

Hence the `jmp` command that causes the infinite loop must have index 210
