'use client'
import React from "react";
export default function DateTime({ds}){
  var d = new Date(ds);
	return (
		<span>
			{ds.substring(0,10)} {d.toLocaleTimeString('en-IN')}
		</span>
	)
}

