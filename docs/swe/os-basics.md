# Operating System

Not many companies ask OS questions, even if they do, it doesn't hold much weight for SWE roles. Still, taking a quick glance at it before technical round might be wise.

## Core OS Topics

### Process and Thread Management
Processes are isolated programs with their own memory space; threads are lightweight execution units within a process sharing the same memory. Key difference: processes crash independently, threads can crash entire process.

### Memory Management (Virtual Memory, Paging)
Virtual memory gives each process illusion of contiguous memory; paging divides memory into fixed-size blocks (pages) swapped between RAM and disk when needed.

### File Systems and I/O
File systems organize data storage with metadata (permissions, timestamps); I/O handles data transfer between devices and memory through system calls like read/write.

### CPU Scheduling Algorithms
Algorithms like FCFS, Round-Robin, Priority Scheduling determine which process gets CPU time next based on fairness, efficiency, and response time requirements.

### Deadlocks and Synchronization
Deadlocks occur when processes wait on each other's resources; prevented using locks, semaphores, or monitors to ensure safe concurrent access.

## References
- [Operating Systems: Three Easy Pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- [Linux Performance](http://www.brendangregg.com/linuxperf.html)
