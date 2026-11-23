# Scheduler reproduction

The portfolio includes an observed FIFO trace from the original public Thread-Scheduling repository:
https://github.com/iankuys/Thread-Scheduling/tree/master

Source was downloaded unchanged and compiled with its original Makefile using `make`. No assertions were added. Runs used the same source and the three scheduler modes (`./p3_exec 0`, `./p3_exec 1`, `./p3_exec 2`). The complete run records are retained in this chat's `work/evidence/` folder.

Observed on this machine:

| Policy | Process result                    | Wall time | Completed task log entries | Deadline-miss log entries |
| ------ | --------------------------------- | --------- | -------------------------- | ------------------------- |
| FIFO   | Exit 0                            | 24.734 s  | 23                         | 1                         |
| EDF    | SIGABRT / vector bounds assertion | 2.832 s   | 6                          | 0 before abort            |
| RM     | SIGABRT / vector bounds assertion | 3.231 s   | 6                          | 1 before abort            |

The SVG uses actual start/completion timestamps from the first six seconds of the FIFO log. Thread 0 completed iteration 2 at 2,903 ms against a 2,000 ms deadline. The portfolio does not present failed EDF/RM runs as successful comparisons or infer scheduler guarantees from these observations.

The host OS, console output, and real-thread timing affect reproduction. These are observations from one archived implementation, not benchmark measurements of the operating system.
