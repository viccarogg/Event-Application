package com.george.challenge.services;

import org.springframework.stereotype.Service;

import com.george.challenge.beans.Time;

@Service
public class TimeService {
	
	public static Time timeInWords(int h, int m) {
        String oclock = "o' clock";
        String past = "past";
        String to = "to";
        String minutes = "minutes";
        String minute = "minute";

        String[] singleDigit = {"", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};

        String[] teens = {"ten", "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen"};

        String[] hours = {"", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"};

        String result = "";

        if(m <= 30) {
            result = past + " " + hours[h];
            if(m == 0)
                return new Time(hours[h] + " " + oclock);
            else if(m == 30) 
                return new Time("half " + result);
  
        }
        else {
            if(h == 12)
                result = to + " " + hours[1];
            else
                result = to + " " + hours[h+1];

            m = 60 - m;
        }

        if(m == 1)
            result = singleDigit[m] + " " + minute + " " + result;
        else {
            if(m != 15)
                result = minutes + " " + result;
            if(m / 10 == 0)
                result = singleDigit[m] + " " + result;
            else if(m / 10 == 1)
                result = teens[m % 10] + " " + result;
            else
                if(m == 20)
                    result = "twenty " + result;
                else
                    result = "twenty " + singleDigit[m%10] + " " + result;
        }
       
        return new Time(result);
    }
	
}
