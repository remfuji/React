import { useState } from "react";
import Score from "./Score";
import Hole from "./Hole";

export default function Acchiappalatalpa() {
    const [score, setScore] = useState(0)
  return (
    <>
      <Score score = {score}/>
      <Hole setScore = {setScore}/>
      <Hole setScore = {setScore}/>
      <Hole setScore = {setScore}/>
      <Hole setScore = {setScore}/>
    </>
  );
}
