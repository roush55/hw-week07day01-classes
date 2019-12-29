class RunTracker{
    constructor(name,email){
        this.name=name
        this.email=email
    }
     addRun(date,distance,time){
        this.date=date
         this.distance=distance
        this.time=time

    }
}

 const runner = new RunTracker("Salman", "Salman@salman.com");
console.log(runner)
runner.addRun("10-7-2017",10,10)
console.log(runner.addRun())
 





