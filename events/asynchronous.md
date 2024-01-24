# Javascript Asynchronous Action


**Javascript**  
>javascript is a synchronous language ( run code sequentially).  
it has a single thread.

***

## Synchronous v/s Asynchronous

|Synchronous    |  Asynchronous     |
| -----         |   -----           |
| Blocking code | Non Blocking Code |
|Block the flow of program| Not block the flow of program
|Read file sync| Read file async|


## working
1. js Engine  
    1. Memory Heap - creating memory  
    2. Call Stack - it call request to **Web API/Node API** 


2. Web API- it has **Register Call Back**
   1. Dom  API
   2. Set interval
   3. Set timeout
   4. fetch()  
      . it has promise concept (call Back) after completing send to call stack.   
      . It has high priority.  
      . It has task Queue that contain (call Back).  
      . it follow fifo concept.
      . After that add these call back to call stack.

