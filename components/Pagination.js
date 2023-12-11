"use client";
let fromAd;
let toAd;

export default function Pagination() {
  function add25() {
    fromAd += 25;
    toAd += 25;
  }
  return (
    <div>
      <button onClick={add25}>Add 25</button>
    </div>
  );
}
