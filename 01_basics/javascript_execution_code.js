/*

JAVASCRIPT EXECUTION CONTEXT
----------------------------

-> javascript code run into two phase.

 -> Global Execution Context  &  allocate to 'this' variable.
 -> Function Execution Context
 -> Eval Execution Context            basically it is in database(optional)


 1. Memory Creation Phase  -> allocate memory of all variables with initial value undefined.
 2. Execution Phase


Working:-
ex- 
   let val1 = 10;
   let val2 = 5;
   function addNum(num1, num2) {
     let total = num1 + num2;
     return total;
   }

   let result1 = addNum(val1, val2);
   let result2 = addNum(10,2);
   

 1.Global Execution
         |
        this

2. Memory Phase
   val1 = undefined
   val2 = undefined
   addNum = defination
   result1 = undefined
   result2 = undefined

3. Execution Phase
  val1 <-  10
  val2 <-  5
  addNum->  -------------------------     Execution Context box will create each time when a new fn execute.
            |new variable environment|
            |          +             |
            | Execution Thread       |
            --------------------------    
                      |
                      |
                same process repeat again for addNum like [Memory phase, Execution Phase]
                Memory Phase - val1 -> undefined
                               val2 -> undefined
                               total -> undefined
                
                Execution Phase - num1 <- 10
                                  num2 <- 5
                                  total <- 15     return total to global execution(this).
                                  after that delete the execution context box.


------------------------------xxxxxxxxxxxxx----------------------------------------------------------------------

*/

