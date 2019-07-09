new Vue({
  el: '#app',

  data: {
    input: 0,
    result: '',
    salary: '',
    working: '',
    time: '',
    hourlyPrice:0,
    timeToAchieveResult: 0,
    min:'0',
    hour: '0',
    day: '0',
    h: '0',
    rem1:'',
    rem2:'',
    rem3:'',
    rem4:'',
    rem5:'',
    week:'',
    daysLeft:'',
    year:'',
    totalDays:'',
    totalHour:'',
    h:''
  },

  computed:{
    getInput(){
      this.$on('dummy',(data)=>{
      this.result = data.input;
      })
      return this.result;
    }
  },
  
  methods: {
    testInput: function(){
      this.$emit('dummy', {
        'input' : this.input
      });
    },
    testSalary: function(){
      this.$emit('dummy1', {
        'salary' : this.salary
      });
    },
    testDay: function(){
      this.$emit('dummy2', {
        'working' : this.working
      });
    },
    testHour: function(){
      this.$emit('dummy3', {
        'time' : this.time
      });
    },

    calculate: function(event){
      if(this.salary > 0) {
        this.hourlyPrice = this.salary / (this.working * this.time);
        return this.hourlyPrice.toFixed(2) != null && this.hourlyPrice.toFixed(2) != undefined ? this.hourlyPrice.toFixed(2) : 0.0;
      }
      return 0.0;

    },

    mainResult: function(){
      if(this.input > 0) {
        this.timeToAchieveResult = this.input / this.hourlyPrice;
        return this.timeToAchieveResult.toFixed(2)!= null && this.timeToAchieveResult.toFixed(2) != undefined ? this.timeToAchieveResult.toFixed(2) : 0.0;
      }
      return 0.0;
    },

    timeConvert : function(){
      this.totalHour = (this.timeToAchieveResult).toFixed(2);

      this.totalDays = Math.floor(this.totalHour / this.time);
      this.rem1 = this.totalHour % this.time;

      this.year = Math.floor(this.totalDays / (this.working * 12));
      this.rem2 = this.totalDays % (this.working * 12);

      this.month = Math.floor(this.rem2 / this.working);
      this.rem3 = this.rem2 % this.working; 

      this.week = Math.floor(this.rem3 / 6);
      this.rem4 = this.rem3 % 6;

      this.day = this.rem4;

      this.hour = Math.floor(this.rem1);

      this.min = Math.floor(60*(this.rem1 - this.hour));

      return this.year + " Year(s) " + this.month + " Month(s) " + this.week + " Week(s) " + this.day + " Day(s) " + this.hour + " Hour(s) " + this.min + " minute(s)";
    }
  }
})