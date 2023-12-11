"use client";

export default async function Index() {
  function doSth() {
    from += 25;
    to += 25;
  }
  return (
    <div>
      <button onClick={doSth}>Button</button>
    </div>
  );
}
