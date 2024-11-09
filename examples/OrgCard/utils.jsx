
'use client'
import React from 'react';
export const formatDate = (dateString, format) => {
    const date = new Date(dateString);
  
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
  
    const ordinalSuffix = (day) => {
      if (day > 3 && day < 21) return "th"; // Exceptions for 11th, 12th, 13th
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    if (format == "date") {
        return `${day}${ordinalSuffix(day)} ${month}, ${year}`;
      }
    
      if (format == "date-time") {
        return `${hours}:${minutes}, ${day}${ordinalSuffix(day)} ${month}`;
      }
    };

// .toISOString().substring(0,10)
export  function DisplayDate({d}){
	return (
		<span>
			{d.substring(0,10)}
		</span>
	)
}
