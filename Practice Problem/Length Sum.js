class Length {
    constructor(ft, inch) {
       this.ft = ft;
       this.inch = inch;
   }

   isValidObject(lengthObj) {
       if (lengthObj.ft >= 0 && lengthObj.inch >= 0) return true;
       return false;
   }

   addLength(lengthObj) {
       if (this.isValidObject(lengthObj) && this.isValidObject(this)) {
           let totalFt = this.ft + lengthObj.ft;
           let totalInches = this.inch + lengthObj.inch;
           while (totalInches >= 12) {
               totalInches -= 12;
               totalFt += 1;
           }
           return [totalFt, totalInches];
       } else {
           return [0, 0];
       }
   }

}
class Length {
     constructor(ft, inch) {
        this.ft = ft;
        this.inch = inch;
    }

    isValidObject(lengthObj) {
        if (lengthObj.ft >= 0 && lengthObj.inch >= 0) return true;
        return false;
    }

    addLength(lengthObj) {
        if (this.isValidObject(lengthObj) && this.isValidObject(this)) {
            let totalFt = this.ft + lengthObj.ft;
            let totalInches = this.inch + lengthObj.inch;
            while (totalInches >= 12) {
                totalInches -= 12;
                totalFt += 1;
            }
            return [totalFt, totalInches];
        } else {
            return [0, 0];
        }
    }

}
