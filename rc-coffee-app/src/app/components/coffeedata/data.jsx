"use client"
import {useEffect, useState} from 'react';

export default function Data() {
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setData(err.message);
    }
  }
  console.log(data)
}

